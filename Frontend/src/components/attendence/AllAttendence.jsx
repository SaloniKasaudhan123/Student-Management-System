import axios from "axios";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router";

const url = import.meta.env.VITE_URL;


export function AllAttendence(){
    const navi = useNavigate();
    const [date , setDate] = useState("") 
    const [attendence , setAttendence] = useState([]);
    

    async function getAttendence(){
        try{
            const res = await axios.get(`${url}/attendence`);
            const attendence = res.data.data;
            console.log("att", attendence);
            console.log("date", date);
            let i = 0;
            while(i < attendence.length){
                if(attendence[i].date == date){
                    console.log("date" , attendence[i].markAttendence[3].status)
                    setAttendence(attendence[i].markAttendence);
                }
                i++;
            }
        }catch(err){
            throw err
        }
    }
    useEffect(()=>{
        getAttendence();
    },[date])

    return<>
    <div>
        <div>
        <div className="py-2 px-4 flex justify-between shadow-2xl shadow-gray-300">
                <h1 className="text-xl sm:text-2xl font-bold">Attendence</h1>
                <button className="p-2 bg-blue-600 text-white rounded-sm" onClick={()=>navi(`/attendence/mark`)}>Mark Attendence</button>
            </div>
            <div className="py-5 px-2 sm:px-10 md:px-15 lg:px-20 flex justify-between">
                <span className="flex flex-col">
                <label htmlFor="date" className="text-sm text-gray-500">Select Date</label>
                <input type="date" name="date" id="date" className="border-2 border-gray-300 p-2" onChange={(e)=>setDate(e.target.value + "T00:00:00.000Z")}/>
                </span>
                <span className="flex flex-col">
                <label htmlFor="course" className="text-sm text-gray-500">Select Course</label>
                <select name="course" id="course" className="border-2 border-gray-300 p-2">
                    <option value="" className="my-1">Filter By Course &nbsp;</option>
                    <option value="bca">BCA</option>
                    <option value="mca">MCA</option>
                    <option value="bba">BBA</option>
                    <option value="mba">MBA</option>
                    <option value="bcom">Bcom</option>
                    <option value="btech">Btech</option>
                    <option value="bpharm">Bpharm</option>
                </select>
                </span>
                <button className="p-1 bg-blue-600 text-white rounded-sm">Show Result</button>
            </div>
            <div className="ml-8 mt-5 flex justify-center">
                <table className="border border-gray-200 border-separate">
                    <thead className="border-spacing:0 20px">
                        <tr>
                            <td className="py-4 px-10 sm:text-xl">ID</td>
                            <td className="py-4 px-10 sm:text-xl">Name</td>
                            <td className="py-4 px-10 sm:text-xl">Course</td>
                            <td className="py-4 px-10 sm:text-xl">Status</td>
                        </tr>
                    </thead>
                        {attendence.map((item) =>(
                    <tbody key={item._id} className="border-spacing:0 20px">
                            <tr >
                                <td className="py-3 px-2 mb-5 sm:px-10 text-sm font-medium">{item.student.stuID}</td>
                                <td className="py-3 px-2 mb-5 sm:px-10 text-sm font-medium">{item.student.name}</td>
                                <td className="py-3 px-2 mb-5 sm:px-10 text-sm font-medium">{item.student.course.courseName}</td>
                                <td className={`p-2 mb-5 text-sm font-medium text-center rounded-lg ${item.status == "Absent" ? "bg-red-600/20" : null} ${item.status == "Present" ? "bg-green-200" : null} ${item.status == "Leave" ? "bg-yellow-200" : null}`}>{item.status}</td>
                            </tr>
                    </tbody>
                        ))}
                </table>
            </div>
        </div>
    </div>
    </>
}