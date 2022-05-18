const { Router } = require("express");
const { generarJWT } = require('../helpers/jwt');
const {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
} = require("../controller/login");
const Usuario = require("../models/usuario");

const router = Router();

// Routes

router.post("/login", async (req, res) => {
  const { correo, password } = req.body;
  //console.log(correo)
    try {
        
        // Verificar email
        const usuarioDB = await Usuario.findOne({ correo });

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // Verificar contraseña
        
        //const validPassword = co( password, usuarioDB.password );
        if ( password != usuarioDB.password ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        // Generar el TOKEN - JWT
        const token = await generarJWT( usuarioDB.id );


        res.json({
            ok: true,
            msg: 'Bienvenido'
        });

    } catch (error) {
        //console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
});

module.exports = router;
