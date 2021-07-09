import express from "express";
import Student from "../models/studentModel";
import { getToken } from "../utils";

const userRouter = express.Router()



userRouter.post("/signup", async (req, res) => {
    const name = req.body.name
    const rollNo = req.body.rollNo
    const cr = req.body.cr
    const branch = req.body.branch
    const contact = req.body.crContact
    const sem = req.body.sem
    const admin = false


    try {
        const student = new Student({
            name: name,
            rollNo: rollNo,
            branch: branch,
            cr: cr,
            sem: sem,
            contact: contact,
            isAdmin: admin
        })

        const newUser = await student.save()



        res.send({
            _id: newUser._id,
            name: newUser.name,
            rollNo: newUser.rollNo,
            branch: newUser.branch,
            cr: newUser.cr,
            sem: newUser.sem,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }

})



userRouter.post("/login", async (req, res) => {

    try {
        const name = req.body.name
        const roll = req.body.rollNo
        const user = await Student.findOne({ name: name, rollNo: roll })

        if (user) {

            res.send({
                _id: user._id,
                name: user.name,
                rollNo: user.rollNo,
                branch: user.branch,
                cr: user.cr,
                sem: user.sem,
                isAdmin: user.isAdmin,
                token: getToken(user)
            })
        }
        else {
            res.status(404).send({ message: "Not found ,are you registered?" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

})


export default userRouter;