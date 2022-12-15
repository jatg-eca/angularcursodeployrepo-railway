//importa express
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/config");
const path = require("path")

require("dotenv").config();

//se crea app de express
const app = express(); //una función de la const

dbConnection();

//directorio público
app.use(express.static("public"))

//CORS
app.use( cors() );
//Lectura  parseo del body, permite requestbody
app.use( express.json() );

//Configurar rutas
//Middleware función que se ejecuta al interpretar código
app.use("/api/auth", require("./routes/auth"));


//Manejo de todas rutas
app.get("*", (req, res) => {
    res.sendFile( path.resolve(__dirname, "public/index.html"))
})

//se levanta aplicación en un puerto:
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});










// //GET
// app.get("/", ( req, res ) => {
//     console.log("Petición en Slash")
//     res.status(303).json({
//         ok: true,
//         msg: "Todo cool",
//         udid: 1234
//     });
// })
