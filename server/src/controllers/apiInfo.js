const axios = require("axios");
const {Episodes,Character} = require("../db");



const getApiInfo = async () => {
  try {
    const apiInfo = (await axios.get("https://www.breakingbadapi.com/api/characters?limit=10&offset=10")).data;
    await apiInfo.map((element) => {
      Character.create({
        where: {
          id: element.char_id,
          name: element.name,
          //occupation: element.occupation,
          img:element.img,
          status:element.status,
          nickname:element.nickname,
          },
      });
    });
    return "Character successfully added in database...";
  } catch (e) {
    console.log("/api/src/routes/apiInfo.js apiInfo error: " + e);
  }
};

const getEpisodeData = async () => {
  try{
  const apiInfo = (await axios.get("https://www.breakingbadapi.com/api/episodes?limit=60")).data;
  await apiInfo.map((element) => {
    Episodes.findOrCreate({
      where: {
        //id: element.episode_id,
        title: element.title,
        season: element.season,
        episode:element.episode,
        //character:element.characters,
        nickname:element.nickname,
        },
    });
  });
  return "episodes successfully added in database...";
} catch (e) {
  console.log("/api/src/routes/apiInfo.js apiInfo error: " + e);
}
};



module.exports = { 
  getApiInfo, 
  getEpisodeData, 
};
