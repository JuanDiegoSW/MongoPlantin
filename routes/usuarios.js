const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router();

const {usuariosGet,
    AddPlantGarden,
    GetPlantsGarden,
    DeletePlantGarden} = require('../controller/usuarios')

router.get('/usuarios',usuariosGet);
router.get('/usuarios/:email', GetPlantsGarden)
router.put('/usuarios/:email',AddPlantGarden)
router.delete('/usuarios/:id/:idplant',DeletePlantGarden)
module.exports = router;