const { Router } = require('express');
const { Videogame } = require("../db.js");
const { Op } = require("sequelize")
const axios = require("axios")
const router = Router();
require('dotenv').config();
const {
  API_KEY
} = process.env;

const linksitos = async() =>{
    multiLink=[];
    for(let i = 1; i < 6; i++){
        multiLink.push(axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&&page=${i}`))
    }
    apiGames = await Promise.all(multiLink);
    let box = [];    
    for(let i = 0; i<apiGames.length; i++){
       box =[...box,...apiGames[i].data.results]
    }
    return box;
}

const getGames = async()=>{
    console.log(3)
    let box = await linksitos();
   
      const apiInfo = box.map(e => {
          return {
                name: e.name,
                id: e.id, 
                description: "asd",
                releaseDate: e.released,
                rating: e.rating,
                platforms: e.platforms.map(p => p.platform.name)     
          }
      })
      gamesData = await Videogame.findAll()
      console.log(gamesData)
      return apiInfo.concat(gamesData)
}

const getName = async(name)=>{   
    const apiGames = await linksitos()
    let arrayNames = apiGames.filter(g =>{ 
     return  g.name.toLowerCase().includes(name.toLowerCase())
    }).map(e => e.name)
    
     const games = await Videogame.findAll({
         where:{
             name: {[Op.substring]: name}
         }
     })
     console.log(games)
     return arrayNames.concat(games)
}

router.get("/",async(req,res)=>{
    const {name} = req.query;
    if(name){
       let r = await getName(name)
       r.splice(15)
       r.length?res.status(200).json({ahi_va_el_name: r}):res.status(404).send("game not found")
       return
    }  
    let apiInfo = await getGames();
    console.log("ruta");
    res.status(200).json({ahi_va_el_json: apiInfo});
})

const getId = async(id)=>{
    let game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    description = {
        description:game.data.description,
        genres: game.data.genres.map(e=> e.name)            
    }

    return description
}

router.get("/:idVideogame",async(req,res)=>{
    const { idVideogame } = req.params;
    if(idVideogame){
    let data = await getId(idVideogame)
    res.status(200).json({description: data});
}
})

router.post("/",async(req,res)=>{
    const {name, id, description, platforms, rating, releaseDate} = req.body;
    if(!name|| !id|| !description || !platforms){
        return res.status(404).send("faltan datos")
    }
    try {
        let game = await Videogame.create(req.body)
        res.status(201).json(game)
    } catch (error) {
        return res.status(404).send("Error en alguno de los datos provistos")
    } 
})

module.exports = router;

// - [ ] __GET /videogames__:
//   - Obtener un listado de los videojuegos
//   - Debe devolver solo los datos necesarios para la ruta principal
// - [ ] __GET /videogames?name="..."__:
//   - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
//   - Si no existe ningún videojuego mostrar un mensaje adecuado
// - [ ] __GET /videogame/{idVideogame}__:
//   - Obtener el detalle de un videojuego en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
//   - Incluir los géneros asociados
// - [ ] __POST /videogames__:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
//   - Crea un videojuego en la base de datos, relacionado a sus géneros.
