import express from 'express';
import { fileURLToPath } from 'url';
import {dirname} from "path";
import dotenv from "dotenv";
dotenv.config({path: "./env/.env"})

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//dotenv
const PORT = process.env.PORT;

//para que se muestre en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Directorio public
app.use("/resources", express.static("public"));
app.use("/resources", express.static(__dirname + "/public"));

//motor de plantillas ejs
app.set("views",__dirname + "/views");
app.set("view engine", "ejs");

import router from "./routes/router.js";
app.use("/", router);



app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
    
})




