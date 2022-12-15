const { response, request } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs")
const {generarJWT} = require("../helpers/jwt")

const crearUsuario = async(req = request, res = response) => {
    //to request body
    // console.log( req.body );
    const {email, name, password} = req.body;

    try{
    // verificas si no hay correo igual
        const usuario = await Usuario.findOne( {email : email} );
        if(usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya existe con ese email"
            })
        }

        //crear usuario con modelo
        const dbUser = new Usuario(req.body);

        // hash de la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // generar JWT
        const token = await generarJWT(dbUser.id, name);

        //crear usuario db
        await dbUser.save();

        // generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: name,
            email: email, ////
            token
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Revise con administrador"
        })
    }
}

const loginUsuario = async(req = request, res = response) => {
    const {email, password} = req.body;

    try {

        const dbUser = await Usuario.findOne({email: email})
        if(!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: "El correo no existe"
            })
        }
        const validPassword = bcrypt.compareSync( password, dbUser.password);
        if(!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "El password no es válido"
            })
        }
        const token = await generarJWT(dbUser.id, dbUser.name);
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: email, //////
            token: token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Hable con el administrador del servidor"
        });
    }
}

const revalidarToken = async(req = request, res = response) => {

    const {uid, name} = req; //
    const token = await generarJWT(uid, name);
    try{

        const dbUser = await Usuario.findById(uid);
        console.log(dbUser)
        const {email} = dbUser;
        
        return res.json({
            ok: true,
            uid: uid,
            name: name,
            email: email, /////
            token: token
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error con el servidor"
        })
    }
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}