var DataTypes = require("sequelize").DataTypes;
var _actions = require("./actions");
var _permissions = require("./permissions");
var _resources = require("./resources");
var _role_permission = require("./role_permission");
var _role_user = require("./role_user");
var _roles = require("./roles");
var _users = require("./users");

function initModels(sequelize) {
  var actions = _actions(sequelize, DataTypes);
  var permissions = _permissions(sequelize, DataTypes);
  var resources = _resources(sequelize, DataTypes);
  var role_permission = _role_permission(sequelize, DataTypes);
  var role_user = _role_user(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  role_permission.belongsTo(permissions, { as: "permission", foreignKey: "permission_id"});
  permissions.hasMany(role_permission, { as: "role_permissions", foreignKey: "permission_id"});
  role_permission.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(role_permission, { as: "role_permissions", foreignKey: "role_id"});
  role_user.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(role_user, { as: "role_users", foreignKey: "role_id"});
  roles.belongsTo(roles, { as: "parent", foreignKey: "parent_id"});
  roles.hasMany(roles, { as: "roles", foreignKey: "parent_id"});
  role_user.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(role_user, { as: "role_users", foreignKey: "user_id"});

  return {
    actions,
    permissions,
    resources,
    role_permission,
    role_user,
    roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
