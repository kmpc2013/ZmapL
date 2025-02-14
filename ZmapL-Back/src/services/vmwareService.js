const conn = require("./connection");

const getAll = async () => {
  const [tableResults] = await conn.execute("SELECT * FROM vmware");
  return tableResults;
};

const createEntry = async (body) => {
  const {
    clientVmwareFolder,
    ligeroCustomerId,
    ligeroEmail,
    ligeroService,
  } = body;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query =
    "INSERT INTO vmware(ClientVmwareFolder, LigeroCustomerId, LigeroEmail, LigeroService, changedAt) VALUES (?, ?, ?, ?, ?)";
  const [createdTask] = await conn.execute(query, [
    clientVmwareFolder,
    ligeroCustomerId,
    ligeroEmail,
    ligeroService,
    dateUTC,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteEntry = async (id) => {
  const query = "DELETE FROM vmware WHERE id = ?";
  const removedTask = await conn.execute(query, [id]);
};

const updateEntry = async (id, task) => {
  const {
    clientVmwareFolder,
    ligeroCustomerId,
    ligeroEmail,
    ligeroService,
  } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query =
    "UPDATE vmware SET ClientVmwareFolder = ?,  LigeroCustomerId = ?,  LigeroEmail = ?,  LigeroService = ?,  changedAt = ? WHERE id = ?";
  const [updateDoc] = await conn.execute(query, [
    clientVmwareFolder,
    ligeroCustomerId,
    ligeroEmail,
    ligeroService,
    dateUTC,
    id,
  ]);
  return updateDoc;
};

module.exports = {
  getAll,
  createEntry,
  deleteEntry,
  updateEntry
};
