
require('dotenv').config()
const cors = require('cors')
const express = require('express');
const app = express()
const path = require('path');
const db = require('./config/db');
const question_router = require('./router/qustion_route');
const exam_router = require('./router/exam_route');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


app.use("/qustions", question_router)
app.use("/exams", exam_router)

app.listen(4454, () => {
    console.log("listening on port 4454 ||");
    db();
})
