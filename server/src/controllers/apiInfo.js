const axios=require("axios")
const{Characters,Films}=require ("../db");


const getApiInfo=async()=>{
    try {
        const apiInfo=(await axios.get("https://api.disneyapi.dev/characters")).data;
        await apiInfo.map((element)=>{
            Characters.findOrCreate({
                where:{
                    id:element._id,
                    name:element.name,
                    imageUrl:element.imageUrl,
                    allies:element.allies,
                    enemies:element.enemies,
                    url:element.url,
                }
            })
        })
        return "Character added in database"
    }catch(e){
        console.log("/server/src/routes/apiInfo.js error: " + e)
    }
}

module.exports = { 
    getApiInfo, 
     
  };