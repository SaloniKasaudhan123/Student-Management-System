import mongoose from 'mongoose'

const attendenceSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:[true, "Date is required"],
    },
    markAttendence:[
        {
            student:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Student",
                required:true,
            },
            status:{
                type:String,
                required:true,
                enum:["Present","Absent","Leave"]
            },
        }
    ],
    
} , {timestamps:true});

attendenceSchema.index(
    {"markAttendence.student": 1 , date:1} 
)

export const Attendence = mongoose.model("Attendence",attendenceSchema);