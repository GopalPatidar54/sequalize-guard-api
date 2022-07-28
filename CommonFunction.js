module.exports = {
  parseBodyData(req) {
    return (req.query && req.query.data && JSON.parse(req.query.data)) || {};
  },
};
