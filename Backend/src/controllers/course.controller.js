import { Course } from "../models/Course.model.js";

export const addCourse = async (req , res) =>{
    try{
        await Course.create(req.body);
        res.status(201).json({
            success: true,
            message: "Course Added Successfully"
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}
export const getCourse = async (req , res) =>{
    try{
        const courses = await Course.find();
        res.status(201).json({
            success: true,
            data:courses,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}
export const updateCourse = async (req , res) =>{
    try{
        const course = await Course.findByIdAndUpdate(req.params.id , req.body , {new : true});
        res.status(201).json({
            success: true,
            message: "Course Updated Successfully"
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}
export const deleteCourse = async (req , res) =>{
    try{
        await Course.findByIdAndDelete(req.params.id);
        res.status(201).json({
            success: true,
            message: "Course Deleted Successfully"
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}