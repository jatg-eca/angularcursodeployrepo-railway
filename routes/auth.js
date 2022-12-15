//Se importa algo nuevo
const { Router } = require("express");
const { check } = require("express-validator");
const { crearUsuario, loginUsuario, revalidarToken } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

//Se almacena importación
const router = Router();

//call back como controlador
//crea nuevo usuario
router.post("/new", [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("name", "El nombre tiene que tener al menos 3 caracteres").isLength({min: 3}),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email debe tener formato example@example.com").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("password", "La contraseña debe tener 6 caracteres").isLength(6),
    validarCampos
],crearUsuario );

//login
//valida y revalida token
router.post("/", [ 
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email debe tener formato example@example.com").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("password", "La contraseña debe tener 6 caracteres").isLength({min: 6}),
    validarCampos
] ,loginUsuario);

router.get("/renew", validarJWT,revalidarToken);

//Se exporta el router de esta manera
module.exports = router;
//Se debe importar al inicio del node