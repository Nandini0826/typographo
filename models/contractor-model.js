const mongoose = require("mongoose");

const contractorSchema = mongoose.Schema({
fullname:{
    type: String,
    minlength: 3,
    trim: true,
},
email: String,
password: String,
contactno: Number,
officelocation: String,
details:{
    type: String,
    minlength: 10,
    trim: true,
},
products:{
    type: Array,
    default: [],
},
picture: String,
Gstin: String,

});
module.exports = mongoose.model("contractor", contractorSchema)
