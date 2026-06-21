import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    stuID: {
        type: String,
        required: [true, "Student ID is required"],
        unique:true,
        minLength:6,
        maxLength:20
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength:3,
        maxLength:50

    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min:[16 , "Minimun age should be 16"],
        max:[50 , "Minimun age should be 50"],
        trim:true,
    },
    gender: {
        type: String,
        required: [true, "Gender is required"],
        enum: ["Female", "Male", "Other"]
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Date of Birth is required"],
    },
    phone: {
        type: Number,
        required: [true, "Phone number is required"],
        unique:true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim:true,
        lowercase:true,
        unique:true
    },
    address: {
        city: {
            type: String,
            required: [true, "City is required"],

        },
        state: {
            type: String,
            required: [true, "State is required"],

        },
        pincode: {
            type: Number,
            required: [true, "Pincode is required"],

        }
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    isActive: {
        type: Boolean,
    },
}, { timestamps: true });

export const Student = mongoose.model("Student", studentSchema);
