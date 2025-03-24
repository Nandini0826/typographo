const express = require("express");
const router = express.Router();
const {registeruser, loginuser, logout, deleteuser} = require("../controllers/usercontroller");

router.get("/loginuser", (req, res) => {
    res.render("userlogin");
})



router.post("/register-user", registeruser);
router.post("/login-user",loginuser);
router.get("/logout-user",logout);
router.get("/delete-user",deleteuser);

module.exports = router;