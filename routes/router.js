import express from "express";

const router = express.Router();

//home
router.get('/', (req, res) => {
    res.render("home/home");
});
//contacto
router.get('/contacto',(req,res) =>{
    res.render("home/contacto");
});
//calendario
router.get('/calendario',(req,res)=>{
    res.render("home/calendario")
});
//imagenes
router.get('/imagenes',(req,res)=>{
    res.render("home/imagenes")
});
//instituciones
router.get('/instituciones',(req,res)=>{
    res.render("home/instituciones")
});
//noticias
router.get('/noticias',(req,res)=>{
    res.render("home/noticias")
});
//records
router.get('/records',(req,res)=>{
    res.render("home/records")
});
//reglamentos
router.get('/reglamento',(req,res )=>{
    res.render("home/reglamento")
});
//torneos
router.get('/torneos',(req,res)=>{
    res.render("home/torneos")
});
//legales
router.get('/legales',(req,res)=>{
    res.render("home/legales")
});

export default router;