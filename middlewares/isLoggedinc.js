const jwt = require("jsonwebtoken");
const contractorModel = require("../models/contractor-model");

module.exports = async function(req, res, next)
{
    if(!req.cookies.token)
    {
        req.flash("error","You need to login first");
        return res.redirect("/userlogin");
    }

    try{
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await contractorModel
        .findOne({email: decoded.email})
        .select("-password");

        req.user = user;
        next();
    }
    catch(err) {
        req.flash("error", "something went wrong.");
        res.redirect("/userlogin"); 
    }
}