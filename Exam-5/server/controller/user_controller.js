const { request } = require("express");
const User = require("../models/user_model");
const { hash_password, generate_Token, compare_password } = require("../utils/use");

const create_user = async (req, res) => {

    let user = await User.findOne({ email: req.body.email });

    if (user) {
        return res.status(403).send({ message: "User Already Exists ||" });
    }

    req.body.password = await hash_password(req.body.password);
    user = await User.create(req.body);

    let token = await generate_Token({
        username: user.username,
        role: user.role,
        id: user.id,
    });
    return res.status(201).send({ user, token });
};

const login = async (req, res) => {

    const { email, password } = req.body;

    let user = await User.findOne({ email: email });

    if (!user) {
        return res.status(403).send({ message: "User Not Found ||" });
    }

    let isMatch = await compare_password(user.password, password);

    if (!isMatch) {
        return res.status(403).send({ message: "Invalid Password ||" });
    }

    let token = await generate_Token({
        username: user.username,
        role: user.role,
        id: user.id,
    });
    return res.status(201).send({ user, token });
};

const get_all_users = async (req, res) => {

    let users = await User.find();
    res.status(200).send(users);

};

module.exports = { get_all_users, create_user, login }