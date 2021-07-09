import mongoose from "mongoose";


const MembersSchema = new mongoose.Schema({
    name : {type : String ,  require : true},
    work : {type : String ,  require : true},
    contact : {type : String , require :true , unique : true , sparse : true}
}) 

const Members = mongoose.model("Members" , MembersSchema)

export default Members