const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexTienda = {};
const Tienda = require('../models/tienda');


indexTienda.tiendasGet = async(req = request, res = response) => {
    
    const tiendas = await Tienda.find({}).lean();

    res.json(tiendas);

    //res.render('productos/listproducts',{productos});
}
module.exports = indexTienda;