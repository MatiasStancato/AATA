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

router.get('/imagenes',(req,res)=>{
    res.render("home/imagenes")
});

router.get('/instituciones',(req,res)=>{
    res.render("home/instituciones")
});

router.get('/noticias',(req,res)=>{
    res.render("home/noticias")
});

router.get('/records',(req,res)=>{
    res.render("home/records")
});

router.get('/reglamento',(req,res )=>{
    res.render("home/reglamento")
});

router.get('/torneos',(req,res)=>{
    res.render("home/torneos")
});

export default router;