const pwikiService = require("../services/veeamService");

const getAll = async (req, res) => {
    const documents = await pwikiService.getAll();
    return res.status(200).json(documents);
};

module.exports = {
    getAll
};