const express= require("express");
const {Op}=require("sequelize");

const router=express.Router();

const {Character,Episodes}=require("../db");


router.use(express.json());

router.get("/",async(req,res)=>{
    const{name}=req.query;
    try {
        if(name){
            let findName=await Character.findAll({
                where:{
                    name:{
                        [Op.iLike]:`%${name}%`
                    }
                },
                include:Episodes
            })
            if(findName.length){
                return res.json(findName);
            }
            return res.
            status(404)
            .json({
                error:"CHARACTER_NOT_FOUND",
                
            })
        }
        const charactersInDB= await Character.findAll({
            include:{model:Episodes}
        })
        res.status(200).json(charactersInDB)

    } catch (error) {
        console.log("/routes/characters get error",error.message);
        return res.status(404)
        .send ({error:"NOT_FOUND",description:"Server error"})
    }
})
router.get("/:id",async(req,res)=>{
    const{id}=req.params;
    try {
        const character =await Character.findByPk(id,{
            include:{
                model:Episodes,
            }
        })
        character
        ?res.status(200).json(character)
        :res.status(404).json(
            {error:"COUNTRY_NOT_FOUND",
        description:`There is noy a country with ${id.toUpperCase()}`
    })
    } catch (error) {
      console.log("/routes/characterRoutes/:id get error",error);
      res.status(500).send({error:"ID_ERROR",description: "Error found ID"} )
       }
       
})

module.exports=router;