const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const indexUsuario = {};
const Usuario = require("../models/usuario");
const { json } = require("express/lib/response");
const { handle } = require("express/lib/application");
const usuario = require("../models/usuario");
plants = [];
indexUsuario.usuariosGet = async (req = request, res = response) => {
  const usuarios = await Usuario.find({}).lean();
  res.json(usuarios);
  //console.log(usuarios)

  //res.render('usuarios/index',{usuarios});
};
/*
indexUsuario.usuariosPost = async(req, res = response) => {
    res.render('usuarios/new-user');
}
indexUsuario.usuariosCreate = async(req, res) => {
    
    const { nombre, correo, password, rol,img } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol,img });

    // Encriptar la contraseña
    //const salt = bcryptjs.genSaltSync();
    //usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();
    res.redirect('/');
    
}
indexUsuario.editUsuario = async (req,res) =>{
    const usuario= await Usuario.findById(req.params.id).lean();
    console.log(usuario.password)

    res.render('usuarios/edit',{usuario})
}

indexUsuario.usuariosPut = async(req, res = response) => {
    
    const { id } = req.params;
    const { _id, password, google, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.redirect("/")
}

indexUsuario.usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

indexUsuario.usuariosDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    const usuario = await Usuario.findByIdAndDelete( id );

    //const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );
    res.redirect('/');

    //res.json(usuario);
}*/
indexUsuario.AddPlantGarden = async (req = request, res = response) => {
  try {
    //const id = req.params.id;
    const email = req.params.email;
    const data = req.body;
    //console.log(data)
    //const usuario = await Usuario.findByIdAndUpdate(id, data);
    /*let plantas = JSON.stringify(req.body.plantas)
    Usuario.findOneAndUpdate(
        {id:id},
        {$push:{
            'plantas':{
                plantas:plantas
            }
        }}
    )*/
    var plant = {
        rfc : req.body.rfc,
        nombre : req.body.nombre,
        informacion : req.body.informacion,
        img : req.body.img,
    }
    const usuario =  await Usuario.findOneAndUpdate(
        { correo : req.params.email },
        { $push:{plantas :plant}},
        {safe:true,upsert:true}
    )
    console.log(usuario)

    res.json({
        msg: 'Agregado Correctamente'
    });
  } catch (error) {
    console.log("ERROR " + error);
  }
};
indexUsuario.UpdateGarden = async (req = request, res = response) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const usuario = await Usuario.findByIdAndUpdate(id, data);
  
      //res.send({ data: usuario });
    } catch (error) {
      console.log("ERROR" + error);
    }
  };
  indexUsuario.DeletePlantGarden = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const idplant = req.params.idplant;
      console.log(req.params.idplant)
      const data = req.body;
      //var doc = await Usuario.plantas.pull(idplant)
      //var doc = usuario.plantas._id(idplant).remove();
      //Usuario.save()
      var doc = await Usuario.updateMany(
        { _id: id },
        { $pull: { plantas: { _id: idplant } } },
        { multi: false }
    );
    res.json({
        msg: 'Planta Eliminada Correctamente'
    });
    /*
      usuario.save(function (err) {
        if (err) return handleError(err);
        console.log('the subdocs were removed');
      });*/
      /*
      var doc = await Usuario.findOneAndUpdate(
          {_id:id},
          {$pull:{subdocumentsArray:{_id:idplant}}},
          {new:true}
      )*/
      
      //res.send({ data: usuario });
    } catch (error) {
      console.log("ERROR " + error);
    }
  };
  indexUsuario.GetPlantsGarden = async (req = request, res = response) => {
    try {
      //const idUser = req.params.id
      //const correo = req.params.email
      //console.log(req.params.email)
      //console.log(idUser)
      //const usuario = await Usuario.findOne({_id:idUser});
      const usuario = await Usuario.findOne({correo : req.params.email}).lean();//,{plantas:0,_id:0}).lean();
      //console.log(usuario)
      const data= usuario.plantas;
      //console.log(data)
      res.json(data);
      
      //console.log(data)
      //console.log(usuarios.plantas)
      //let plantas = usuarios.parse();
      //console.log(plantas)
      //res.json(usuarios);
      //console.log(usuarios)
    //res.send({ plantas });
    //let x = JSON.stringify(usuario);
    //console.log(x)

    /*
      usuario.save(function (err) {
        if (err) return handleError(err);
        console.log('the subdocs were removed');
      });*/
      /*
      var doc = await Usuario.findOneAndUpdate(
          {_id:id},
          {$pull:{subdocumentsArray:{_id:idplant}}},
          {new:true}
      )*/
      
      //res.send({ data: usuario });
    } catch (error) {
      console.log("ERROR " + error);
    }
  };
module.exports = indexUsuario;
