import { Navbar } from "../components/Navbar"
import { Routes, Route } from "react-router";
import { Student } from "../pages/Student";
import {Dashboard} from "../pages/Dashboard";
import {Course} from "../pages/Course";
import {Attendence} from "../pages/Attendence";
import { AddStudent } from "../components/student/addStudent";
import {EditStudent} from "../components/student/EditStudent";
import { SingleStudent } from "../components/student/SingleStudent";


export function MainLayout() {

    return <>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/student" element={<Student />} />
                <Route path="/student/add" element={<AddStudent />} />
                <Route path="/student/:id" element={<SingleStudent />} />
                <Route path="/student/edit/:id" element={<EditStudent />} />
                <Route path="/course" element={<Course />} />
                <Route path="/attendence" element={<Attendence />} />
            </Routes>
        </div>
    </>
}