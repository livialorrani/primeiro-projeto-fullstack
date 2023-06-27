const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:String,
    author:String,
    year:String,
    picture:String,
    numberPages:String,
    edits:String
})


mongoose.model("book",BookSchema)