import cors from "cors";
import express from 'express';
import bodyParser from "body-parser";
import  mongoose  from "mongoose";
import userRouter from './routes/user';
import connectRouter from './routes/connect';
import materialRouter from './routes/material';
import adminRouter from './routes/admin';
import path from "path";
// import {dirname } from "path"
// import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import config from "./config"

dotenv.config()

const app=express()

const port = process.env.PORT || 5000 ;

app.use(cors())

app.use(express.urlencoded({extended : true}))

app.use(express.json())

app.use(bodyParser.json({extended : true , limit : '50mb'}));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); 

const mongodbUrl = config.MONGODB_URL

mongoose.connect(mongodbUrl, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    

},
function (err,res){
    try {
        console.log("success connection")
    } catch (err) {
        throw err   
        }
        
    }
)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


app.use(express.static(path.join(__dirname,"frontend/public")))

app.use(express.static(path.join(__dirname,"routes","uploads")))

app.use(express.static('/frontend/build'));

app.use("/api/user" , userRouter)

app.use("/api/connect" , connectRouter)

app.use("/api/material" , materialRouter)

app.use("/api/admin" , adminRouter)

app.get("/" , (req , res)=>{
    res.send("success connection")
})


if(process.env.NODE_ENV === "production"){

    app.use(express.static("frontend/build"))
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "../frontend/build", "index.html"));
    });
      

}




app.listen(port , ()=>console.log(`server started at port ${port}`))