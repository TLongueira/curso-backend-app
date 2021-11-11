const express = require("express");
const mysql = require('mysql');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";
    //Middlewares
    this.middlewares();

    //Rutas
    this.routes();
  }
  middlewares() {

    //Lectura y parseo del body
    this.app.use ( express.json());

    //directorio
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuario"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
