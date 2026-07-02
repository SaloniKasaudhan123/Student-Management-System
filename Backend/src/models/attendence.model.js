import mongoose from 'mongoose'

const attendenceSchema = new mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    date:{
        type:Date,
        required:[true, "Date is required"],
    },
    status:{
        type:String,
        required:true,
        enum:["Present","Absent" , "Leave"]
    }
} , {timestamps:true});

export const Attendence = mongoose.model("Attendence",attendenceSchema);