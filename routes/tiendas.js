const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
//const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router();

const {tiendasGet,
    tiendaPost,
    tiendaCreate,
    edittienda,
    tiendaPut,
    tiendaPatch,
    tiendasDelete,} = require('../controller/tiendas')

router.get('/tiendas',tiendasGet);

/*
router.get('/tiendas/add', tiendaPost);
router.post('/tiendas/create',tiendaCreate );

router.get('/tiendas/edit/:id',edittienda);
router.put('/tiendas/edit/:id',tiendaPut );

router.delete('/tiendas/delete/:id',tiendasDelete );*/

//router.patch('/tiendas', usuariosPatch );
module.exports = router;