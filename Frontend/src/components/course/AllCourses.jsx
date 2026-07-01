import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";


const url = import.meta.env.VITE_URL;


export function AllCourses() {
    const navi = useNavigate();
    const [courses , setCourses] = useState([]);

    const getCourses = async () =>{
        const res = await axios.get(`${url}/course`);
        const courses = res.data.data;
        console.log(courses);
        setCourses(courses);
    }

    useEffect(()=>{
        getCourses();
    },[])

    const handledelete = async (id) => {
        try{
            const res = await axios.delete(`${url}/course/${id}`);
            toast.success(res.data.message);
            getCourses();
        }catch(err){
            toast.error(err.message);
            throw err;
        }
    }

    return <>
        <div>
            <div className="py-2 px-4 flex justify-between shadow-2xl shadow-gray-300">
                <h1 className="text-xl sm:text-2xl font-bold">Courses</h1>
                <button className="p-2 bg-blue-600 text-white rounded-sm" onClick={() => navi(`/course/add`)}>+ Add Courses</button>
            </div>
            <div className="ml-8 flex justify-center">
                <table className="border border-gray-200 ">
                            <thead className="p-2">
                                <tr>
                                    <td className="py-4 px-10 sm:text-xl">Sr.No.</td>
                                    <td className="py-4 px-10 sm:text-xl">Course</td>
                                    <td className="py-4 px-10 sm:text-xl">Duration</td>
                                    <td className="py-4 px-10 sm:text-xl">Fees</td>
                                    <td className="py-4 px-10 sm:text-xl">Description</td>
                                    <td className="py-4 px-10 sm:text-xl">Actions</td>
                                </tr>
                            </thead>
                {courses.map((item , index) => (
                            <tbody key={item._id}>
                                <tr>
                                    <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{index + 1}</td>
                                    <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{item.courseName}</td>
                                    <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{item.duration} months</td>
                                    <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">₹{item.fee}</td>
                                    <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{item.description}</td>
                                    <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black flex gap-2 sm:gap-5 md:gap-7">
                                      <FaPencilAlt className="size-7 bg-gray-200 rounded-lg p-1" onClick={()=>navi(`/course/edit/${item._id}`)}/>
                                      <RiDeleteBin6Line className="size-7 bg-gray-200 rounded-lg p-1 text-red-600" onClick={()=>handledelete(item._id)}/>  
                                    </td>
                                </tr>
                            </tbody>
                ))}
                        </table>
            </div>
        </div>
    </>
}