import jwt, { decode } from "jsonwebtoken";
import config from "./config.js";


const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        rollNo: user.rollNo,
        branch: user.branch,
        isAdmin: user.isAdmin,
        cr: user.cr
    }, config.JWT_SECRET, {
        expiresIn: '365d'
    })
}


const isAuth = (req, res, next) => {
    const Auth = req.headers.authorization;
    if (Auth) {
        const token = Auth.slice(7, Auth.length);
        jwt.verify(token,
            config.JWT_SECRET,
            (error, decode) => {
                if (error) {
                    res.status(401).send({ message: "Unauthorized" })
                }
                else {
                    res.user = decode;
                    next();
                }
            }
        )
    } else {
        res.status(401).send({ message: "in auth Token not supplied" })
    }
}

const isAdmin = (req, res, next) => {
    const Auth = req.headers.authorization;
    if (Auth) {
        const token = Auth.slice(7, Auth.length);
        jwt.verify(token,
            config.JWT_SECRET,
            (error, decode) => {
                if (error) {
                    res.status(401).send({ message: "Unauthorized" })
                }
                else {
                    res.user = decode;
                    if(decode.isAdmin){
                        next()
                    }
                    else{
                        return res.status(401).send({ message: "Admin token not valid" })

                    }
                    
                }
            }
        )
    } else {
        res.status(401).send({ message: "in admin Token not supplied" })
    }
    // if (req.user && req.user.isAdmin) {
    //     return next()
    // } else {
        // return res.status(401).send({ message: "Admin token not valid" })
    // }
}

const isCr = (req, res, next) => {
    const Auth = req.headers.authorization;
    if (Auth) {
        const token = Auth.slice(7, Auth.length);
        jwt.verify(token,
            config.JWT_SECRET,
            (error, decode) => {
                if (error) {
                    res.status(401).send({ message: "Unauthorized" })
                }
                else {
                    res.user = decode;
                    if(decode.cr){
                        next()
                    }
                    else{
                        return res.status(401).send({ message: "Cr token not valid" })

                    }
                    
                }
            }
        )
    } else {
        res.status(401).send({ message: "in cr Token not supplied" })
    }
    // console.log(req.user);
    // if (req.user && req.user.cr) {
    //     return next()
    // } else {
    //     return res.status(401).send({ message: "CR token not valid" })
    // }
}


export { isAuth, isAdmin, getToken, isCr }