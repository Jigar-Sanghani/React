const question = require("../model/qustion_schema");

const create_question = async (req, res) => {
    const newQuestion = await question.create(req.body);
    res.status(201).json({ msg: "Question Created ||" });
}

const get_all_questions = async (req, res) => {
    try {
        const exams = await question.find();
        res.json(exams);
    } catch (error) {
        console.error("Error :", error);
        res.status(500).json({ error: "Internal Server Error ||" });
    }
};

const get_questionById = async (req, res) => {
    let { id } = req.params
    const question = await question.findById(id);
    if (!question) {
        return res.status(404).json({ msg: "Question Not Found ||" });
    }
    res.json(question);
}

const update_question = async (req, res) => {
    let { id } = req.params;
    const updatedQuestion = await question.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedQuestion) {
        return res.status(404).json({ msg: "Question Not Found ||" });
    }
    res.json(updatedQuestion);
}

const delete_question = async (req, res) => {
    let { id } = req.params;
    const deletedQuestion = await question.findByIdAndDelete(id);
    if (!deletedQuestion) {
        return res.status(404).json({ msg: "Question Not Found ||" });
    }
    res.json({ msg: "Question Deleted Successfully ||" });
}

module.exports = { delete_question, update_question, get_all_questions, get_questionById, create_question }