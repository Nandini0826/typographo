const contractorModel = require("../models/contractor-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/generatetoken");
module.exports.registercontractor = async function(req, res) {
    let {fullname, email, password, contactno,officelocation, detail, products, picture, gstin}= req.body;
    let contractor = contractorModel.findOne({email: email});
    if(user) return res.status(401).send("You already have an account");

    bcrypt.genSalt(10, function(req, res){
        bcrypt.hash(password, hash, async function(req, res){
            if(err) res.send(err.message);
            else{
                let contractor = await contractorModel.create({
                    fullname,
                    email, 
                    password: hash, 
                    contactno,
                    officelocation, 
                    detail, 
                    products, 
                    picture, 
                    gstin
                })
                let token = generateToken(contractor);
                res.cookie("token", token);
                res.send("contractor created successfully");
            }

        })
    })
};

module.exports.logincontractor = async function(req, res) {
    let {email, password} = req.body;
    let contractor = await contractorModel.findOne({email: email});
    if(!contractor) {
        req.flash("error","Email or password incorrect");
        res.redirect("/");
    }

    else{
        bcrypt.compare(password, user.password, function(err, result){
            if(result)
            {
                let token = generateToken(contractor)
                res.cookie("token", token);
                res.redirect("/contractorprofile")
            }
            else{
                req.flash("error","Email or password incorrect");
                res.redirect('/index')
            }
        })
    }
};

module.exports.logout = async function (req, res) {
    res.cookie("token", "");
    res.redirect("/");    
};

module.exports.deletecontractor = async function(req, res) {
    let contractor = await contractorModel.findById(req.params.id);
    if(!contractor)
    {
        req.flash("Contractor not found");
    }
    else
    {
        await contractorModel.findByIdAndDelete(req.params.id);
        res.cookie("token", "");
        res.redirect("/");
        req.flash("Contractor id deleted successfully!");
    }
}