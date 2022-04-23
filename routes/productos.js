const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
//const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router();

const {productosGet,
    productoPost,
    productoCreate,
    editproducto,
    productoPut,
    productoPatch,
    productosDelete,} = require('../controller/productos')

router.get('/productos',productosGet);

/*
router.get('/productos/add', productoPost);
router.post('/productos/create',productoCreate );

router.get('/productos/edit/:id',editproducto);
router.put('/productos/edit/:id',productoPut );

router.delete('/productos/delete/:id',productosDelete );*/

//router.patch('/productos', usuariosPatch );
module.exports = router;