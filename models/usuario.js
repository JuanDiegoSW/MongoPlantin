
const { Schema, model, Mongoose } = require('mongoose');

const UsuarioSchema = Schema({
    nombres: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    telefono: {
        type: String,
    },
    correo: {
        type: String
    },
    password: {
        type: String
    },
    plantas:[{
         rfc: String,
         nombre: String,
         informacion:String,
         img:String
        }
    ]}
    );



/*UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}*/

//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'usuarios', UsuarioSchema );
