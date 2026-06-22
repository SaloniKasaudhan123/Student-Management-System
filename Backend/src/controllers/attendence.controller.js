import { Attendence } from "../models/attendence.model.js";

export const markAttendence = async (req , res) =>{
    try{
        await Attendence.create(req.body);
        res.status(201).json({
            success:true,
            message:"Attendence Marked"
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
export const getAttendence = async (req , res) =>{
    try{
        const attendance = await Attendence.find();
        res.status(201).json({
            success:true,
            data:attendance,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
export const getAttendenceById = async (req , res) =>{
    try{
        const attendance = await Attendence.findById(req.params.id);
        res.status(201).json({
            success:true,
            data:attendance,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
export const updateAttendence = async (req , res) =>{
    try{
        await Attendence.findByIdAndUpdate(req.params.id , req.body, {new:true});
        res.status(201).json({
            success:true,
            message:"Attendence updated successfully"
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
export const deleteAttendence = async (req , res) =>{
    try{
        await Attendence.findByIdAndDelete(req.params.id);
        res.status(201).json({
            success:true,
            message:"Attendence deleted successfully"
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}