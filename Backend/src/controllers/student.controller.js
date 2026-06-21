import { Student } from "../models/Student.model.js";

export const addStudent = async (req, res) => {
    try {
        await Student.create(req.body);
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
        const student = await Student.find();
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
            message:"Student updated successfully",
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
            message:"Student deleted successfully",
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}