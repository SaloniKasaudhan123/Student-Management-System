import { Student } from "../models/Student.model.js";

export const addStudent = async (req, res) => {
    try {
        console.log("req",req.body)
        await Student.create({...req.body,age:Number(req.body.age)});
        console.log("Student",Student)
        res.status(201).json({
            success: true,
            message: "Student Added Successfully"
        })
    } catch (err) {
        if(err.code === 11000){
            return res.status(400).json({
            success: false,
            message: err.message
        })
        }
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


export const getStudent = async (req, res) => {
    try {
        const student = await Student.find().populate("course");
        res.status(200).json({
            success: true,
            data: student
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: student
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const updateStudent = async (req , res) =>{
    try{
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            message:"Student Updated successfully",
            data: student 
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
export const deleteStudent = async (req , res) =>{
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message:"Student Deleted successfully",
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}