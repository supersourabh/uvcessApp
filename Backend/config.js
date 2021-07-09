import dotenv from "dotenv"


dotenv.config()

export default {
    JWT_SECRET : process.env.JWT_SECRET||"uvce",
    //MONGODB_URL : "mongodb+srv://uvcess:uvcess@cluster0.ohu2v.mongodb.net/uvcess?retryWrites=true&w=majority"
    MONGODB_URL:"mongodb://localhost/UVCE_SS"
}
