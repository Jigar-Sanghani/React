const exam = require("../model/exam_schema")

const create_exam = async (req, res) => {
    let exam = await exam.create(req.body)
    res.status(201).json(exam)
}

const get_all_exams = async (req, res) => {
    let exams = await exam.find()
    res.json(exams)
}

const get_examById = async (req, res) => {
    let { id } = req.params
    let exam = await exam.findById(id)
    if (!exam) {
        return res.status(404).json({ msg: "Exam Not Found ||" })
    }
    res.json(exam)
}

const update_exam = async (req, res) => {
    let { id } = req.params
    let exam = await exam.findByIdAndUpdate(id, req.body, { new: true })
    if (!exam) {
        return res.status(404).json({ msg: "Exam Not Found ||" })
    }
    res.json(exam)
}

const delete_exam = async (req, res) => {
    let { id } = req.params
    let exam = await exam.findByIdAndDelete(id)
    if (!exam) {
        return res.status(404).json({ msg: "Exam Not Found ||" })
    }
    res.json({ msg: "Exam Deleted Successfully ||" })
}

module.exports = { create_exam, get_all_exams, get_examById, update_exam, delete_exam }