const { response, request } = require("express");
const { validationResult } = require("express-validator");

const validarCampos = (req = request, res = response, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({
            ok: false,
            msg: errors.mapped()
        })
    }

    //al acabar el middleware, se puede llamar al siguiente
    next();
}

module.exports = {
    validarCampos
}