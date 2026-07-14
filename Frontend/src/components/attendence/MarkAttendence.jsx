import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const url = import.meta.env.VITE_URL;


export function MarkAttendence() {
    const [date, setDate] = useState();
    const [getAllStudent, setGetAllStudent] = useState([]);
    const [markAttendence, setMarkAttendence] = useState([]);
    const navi = useNavigate();

    const SaveAttendence = async () => {
        try{
            const res = await axios.post(`${url}/attendence` , {
                date , 
                markAttendence
            });
            console.log(res.data);
        }catch(err){
            throw err;
        }
    }

    async function fetchStudent() {
        const res = await axios.get(`${url}/student`);
        const students = res.data.data;
        console.log(students);
        setGetAllStudent(students);
    }
    useEffect(() => {
        fetchStudent();
    }, []);

    
    const handleAttendence = async (value, student) => {
        setMarkAttendence(prev => [...prev,{student : student , status : value}]);

    }
    
    useEffect(() => {
        console.log(markAttendence);
    }, [markAttendence])

    return <>
        <div >
            <div className="py-2 px-4 flex justify-between shadow-2xl shadow-gray-300">
                <h1 className="text-xl sm:text-2xl font-bold">Mark Attendence </h1>
            </div>
            <div className="p-2 flex flex-col ml-10 w-50">
                <label htmlFor="date" className="text-sm text-gray-500 mt-2">Select Date</label>
                <input type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)} className="p-2" />
            </div>
            <div className="m-12 mt-5 flex flex-col justify-center">
                <table className="border border-gray-200 border-separate">
                    <thead className="border-spacing:0 20px">
                        <tr>
                            <th className="py-4 px-10 sm:text-xl">Date</th>
                            <th className="py-4 px-10 sm:text-xl">Roll Number</th>
                            <th className="py-4 px-10 sm:text-xl">Name</th>
                            <th className="py-4 px-10 sm:text-xl">Status</th>
                        </tr>
                    </thead>
                    <tbody className="border-spacing:0 20px">
                    {getAllStudent.map((s) => (
                            <tr key={s._id}>
                                <td className="py-3 px-2 mb-5 sm:px-10 text-sm font-medium">{date}</td>
                                <td className="py-3 px-2 mb-5 sm:px-10 text-sm font-medium">{s.name}</td>
                                <td className="py-3 px-2 mb-5 sm:px-10 text-sm font-medium">{s.stuID}</td>
                                <td className="py-3 px-2 mb-5 sm:px-10 text-sm font-medium">
                                    <select className={`py-3 px-2 mb-5 sm:px-10 text-sm font-medium`} onChange={(e) => handleAttendence(e.target.value, s._id)}>
                                        <option value="">Mark Attendence</option>
                                        <option value="Present" className="bg-green-200 rounded-lg">Present</option>
                                        <option value="Absent" className="bg-red-200 rounded-lg">Absent</option>
                                        <option value="Leave" className="bg-yellow-200 rounded-lg">Leave</option>
                                    </select>
                                </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
                <div className="flex justify-end mt-10">
                    <button className="p-1 bg-blue-600 text-white rounded-sm" onClick={SaveAttendence}>Save Attendence</button>
                </div>
            </div>
        </div>
    </>
}