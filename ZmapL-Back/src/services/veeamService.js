const conn = require("./connection");

const getAll = async () => {
  const [tableResults] = await conn.execute("SELECT * FROM veeam");
  return tableResults;
};

const createEntry = async (body) => {
  const { veeamRepoFilesystem, veeamTenant, veeamAcronym, ligeroCustomerId, ligeroEmail, ligeroService } = body;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query =
    "INSERT INTO veeam(VeeamRepoFilesystem, VeeamTenant, VeeamAcronym, LigeroCustomerId, LigeroEmail, LigeroService, changedAt) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const [createdTask] = await conn.execute(query, [
    veeamRepoFilesystem, veeamTenant, veeamAcronym, ligeroCustomerId, ligeroEmail, ligeroService, dateUTC,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteEntry = async (id) => {
  const query = "DELETE FROM veeam WHERE id = ?";
  const removedTask = await conn.execute(query, [id]);
};

const updateEntry = async (id, task) => {
  const { veeamRepoFilesystem, veeamTenant, veeamAcronym, ligeroCustomerId, ligeroEmail, ligeroService } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query =
    "UPDATE veeam SET VeeamRepoFilesystem = ?, VeeamTenant = ?, VeeamAcronym = ?,  LigeroCustomerId = ?,  LigeroEmail = ?,  LigeroService = ?,  changedAt = ? WHERE id = ?";
  const [updateDoc] = await conn.execute(query, [veeamRepoFilesystem, veeamTenant, veeamAcronym, ligeroCustomerId, ligeroEmail, ligeroService, dateUTC, id,]);
  return updateDoc;
};

module.exports = {
  getAll,
  createEntry,
  deleteEntry,
  updateEntry
};