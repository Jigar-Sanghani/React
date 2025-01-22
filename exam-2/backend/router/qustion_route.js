const { Router } = require("express")
const { get_all_questions, get_questionById, create_question, update_question, delete_question } = require("../controller/qustion_controller")

const question_router = Router()

question_router.get("/all_qustion", get_all_questions)
question_router.get("/qustion/:id", get_questionById)
question_router.post("/create_qustion", create_question)
question_router.patch("/update/:id", update_question)
question_router.delete("/delete/:id", delete_question)

module.exports = question_router