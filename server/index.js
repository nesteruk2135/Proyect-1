
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;


const {getApiInfo}=require("./src/controllers/apiInfo")
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT,async () => {
    const countries= await getApiInfo()
    console.log(countries)
    
    console.log('%s listening at 3001');
  })
});
