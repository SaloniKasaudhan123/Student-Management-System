import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router"
import { toast } from "react-toastify";
const url = import.meta.env.VITE_URL;


export function EditCourse() {
    const { id } = useParams();
    const navi = useNavigate();
    const [courseId, setCourseId] = useState("");
    const [courseName, setCourseName] = useState("");
    const [duration , setDuration] = useState(0);
    const [fee , setFee] = useState(0);
    const [description , setDescription] = useState("");


    const handleEditCourse = async (e) =>{
        try{
            e.preventDefault();
            const res = await axios.put(`${url}/course/${id}`, {
                courseId,
                courseName,
                duration,
                fee,
                description
            });
            toast.success(res.data.message);
            navi("/course");
        }catch(err){
            toast.error(err.message);
            throw err;
        }
    }


    return <>
        <div>
            <div className="m-5 sm:m-8">
                <h1 className="text-xl font-bold" >Edit Course</h1>
                <span className="flex m-1 mb-5">
                    <p onClick={() => navi("/course")} className="text-xs sm:text-xs text-gray-500">Course &nbsp; &gt;</p>
                    <p className="text-xs sm:text-xs text-gray-500">&nbsp; Edit Course</p>
                </span>
            </div>
            <form method="get" className="rounded-lg mt-3 mx-15 pl-15 pt-5 bg-gray-200/40 flex flex-col gap-5" onSubmit={(e) => handleEditCourse(e)}>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="courseId" className="text-sm font-medium mt-2">Course ID : </label>
                    <input type="text" placeholder="Enter Course Id" name="courseId" id="courseId" className="p-2 border border-gray-400 rounded-lg" onChange={(e) => setCourseId(e.target.value)} />
                </span>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="course" className="text-sm font-medium">Course Name : </label>
                    <input type="text" placeholder="Enter Course Name" name="course" id="course"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setCourseName(e.target.value)}/>
                </span>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="duration" className="text-sm font-medium">Duration : </label>
                    <input type="text" placeholder="Enter Duration" name="duration" id="duration"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setDuration(e.target.value)}/>
                </span>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="fees" className="text-sm font-medium">Fees : </label>
                    <input type="text" placeholder="Enter Fees" name="fees" id="fees"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setFee(e.target.value)}/>
                </span>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="description" className="text-sm font-medium">Description : </label>
                    <input type="text" placeholder="Enter Description" name="description" id="description"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setDescription(e.target.value)}/>
                </span>

                <span className="flex gap-5 justify-end">
                <button className="p-2 border border-gray-400 rounded-lg" onClick={()=>navi("/course")}>Cancel</button>
                <button className="p-2 bg-blue-600 rounded-lg text-white">Save Changes</button>
                </span>
            </form>
        </div>
    </>
}