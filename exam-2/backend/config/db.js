
const mongoose = require('mongoose')

const db = async () => {
    await mongoose.connect("mongodb://localhost:27017/exam-2")
    console.log("Connect to Mongo Server ||")

}

module.exports = db
