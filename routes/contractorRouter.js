const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedinc");
const {registercontractor, logincontractor, logout, deletecontractor} = require("../controllers/contractorcontroller");


router.get("/contractorprofile", isLoggedin, function(req, res)
{
    res.render("contractorprofile");
})


router.post("/register-contractor", registercontractor);
router.post("/logincontractor",logincontractor);
router.get("/logout-contractor",logout);
router.get("/delete-contractor",deletecontractor);

module.exports = router;