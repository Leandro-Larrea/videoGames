const { Router } = require('express');
const { Genre } = require("../db.js");
const router = Router();
const axios = require("axios")
const {
    API_KEY
  } = process.env;

async function genres(){

     let apiData = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
     apiData = apiData.data.results.map(e=> e.name)
     apiData.forEach(e => {
        Genre.findOrCreate({
            where:{
                name: e}
        })
     });
    let generos = Genre.findAll() 
    return generos;
}

router.get("/", async(req,res)=>{
    let generos = await genres()
    res.status(200).json(generos)
})


module.exports = router;
