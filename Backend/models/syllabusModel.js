import mongoose from "mongoose";


const Syllabus = new mongoose.Schema({
    type:{type : String ,require:true},
    sem : {type : String ,  require :true },
    subject : {type : String },
    branch : {type : String ,  require :true},
    date:{type:Date , required :true},
    doc:{
        data : Buffer,
        contentType : String,
    }
}) 

const Student = mongoose.model("Syllabus" , Syllabus)

export default Student