
import express  from "express";
import Members from "../models/Members";
import Problems from "../models/ProblemModel";
import Student from "../models/studentModel";
import { isAuth } from "../utils";


const connectRouter =express.Router()



connectRouter.get("/crs" , async (req ,res)=>{
    
    const crs = await Student.find({cr : true})
    try {
        res.send(crs)

    } catch (error) {
        res.status(500).send({message : error.message})
    }

})


connectRouter.get("/members" , async (req ,res)=>{
    

    try {
        const members = await Members.find({})
        res.send(members)
    } catch (error) {
        res.status(500).send({message : error.message})
    }

})

connectRouter.post("/problems" , async (req ,res)=>{
    
    const problem= req.body.about;
    const statement= req.body.problem;
    const id= req.body.rollNo;

    try {

        const newproblem = new Problems({
            problem : problem ,
            statement :statement,
            student :id 
        })

        const createdProblem = await newproblem.save()

            res.send(createdProblem)

    } catch (error) {
        res.status(500).send({message : error.message})
    }

})

export default connectRouter