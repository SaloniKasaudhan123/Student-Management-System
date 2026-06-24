import { Navbar } from "../components/Navbar"
import { Routes, Route } from "react-router";
import { Student } from "../pages/Student";
import {Dashboard} from "../pages/Dashboard";
import {Course} from "../pages/Course";
import {Attendence} from "../pages/Attendence";


export function MainLayout() {

    return <>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/student" element={<Student />} />
                <Route path="/course" element={<Course />} />
                <Route path="/attendence" element={<Attendence />} />
            </Routes>
        </div>
    </>
}