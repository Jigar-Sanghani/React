
require('dotenv').config()
const express = require('express');
const app = express()
const path = require('path');
const db = require('./config/db');
const question_router = require('./router/qustion_route');
const exam_router = require('./router/exam_route');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


app.use("/qustion", question_router)
app.use("/exam", exam_router)

app.listen(8090, () => {
    console.log("listening on port 8090");
    db();
})
