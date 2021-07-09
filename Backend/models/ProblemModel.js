import mongoose from "mongoose";



const problemSchema = mongoose.Schema({
    problem : {type :String , require:true},
    statement : {type :String , require:true},
    student :{type :String, require :true}
})

const Problems = mongoose.model("Problems" , problemSchema)

export default Problems