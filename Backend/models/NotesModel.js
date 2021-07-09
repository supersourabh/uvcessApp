import  mongoose from "mongoose";


const NotesSchema = new mongoose.Schema({
    subject : {type : String ,  require :true ,unique:true},
    sem : {type : Number ,  require :true},
    branch : {type : String ,  require :true},
    professor : {type : String ,  require :true},
    date : {type : Date ,  require :true},
    doc : {
        data : Buffer,
        contentType : String,
    }
}) 

const Notes = mongoose.model("Notes" , NotesSchema)

export default Notes