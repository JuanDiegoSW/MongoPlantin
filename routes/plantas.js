const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
//const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router();

const {plantasGet,
    plantaPost,
    plantaCreate,
    editplanta,
    plantaPut,
    plantaPatch,
    plantasDelete,} = require('../controller/plantas')

router.get('/plantas',plantasGet);

/*
router.get('/plantas/add', plantaPost);
router.post('/plantas/create',plantaCreate );

router.get('/plantas/edit/:id',editplanta);
router.put('/plantas/edit/:id',plantaPut );

router.delete('/plantas/delete/:id',plantasDelete );*/

//router.patch('/plantas', usuariosPatch );
module.exports = router;