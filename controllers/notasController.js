let db = require("../database/models")
let fecha = new Date()
let notasController = {
    crear: (req, res) => {
        db.Notes.findAll()
        .then(function(notas){
            return res.render("crearnotas", {notas:notas})
        })
    },
    guardado: (req, res) => {
        db.Notes.create({
            titulo: req.body.titulo,
            texto: req.body.texto,
            estado: req.body.estado,
            created_at: fecha,
            updated_at: null,
            deleted_at: null,
        })
        .then(() => {
            return res.redirect('/notas')})
        .catch(error => res.send(error))
    },
    listado: (req, res) => {
        db.Notes.findAll()
        .then((notas) =>{
            res.render("listadoNotas", {notas:notas})
        })
    },
    detalle: (req, res) => {
        db.Notes.findByPk(req.params.id)
        .then((notas) =>{
            res.render("detalleNotas", {notas:notas})
        })
    },
    editar: (req, res)=> {
        let notaid = req.params.id
        db.Notes.findByPk(notaid)
        .then(notas=>{ 
            return res.render('editarnotas', {notas})

        })
    },
    actualizar: (req, res)=> {
        db.Notes.update({
            titulo: req.body.titulo,
            texto: req.body.texto,
            estado: req.body.estado,
            created_at: req.body.created_at,
            updated_at: fecha,
            deleted_at: null,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/notas/" + req.params.id)
    },
    borrar: (req, res) => {
        let notaid = req.params.id
        db.Notes.destroy({
            where: {id: notaid}
        })
        res.redirect('/notas')
    }

}
module.exports = notasController