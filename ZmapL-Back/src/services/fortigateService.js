const conn = require("./connection");

const getAll = async () => {
  const [tableResults] = await conn.execute("SELECT * FROM fortigate");
  return tableResults;
};

const createEntry = async (body) => {
  const {
    VDOM,
    ligeroCustomerId,
    ligeroEmail,
    ligeroService,
  } = body;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query =
    "INSERT INTO fortigate(VDOM, LigeroCustomerId, LigeroEmail, LigeroService, changedAt) VALUES (?, ?, ?, ?, ?)";
  const [createdTask] = await conn.execute(query, [
    VDOM,
    ligeroCustomerId,
    ligeroEmail,
    ligeroService,
    dateUTC,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteEntry = async (id) => {
  const query = "DELETE FROM fortigate WHERE id = ?";
  const removedTask = await conn.execute(query, [id]);
};

const updateEntry = async (id, task) => {
  const {
    VDOM,
    ligeroCustomerId,
    ligeroEmail,
    ligeroService,
  } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query =
    "UPDATE fortigate SET VDOM = ?,  LigeroCustomerId = ?,  LigeroEmail = ?,  LigeroService = ?,  changedAt = ? WHERE id = ?";
  const [updateDoc] = await conn.execute(query, [
    VDOM,
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
