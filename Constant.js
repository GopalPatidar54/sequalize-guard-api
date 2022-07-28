const options = {
  host: 'localhost',
  port: 6606,
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
};

const guardOptions = {
  prefix: '',
  primaryKey: 'id',
  timestamps: false,
  paranoid: false,
  sync: true,
  debug: false,
  userModel: null,
  userPk: 'id', //User Primary Key
  safeGuardDeletes: true,
  userCache: true,
  userCacheTime: 60 * 60 * 24, // 60
};

module.exports = {
  options,
  guardOptions,
};
