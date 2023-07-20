//? MONGODB
// import { MongoClient } from "mongodb";
import userModel from "../models/user-model.js";

//? BCRYPT
import bcrypt from "bcryptjs";

//? JWT
import jwt from "jsonwebtoken";

const userLogin = async (req, res) => {
    try {
        //* Look for user model in MongoDB where the email matches the payload email
        const user = await userModel.findOne({ email: req.body.email });
    
        //* Return invalid response if no valid Mongo record is found
        if (user === null) {
          return res.status(401).json("Incorrect Email Address or Password");
        }
    
        //* Compare passwords
        const compare = await bcrypt.compare(req.body.password, user.password);
        const key = "secret-key";
        if (compare) {
          //* Create JWT
          let token;
          try {
            token = jwt.sign({ userId: req.body.id, email: req.body.email }, key, {
              expiresIn: "1h",
            });
            console.log("JWT created");
          } catch (e) {
            console.log("Problem signing jwt: ", e);
          }
          return res.status(200).json(token);
        } else {
          return res.status(401).json("Incorrect Email Address or Password");
        }
      } catch (error) {
        console.log("Error connecting to DB:", error);
      }
}

export default userLogin;