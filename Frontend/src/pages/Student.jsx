import { useEffect, useState } from "react";
import axios from 'axios'


export function Student() {
    const [student, setStudent] = useState([]);

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
                <button className="p-2 bg-blue-600 text-white rounded-sm">+ Add Student</button>
            </div>
            <div className="py-2 px-4 flex justify-between ">
                <input type="search" placeholder="Search students..." className="p-2 border-2 border-gray-300 rounded-lg " />
                <select name="course" id="course" className="border-2 border-gray-300 rounded-lg ">
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

            <div>
                <table className="border border-gray-200">
                    <tr className="p-2">
                        <th className="p-2">Id</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Course</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Phone</th>
                    </tr>
                    {
                        student.map((item) => (
                                <tr key={item._id}>
                                    <td className="p-2 text-sm font-extralight text-shadow-black">{item.stuID}</td>
                                    <td className="p-2 text-sm font-extralight text-shadow-black">{item.name}</td>
                                    <td className="p-2 text-sm font-extralight text-shadow-black">{item.course}</td>
                                    <td className="p-2 text-sm font-extralight text-shadow-black">{item.email}</td>
                                    <td className="p-2 text-sm font-extralight text-shadow-black">{item.phone}</td>
                                </tr>
                        ))
                    }
                </table>
            </div>

        </div >
    </>
}