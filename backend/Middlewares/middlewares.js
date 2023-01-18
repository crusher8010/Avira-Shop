const jwt = require('jsonwebtoken');

exports.Validator = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, process.env.KEY, (err, data) => {
            if (err) {
                res.send({ message: 'Please Login first....' })
            } else {
                const temp = data.user;
                req.data = temp;
                next();
            }
        });
    } else {
        res.send({ message: 'Please Login first....' })
    }
}