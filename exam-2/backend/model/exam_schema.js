const mongoose = require('mongoose')

const exam_schema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    numberOfQuestions: { type: Number, required: true },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});

const exam = mongoose.model('exam', exam_schema);

module.exports = exam;