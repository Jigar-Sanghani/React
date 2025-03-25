const mongoose = require('mongoose');

const qustion_schema = new mongoose.Schema({
    question: { type: String, required: true },
    optionA: { type: String, required: true },
    optionB: { type: String, required: true },
    optionC: { type: String, required: true },
    optionD: { type: String, required: true },
    correctAnswer: { type: String, required: true }
});

const question = mongoose.model('qustion', qustion_schema);

module.exports = question;