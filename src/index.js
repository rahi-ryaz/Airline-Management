
const express=require("express"); 
const bodyParser =require('body-parser');

const {PORT} = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');

const db=require("./models/index");
const {City,Airport} = require("./models/index");



const setupandStartServer = async () => {

   const app=express();

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));

   app.use('/api',ApiRoutes);

   app.listen(PORT, async ()=>{
        console.log(`Server Started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }

        // const city=await City.findOne({
        //     where:{
        //         id: 9
        //     }
        // })
        // const airports = await city.getAirports();
        // console.log(city,airports);
    });
}

setupandStartServer();




