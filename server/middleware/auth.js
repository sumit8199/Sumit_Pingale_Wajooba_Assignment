const jwt = require('jsonwebtoken');
const secretKey = process.env.JWTPRIVATEKEY;

function getUserIdFromToken(getToken) {
  try {
    //console.log("hello123");
    const decoded = jwt.verify(getToken, secretKey);
    console.log("Decoded Token:", decoded);
    return decoded._id;
  } catch (error) {
    console.log("error:",error);
  }
}


//Browser la kuthea
function getUserIdFromTokenVerify(req,token) {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7); // Remove 'Bearer ' from the token
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded._id;
    } catch (error) {
      console.log("Error decoding token:", error);
      return null;
    }
  } else {
    return null; // No token found in the Authorization header
  }
}



//module.exports = getUserIdFromToken;
module.exports = getUserIdFromToken;
module.exports = getUserIdFromTokenVerify;


// const jwt = require('jsonwebtoken');
// const secretKey = process.env.JWTPRIVATEKEY;

// function getUserIdFromToken(getToken) {
//   try {
//     const decoded = jwt.verify(getToken, secretKey);
//     //console.log("Decoded Token:", decoded);
//     return decoded._id;
//   } catch (error) {
//     console.log("error:",error);
//   }
// }

// module.exports = getUserIdFromToken;
