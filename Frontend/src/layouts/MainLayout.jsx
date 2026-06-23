import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Routes, Route } from "react-router";

export function MainLayout() {

    return <>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/student" element={<h1>Student</h1>} />
                <Route path="/course" element={<h1>Course</h1>} />
                <Route path="/attendence" element={<h1>Attendence</h1>} />
            </Routes>
            <Footer />
        </div>
    </>
}