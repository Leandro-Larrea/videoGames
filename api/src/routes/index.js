const { Router } = require('express');
const videogameMidleware = require('./videogames.js')
const genrerMidleware = require('./genres.js')
 const express = require('express');
 const server = express();
// Importar todos los routers;

// Ejemplo: const authRouter = require('./auth.js');

//  const router = Router();

// Configurar los routers
server.use('/videogames', videogameMidleware)
 server.use('/genres', genrerMidleware)
// Ejemplo: router.use('/auth', authRouter);

server.get('/', (req, res) => {
    res.send('Henry Sequelize Homework');
  });

  

module.exports = server;
