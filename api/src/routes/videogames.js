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
     for(let i = 7; i < 8; i++){
         multiLink.push(axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&&page=${i}`))
     }
     apiGames = await Promise.all(multiLink);
     let box = [];    
     for(let i = 0; i < apiGames.length; i++){
        box =[...box,...apiGames[i].data.results]
     }
     return box;
 }

const getGames = async()=>{
    let box = await linksitos();
   
      const apiInfo = box.map(e => {
          return {
                releaseDate: e.released,
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
      return apiInfo.concat(gamesData)
}

router.get("/sort",async (req,res)=>{
    let games = await getGames()
    games = games.sort((a, b) => {
        if(a.releaseDate < b.releaseDate) return -1
    })
    return res.status(200).json(games)
})

const getName = async(name)=>{   
    const apiDbGames = await getGames()
    let arrayNames = apiDbGames.filter(g =>  g.name.toLowerCase().includes(name.toLowerCase())
    )
    if(arrayNames.length) return arrayNames
    throw ("Game not found.")
}

const getPlatforms = async()=>{
    let box = await linksitos();
    const plat = []
    box.forEach((e) => e.platforms.forEach(a =>{
         if(!plat.includes(a.platform.name)){plat.push(a.platform.name)
                }
            }
        )
    )
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
        return res.status(404).send({ahi_va_el_name: error})
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
    throw ("fallido")
    
}

router.get("/:idVideogame",async(req,res)=>{
    const { idVideogame } = req.params;
    if(idVideogame){
        try{
            db = await dbGame(idVideogame)
            return res.status(200).json({data:db})
            }catch(error){
                console.log(error)
                    }
        let data = await getId(idVideogame)
    res.status(200).json({data});
    }
})

 router.get("/platforms/:platform", async(req,res)=>{
     const {platform} = req.params;
     let a = await getGames()
     if(platform === "todos")return res.json(a)
      let b = a.filter(e => {
          if(!e.createdAtDb && e.platforms.filter(a =>{ if(a.platform.name === platform)return a}).length) return e
          if(e.createdAtDb && e.platforms.includes(platform)) return e
      } )
     return res.status(200).json(b)
 })

router.post("/",async(req,res)=>{
    const {name,  description, platforms, genres} = req.body;
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

router.delete("/:id", async (req, res)=>{
    const {id} = req.params
    try {
       await Videogame.destroy({
            where:{
                id:id
            },
        include:{
            model:Genre,
            attributes:["name"]
        },
        through:{
            attributes:[]
        }
    })
    return res.status(200).send(id)
    } catch (error) {
        return res.status(200).send("Somenthing get wrong")
    }
})

router.put("/:id", async(req,res)=>{
    const {id} = req.params
    const updatedGame = await Videogame.findOne({
        where:{
            id:id
        },
        include:{
            model: Genre,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    })
      await updatedGame.update(req.body)
       let newGenres = await Genre.findAll({
           where:{
               name:{
                [Op.in]: req.body.genres
               }
               
           }
       })
        await updatedGame.setGenres(newGenres)

    return res.status(201).json({updatedGame, newGenres})
})





module.exports = router;
