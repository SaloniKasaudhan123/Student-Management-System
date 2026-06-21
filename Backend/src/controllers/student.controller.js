import { Student } from "../models/Student.model.js";

export const addStudent = async (req, res) => {
    try {
        await Student.create(req.body);
        res.status(201).json({
            success: true,
            message: "Student Added Successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


export const getStudent = async (req , res) =>{
    try{
        const student = await Student.find();
        res.status(200).json({
            success:true,
            data:student
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}