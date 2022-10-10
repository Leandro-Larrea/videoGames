const { Router } = require('express');
const { Videogame } = require("../db.js");
const { Op } = require("sequelize");
const { Genre } = require("../db.js")
const axios = require("axios");
const router = Router();
require('dotenv').config();
const {
  API_KEY
} = process.env;




const linksitos = async() =>{
    multiLink=[];
    for(let i = 6; i < 11; i++){
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
                genres: e.genres.map(p => p.name),
                img: e.background_image,  
                rating: e.rating,
                platforms: e.platforms
          }
      })
        gamesData = await Videogame.findAll({
            include:{
                model: Genre,
                     attributes: ['name'],
                     through:{
                         attributes: []
                             }  
                    }     
        })
    //    gamesData = gamesData.map(e => {
    //         return {...e, genres: e.genres.map(e => e.name)}
    //     });
      console.log(gamesData)
      return apiInfo.concat(gamesData)
}

const getName = async(name)=>{   
    const apiDbGames = await getGames()
    let arrayNames = apiDbGames.filter(g =>  g.name.toLowerCase().includes(name.toLowerCase())
    )
    
    //  const games = await Videogame.findAll({
    //      where:{
    //          name: {[Op.substring]: name}
    //      }
    //  })
    if(arrayNames.length) return arrayNames
    throw ("Game not found.")
}

const getPlatforms = async()=>{
    console.log(3)
    let box = await linksitos();
    const plat = []
    box.forEach((e) => e.platforms.forEach(a =>{ if(!plat.includes(a.platform.name)){plat.push(a.platform.name)}}))
    return plat
    }

router.get("/platforms",async(req,res)=>{
    let platforms = await getPlatforms()
     return res.status(200).json(platforms)
 })

router.get("/",async(req,res)=>{
    const {name} = req.query;
    if(name)try{
       let r = await getName(name)
       r.splice(15)
       return res.status(200).json({ahi_va_el_name: r})
    }  catch(error){
        return res.status(404).json({ahi_va_el_name: error})
    }
    let apiInfo = await getGames();
    console.log("ruta");
    res.status(200).json({ahi_va_el_json: apiInfo});
})

const getId = async(id)=>{
    let game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    description = {
        name: game.data.name,
        description:game.data.description.replace(/<[^>]*>?/g, ""),
        genres: game.data.genres.map(e=> e.name),
        releaseDate: game.data.released,
        img: game.data["background_image"],
        rating: game.data.rating,
        platforms: game.data.platforms.map(p => p.platform.name)
    }
    return description
}

async function dbGame(idg){
    let descriptionDb = await Videogame.findAll({
        where: {
                id: idg
            },
            include:{
                model: Genre,
                     attributes: ['name'],
                     through:{
                         attributes: []
                             }  
                    }     
    })
    if(descriptionDb.length)return descriptionDb[0]
    return Error ("fallido")
    
}

router.get("/:idVideogame",async(req,res)=>{
    const { idVideogame } = req.params;
    if(idVideogame){try{
            db = await dbGame(idVideogame)
            return res.status(200).json({data:db})
        }catch{}
        // 
        //     console.log("le erro el qliao")
        //      descriptionDb = descriptionDb[0]
        //      return res.status(200).json({descriptionDb})}
        let data = await getId(idVideogame)
    res.status(200).json({data});
    }
})

router.post("/",async(req,res)=>{
    const {name,  description, platforms, rating, releaseDate, genres} = req.body;
    if(!name|| !description || !platforms || !genres){
        return res.status(404).send("faltan datos")
    }
    try {
        let game = await Videogame.create(req.body)
        let genresDb = await Genre.findAll({where:{
            name: genres
        }})
        game.addGenre(genresDb)
        res.status(201).json(game)
    }   catch (error) {
        return res.status(404).send("Error en alguno de los datos provistos")
    } 
})




module.exports = router;


// let typesDb = await Type.findAll({
//     where : { name : types} 
// })
// newPokemon.addTypes(typesDb)
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
