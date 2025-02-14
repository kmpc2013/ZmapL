const validateFieldVeeam = (req, res, next) => {
    const { body } = req;

    // veeamRepoFilesystem
    if (body.veeamRepoFilesystem.trim().length > 200) {
        return res.status(400).json({ message: 'The field "veeamRepoFilesystem" is to long' });
    }

    // veeamTenant
    if (body.veeamTenant.trim().length > 200) {
        return res.status(400).json({ message: 'The field "veeamTenant" is to long' });
    }

    // veeamAcronym
    if (body.veeamAcronym.trim().length > 200) {
        return res.status(400).json({ message: 'The field "veeamAcronym" is to long' });
    }

    // ligeroCustomerId
    if (body.ligeroCustomerId === undefined) {
        return res.status(400).json({ message: 'The field "ligeroCustomerId" is required' });
    }
    if (body.ligeroCustomerId === "") {
        return res
            .status(400)
            .json({ message: 'The field "ligeroCustomerId" cannot be empty' });
    }
    if (body.ligeroCustomerId.trim().length > 200) {
        return res.status(400).json({ message: 'The field "ligeroCustomerId" is to long' });
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
    if (body.ligeroEmail.trim().length > 45) {
        return res.status(400).json({ message: 'The field "ligeroEmail" is to long' });
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
    if (body.ligeroService.trim().length > 45) {
        return res.status(400).json({ message: 'The field "ligeroService" is to long' });
    }

    next();
};


module.exports = {
    validateFieldVeeam
};