const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generatetoken");

module.exports.registeruser = async function (req, res) {
    let {fullname, email, password}= req.body;
    let user = userModel.findOne({email: email});
    if(user) return res.status(401).send("You already have an account");

    bcrypt.gensalt(10,  function(err, salt){
        if(err) return res.send(err.message);
        bcrypt.hash(password, hash, async function(err, hash){
            if(err) return res.send(err.message);
            else{
                let user = await userModel.create(
                    {
                        fullname,
                        email,
                        password: hash
                    });
                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.send("user created successfully");
            }
    })
        })

       

    
};
module.exports.loginuser = async function (req, res) {
    let {email, password} = req.body;
    let user = await userModel.findOne({email: email});
    if(!user) {req.flash("Email or password incorrect");
        return res.redirect("/loginuser")
    }

    else
    bcrypt.compare(password, user.password, function(err, result){
    if(result)
    {
        let token = generateToken(user);
        res.cookie("token", token);
        res.redirect("/home");
    }
    else{
        req.flash("Email or password incorrect");
    }
})

    
};
module.exports.logout = async function (req, res) {
    res.cookie("token", "");
    res.redirect("/");    
}
module.exports.deleteuser = async function (req, res) {
    let user = await userModel.findById(req.params.id);
    if(!user) {
        req.flash("User not found");
    }
    else{
    await userModel.findByIdAndDelete(user._id);
    res.cookie("token", "");
    res.redirect("/"); 
    req.flash("User id deleted Successfully!");

    }    
    
}