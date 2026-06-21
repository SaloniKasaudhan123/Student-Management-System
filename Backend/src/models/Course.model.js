import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    courseId:{
        type:"String",
        required:[true, "courseId  is required"],
        unique:[true , "Course Id should be unique"],
        trim:true,
        uppercase:true,
    },
    courseName:{
        type:"String",
        required:[true, "CourseName  is required"],
        unique:true,
        trim:true,
    },
    duration:{
        type:Number,
        required:[true, "Duration  is required"],
        min:1,
    },
    fee:{
        type:Number,
        required:[true, "Fee  is required"],
        min:0,
    },
    description:{
        type:"String",
        trim:true,
        default:""
    },
    isActive: {
        type: Boolean,
        default:true,
    }
} , {timestamps:true});

export const Course = mongoose.model("Course",courseSchema)