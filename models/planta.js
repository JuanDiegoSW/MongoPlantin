
const { Schema, model } = require('mongoose');

const PlantaSchema = Schema({
    rfc: {
        type: String,
    },
    nombre: {
        type: String,
    },
    informacion : {
        type: String
    },
    img: {
        type: String,
    }
});
module.exports = model( 'plantas', PlantaSchema );