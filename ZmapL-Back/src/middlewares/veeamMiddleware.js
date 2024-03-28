const validateFieldVeeam = (req, res, next) => {
    const { body } = req;

    // ligeroCustomerId
    if (body.ligeroCustomerId === undefined) {
        return res.status(400).json({ message: 'The field "ligeroCustomerId" is required' });
    }
    if (body.ligeroCustomerId === "") {
        return res
            .status(400)
            .json({ message: 'The field "ligeroCustomerId" cannot be empty' });
    }

    // ligeroEmail
    if (body.ligeroEmail === undefined) {
        return res.status(400).json({ message: 'The field "ligeroEmail" is required' });
    }
    if (body.ligeroEmail === "") {
        return res
            .status(400)
            .json({ message: 'The field "ligeroEmail" cannot be empty' });
    }

    // LigeroService
    if (body.ligeroService === undefined) {
        return res.status(400).json({ message: 'The field "ligeroService" is required' });
    }
    if (body.ligeroService === "") {
        return res
            .status(400)
            .json({ message: 'The field "ligeroService" cannot be empty' });
    }
    next();
};


module.exports = {
    validateFieldVeeam
};