const { Router } = require('express');
const { check } = require('express-validator');

const { esRoleValido, existEmail, existeUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const { usuariosGet, 
        usuariosPut,    
        usuariosPost,     
        usuariosDelete,     
        usuariosPatch 
      } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

  router.put('/:id', [
    check('id', 'Este no es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId),
    check('rol').custom( esRoleValido ),
    validarCampos
  ],
  usuariosPut);

  router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 6 letras').isLength({ min:6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( existEmail ),
    //check('rol', 'No es un Rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( esRoleValido ),
    validarCampos
  ] , usuariosPost);

  router.delete('/:id',[
    check('id', 'Este no es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId),
  ], usuariosDelete);

  router.patch('/', usuariosPatch);






module.exports = router;