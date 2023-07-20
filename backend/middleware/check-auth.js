import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    // Authorization: 'Bearer TOKEN'
    // TOKEN is stored as a string as part of the HEADER
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res
        .sendStatus(401)
        .json("Authentication Failed JSON Web Token undefined");
    }
    // Decode token
    let decodedToken;
    try {
    //TODO
    //! change to a more secure key and make .env var
      decodedToken = jwt.verify(token, "secret-key");
      next();
    } catch (e) {
      console.log("problem decoding token", e);
    }

    //req.userData = {userId: decodedToken.userId};
    //next();
    return decodedToken;
  } catch (error) {
    return res
      .status(401)
      .json("Authentication Failed. Problem getting authorization headers");
  }
};

export default auth;
