const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const blogSchema = new Shema({
    title : String,
    boby : String,
    image : String,
    createdAt :{
        type: Date,
        default:Date.now,
    },
});

module.exports = mongoose.model("Blog", blogSchema);