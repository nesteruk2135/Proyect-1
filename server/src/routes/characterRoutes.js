const express= require("express");
const {Op}=require("sequelize");

const router=express.Router();

const {Characters,Films}=require("../db");


router.use(express.json());

router.get("/",async(req,res)=>{
    const{name}=req.query;
    try {
        if(name){
            let findName=await Characters.findAll({
                where:{
                    name:{
                        [Op.iLike]:`%${name}%`
                    }
                },
                //include:Films
            })
            if(findName.length){
                return res.json(findName);
            }
            return res.
            status(404)
            .json({
                error:"COUNTRY_NOT_FOUND",
                description:"the entered country does not exist."
            })
        }
        const CharacterInDB= await Characters.findAll({
            //include:{model:Films}
        })
        res.status(200).json(CharacterInDB)

    } catch (error) {
        console.log("/routes/characterRoutes get error",error.message);
        return res.status(404)
        .send ({error:"NOT_FOUND",description:"Server error"})
    }
})
router.get("/:id",async(req,res)=>{
    const{id}=req.params;
    try {
        const character =await Characters.findByPk(id,{
          /*   include:{
                model:Activity,
            } */
        })
        country
        ?res.status(200).json(character)
        :res.status(404).json(
            {error:"CHARACTER_NOT_FOUND",
        description:`There is not character with ${id.toUpperCase()}`
    })
    } catch (error) {
      console.log("/routes/CharacterRoutes/:id get error",error);
      res.status(500).send({error:"ID_ERROR",description: "Error found ID"} )
       }
       
})

module.exports=router;