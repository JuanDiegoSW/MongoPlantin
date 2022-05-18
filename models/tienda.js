
const { Schema, model } = require('mongoose');

const TiendaSchema = Schema({
    nombre: {
        type: String,
    },
    img: {
        type: String,
    }
});
module.exports = model( 'tiendas', TiendaSchema );