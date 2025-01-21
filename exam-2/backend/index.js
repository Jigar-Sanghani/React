
require('dotenv').config()
const express = require('express');
const app = express()
const path = require('path');
const router = require('./router/user_route');
const { db } = require('./model/user_schema');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use("/user", router)

app.listen(8090, () => {
    console.log("listening on port 8090");
    db()
})
