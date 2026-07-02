import { Navbar } from "../components/Navbar"
import { Routes, Route } from "react-router";
import {Dashboard} from "../pages/Dashboard";
import { Student } from "../pages/Student";
import { AddStudent } from "../components/student/AddStudent";
import { SingleStudent } from "../components/student/SingleStudent";
import {EditStudent} from "../components/student/EditStudent";
import {Course} from "../pages/Course";
import { AddCourse } from "../components/course/AddCourse";
import { EditCourse } from "../components/course/EditCourse";
import {Attendence} from "../pages/Attendence";
import { MarkAttendence } from "../components/attendence/markAttendence";


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
                <Route path="/course/add" element={<AddCourse />} />
                <Route path="/course/edit/:id" element={<EditCourse />} />
                <Route path="/attendence" element={<Attendence />} />
                <Route path="/attendence/mark" element={<MarkAttendence />} />
            </Routes>
        </div>
    </>
}