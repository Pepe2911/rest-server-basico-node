const { response } = require('express')



const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - Controlador'
    });
  }

const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - Controlador',
        id
    });
  }

const usuariosPost = (req, res = response) => {
    const {Nombre, Edad} = req.body;
    res.json({
        msg: 'post API - Controlador',
        Nombre,
        Edad
    });
  }

  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
  }

  const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
  }

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost, 
    usuariosDelete,
    usuariosPatch
  }