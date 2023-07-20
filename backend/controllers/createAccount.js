//? MONGODB
// import { MongoClient } from "mongodb";
import userModel from "../models/user-model.js";

//? BCRYPT
import bcrypt from "bcryptjs";

//? JWT
import jwt from "jsonwebtoken";

const createAccount = async (req, res) => {

    //* Check if email already exists
    //* if so break out of account creation
    try{
        let emailExists = await userModel.findOne({ email: req.body.email });
        if (emailExists) {
            return res.status(409).json('An account is already associated with this email address.');
          }
    }
    catch(e){
        console.log("ERROR CHECKING EMAIL EXISTS", e)
        return res.status(500).json('Signing up failed. Please try again later.');
    }

    //* hash password
    let hashedPassword;
    try{
        hashedPassword = await bcrypt.hash(req.body.password, 12);
    }
    catch(e){
        console.log('Error hashing password with bcrypt', e);
    }

    //* Store email and password in Mongo
    try{
        let storeInMongo = await userModel.create({
            email: req.body.email,
            password: hashedPassword,
            role: 'User'
        });
    }
    catch(e){
        console.log("Error saving to MongoDB", e);
    }

    //* Create and sign JWT
    let token;
    try{
        let JWTpayload = new userModel({
            email: req.body.email,
            password: req.body.password,
            id: req.body._id,
        });
        //TODO
        //! change to a more secure key and make .env var
        const key = 'secret-key';
        token = jwt.sign({ userId: JWTpayload.id, email: JWTpayload.email }, key, {
            expiresIn: "1h",
          });
    }
    catch(e){
        console.log('Error creating JWT', e);
    }

   return res.status(201).json({
    "jwt": token
   });
};

export default createAccount;