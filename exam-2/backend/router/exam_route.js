const { Router } = require("express");
const { get_all_exams, create_exam, update_exam, delete_exam, get_examById } = require("../controller/exam_controller");

const exam_router = Router()

exam_router.get("/all_exam", get_all_exams);
exam_router.get("/exam/:id", get_examById);
exam_router.post("/create", create_exam);
exam_router.patch("/update/:id", update_exam);
exam_router.delete("/delete/:id", delete_exam);


module.exports = exam_router