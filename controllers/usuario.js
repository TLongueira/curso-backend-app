const{ response } = require ('express');

const usuariosGet = (req, res = response) => {

    res.json({
        mensaje: 'Peticion get - controlador', 

    });
}

const usuariosPut=("/", (req, res) => {
    const id =req.params.id;
    res.json({
        mensaje: 'Peticion put',
        id

    });
});
const usuariosDelete=("/", (req, res) => {
    res.json({
        mensaje: 'Peticion delete'

    });
});
const usuariosPost=("/", (req, res) => {
    const {hola}=req.body;

    res.json({
        mensaje: 'Peticion post controlador',
        hola
    });
});


module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost
}