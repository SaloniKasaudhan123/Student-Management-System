import { useEffect, useState } from "react";
import axios from 'axios';
import { FiSearch } from "react-icons/fi";
import { FaRegEye , FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import {useNavigate} from 'react-router'




export function AllStudent() {
    const [student, setStudent] = useState([]);
    const navi = useNavigate();

    useEffect(() => {
        async function fetchStudent() {
            const res = await axios.get("http://localhost:3000/api/student/");
            const students = res.data.data;
            console.log(students)
            setStudent(students)
        }
        fetchStudent();
    }, [])


    return <>
        <div>
            <div className="py-2 px-4 flex justify-between shadow-2xl shadow-gray-300">
                <h1 className="text-xl sm:text-2xl font-bold">Student</h1>
                <button className="p-2 bg-blue-600 text-white rounded-sm" onClick={()=>navi("/student/add")}>+ Add Student</button>
            </div>
            <div className="py-5 px-2 sm:px-10 md:px-15 lg:px-20 flex justify-between ">
               <span className="flex">
               <FiSearch className="font-light size-12 pt-1 border-2 border-gray-300 p-2 border-r-0 rounded-l-lg"/>
                <input type="search" placeholder="Search students..." className="w-[50vw] p-2 border-2 border-gray-300 rounded-r-lg border-l-0" />
               </span> 
                <select name="course" id="course" className="border-2 border-gray-300 ">
                    <option value="" className="mr-1">Filter By Course &nbsp;</option>
                    <option value="bca">BCA</option>
                    <option value="mca">MCA</option>
                    <option value="bba">BBA</option>
                    <option value="mba">MBA</option>
                    <option value="bcom">Bcom</option>
                    <option value="btech">Btech</option>
                    <option value="bpharm">Bpharm</option>
                </select>
            </div>

            <div className="ml-8 flex justify-center">
                <table className="border border-gray-200 ">
                    <thead className="p-2">
                        <tr>
                        <th className="py-4 px-10 sm:text-xl">Sr.No.</th>
                        <th className="py-4 px-10 sm:text-xl">Id</th>
                        <th className="py-4 px-10 sm:text-xl">Name</th>
                        <th className="py-4 px-10 sm:text-xl">Course</th>
                        <th className="py-4 px-10 sm:text-xl">Email</th>
                        <th className="py-4 px-10 sm:text-xl">Phone</th>
                        <th className="py-4 px-10 sm:text-xl">Active</th>
                        </tr>
                    </thead>
                    {
                        student.map((item , index) => (
                            <tbody key={item._id}>
                                <tr>
                                <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{index+1}.</td>
                                <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{item.stuID}</td>
                                <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{item.name}</td>
                                <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{item.course.courseName}</td>
                                <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{item.email}</td>
                                <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black">{item.phone}</td>
                                <td className="py-3 px-2 sm:px-10 text-sm font-medium text-shadow-black flex gap-2 sm:gap-5 md:gap-7">
                                    <FaRegEye className="size-5 sm:size-6 text-blue-600 bg-gray-200 p-1 rounded-lg" onClick={()=>navi("/student/id")}/>
                                    <FaPencilAlt className="size-5 sm:size-6 bg-gray-200 p-1 rounded-lg" onClick={()=>navi("/student/edit/id")}/>
                                    <RiDeleteBin6Line className="size-5 sm:size-6 text-red-600 bg-gray-200 p-1 rounded-lg"/>
                                </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>

        </div >
    </>
}