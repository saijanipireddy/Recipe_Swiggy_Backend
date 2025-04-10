import jwt from 'jsonwebtoken'

export const middleWare = function(req,res,next) {
    try {
        let token = req.header('x-token')
        if(!token) {
            return res.status(400).send('Token Not Found')
        }

        let decode = jwt.verify(token, 'jwtsecret');
        req.user = decode.user;
        next();
    }
    catch(err) {
        console.log(err)
        return res.status(500).send('server Error')
    }
}