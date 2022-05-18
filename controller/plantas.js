const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexPlanta = {};
const Planta = require('../models/planta');


indexPlanta.plantasGet = async(req = request, res = response) => {
    
    const plantas = await Planta.find({}).lean();

    res.json(plantas);

    //res.render('productos/listproducts',{productos});
}
module.exports = indexPlanta;