
const { Router } = require("express");
const user_router = require("./user_router");

const route_index = Router();

route_index.use("/user", user_router);

module.exports = route_index;