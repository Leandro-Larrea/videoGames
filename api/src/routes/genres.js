const { Router } = require('express');
const { Genre } = require("../db.js");
const router = Router();
const axios = require("axios")

async function genres(){

     let apiData = await axios.get("https://api.rawg.io/api/genres?key=c007ee7f7d5b421fa7071db608327284")
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

// - [ ] __GET /genres__:
//   - Obtener todos los tipos de géneros de videojuegos posibles
//   - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
