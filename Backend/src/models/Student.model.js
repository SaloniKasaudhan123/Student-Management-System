import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    stuID: {
        type: String,
        required: [true, "Student ID is required"],
        unique:[true,"Student ID should be unique"],
        trim:true,
        uppercase:true,
        minLength:[6, "Student ID must be at least 6 characters"],
        maxLength:[20, "Student ID must be at most 20 characters"]
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength:[3, "Name must be at least 3 characters"],
        maxLength:[50, "Name must be at most 50 characters"]
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
        type: String,
        required: [true, "Phone number is required"],
        unique:[true, "phone number should be unique"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim:true,
        lowercase:true,
        unique:[true, "Email should be unique"]
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
            type: String,
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
