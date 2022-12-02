const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = express.Router();

const { Character,Episodes} = require("../db.js");
;

router.use(express.json());


router.get("/",async(req,res)=>{
    try {
        const episodes=await Episodes.findAll({
            include:{model:Character}
        })
res.json(episodes);

    } catch (error) {
        console.log(error)
        res.json({error:"there is not an episodes "})
        
    }
})
module.exports = router;