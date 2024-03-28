const conn = require("./connection");

const getAll = async () => {
  const [documents] = await conn.execute("SELECT * FROM veeam");
  return documents;
};

module.exports = {
  getAll
};