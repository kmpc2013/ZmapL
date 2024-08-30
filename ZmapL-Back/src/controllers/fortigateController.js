const fortigateService = require("../services/fortigateService");

const getAll = async (req, res) => {
    const documents = await fortigateService.getAll();
    return res.status(200).json(documents);
};

const createEntry = async (req, res) => {
    const createEntry = await fortigateService.createEntry(req.body);
    return res.status(201).json(createEntry);
};

const deleteEntry = async (req, res) => {
    const { id } = req.params;
    await fortigateService.deleteEntry(id);
    return res.status(204).json();
};

const updateEntry = async (req, res) => {
    const { id } = req.params;
    await fortigateService.updateEntry(id, req.body);
    return res.status(204).json();
};


module.exports = {
    getAll,
    createEntry,
    deleteEntry,
    updateEntry
};