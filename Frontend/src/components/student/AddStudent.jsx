import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
const url = import.meta.env.VITE_URL;
import {toast} from 'react-toastify'



export function AddStudent() {
    const navi = useNavigate();
    const [allCourses , setAllCourses] = useState([]);
    const [stuID , setStuId] = useState("");
    const [name , setName] = useState("");
    const [age , setAge] = useState(0);
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [gender , setGender] = useState("");
    const [dateOfBirth , setDateofbirth] = useState("");
    const [city , setCity] = useState("");
    const [state , setState] = useState("");
    const [pincode , setPincode] = useState("");
    const [course , setCourse] = useState("");
    const [admissionDate , setAdmissiondate] = useState("");

    
    useEffect(()=>{
        async function Course(){
            const res = await axios.get(`${url}/course`)
            const course  = res.data.data;
            setAllCourses(course);
        }
        Course();
    },[])


    async function handleAddStudent(e) {
        e.preventDefault();
        try{
            const res = await axios.post(`${url}/student` , {
                stuID,
                name,
                age,
                email,
                phone,
                gender,
                dateOfBirth,
                address :{city,
                state,
                pincode},
                course,
                admissionDate
            });
            toast.success(res.data.message);
            navi("/student")
        }catch(err){
            toast.error(err.message);
            throw err
        }
    }

    return <>
        <div className="m-5 sm:m-8">
            <div>
                <h1 className="text-xl font-bold" >Add Student</h1>
                <span className="flex m-1 mb-5">
                    <p onClick={() => navi("/student")} className="text-xs sm:text-xs text-gray-500">Student &nbsp; &gt;</p>
                    <p className="text-xs sm:text-xs text-gray-500">&nbsp; Add Student</p>
                </span>
            </div>
            <form method="get" className="rounded-lg mt-3 pl-15 pt-5 bg-gray-200/40 flex flex-col gap-5" onSubmit={(e) => handleAddStudent(e)}>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="stuId" className="text-sm font-medium mt-2">Student ID : </label>
                    <input type="text" placeholder="Enter Student Id" name="stuId" id="stuId"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setStuId(e.target.value)}/>
                </span>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="name" className="text-sm font-medium">Full Name : </label>
                    <input type="text" placeholder="Enter Full Name" name="name" id="name"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setName(e.target.value)}/>
                </span>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="age" className="text-sm font-medium">Age : </label>
                    <input type="text" placeholder="Enter Age" name="age" id="age"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setAge(e.target.value)}/>
                </span>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="email" className="text-sm font-medium">Email : </label>
                    <input type="email" placeholder="Enter Email" name="email" id="email"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setEmail(e.target.value)}/>
                </span>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="phone" className="text-sm font-medium">Phone No : </label>
                    <input type="text" placeholder="Enter Phone No" name="phone" id="phone"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setPhone(e.target.value)}/>
                </span>
                <span className="mb-2 flex gap-5">
                    <label htmlFor="gender" className="text-sm font-medium">Gender : </label>
                    <label htmlFor="female" className="text-sm font-medium">Female </label>
                    <input type="radio" name="gender" id="female" onChange={(e)=>setGender("Female")}/>
                    <label htmlFor="male" className="text-sm font-medium">Male</label>
                    <input type="radio" name="gender" id="male" onChange={(e)=>setGender("Male")}/>
                    <label htmlFor="other" className="text-sm font-medium">Other</label>
                    <input type="radio" name="gender" id="other" onChange={(e)=>setGender("Other")}/>
                </span>
                <span className="flex gap-5">
                    <label htmlFor="dateofbirth" className="text-sm font-medium">Date of Birth : </label>
                    <input type="date" name="dateofbirth" id="dateofbirth" onChange={(e)=>setDateofbirth(e.target.value)}/>
                </span>
                <span>
                    <label htmlFor="address" className="font-medium">Address </label>
                    <span className="mb-2 flex gap-5">
                        <label htmlFor="city" className="text-sm font-medium">City : </label>
                        <input type="text" placeholder="Enter City" name="city" id="city"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setCity(e.target.value)}/>
                    </span>
                    <span className="mb-2 flex gap-5">
                        <label htmlFor="state" className="text-sm font-medium">State : </label>
                        <input type="text" placeholder="Enter State" name="state" id="state"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setState(e.target.value)}/>
                    </span>
                    <span className="mb-2 flex gap-5">
                        <label htmlFor="pincode" className="text-sm font-medium">Pincode : </label>
                        <input type="text" placeholder="Enter Pincode" name="pincode" id="pincode"  className="p-2 border border-gray-400 rounded-lg" onChange={(e)=>setPincode(e.target.value)}/>
                    </span>
                </span>

                <span className="mb-2 flex gap-5">
                    <label htmlFor="course" className="font-medium mt-2">Course : </label>
                    <select name="course" id="course" className="border-2 border-gray-300 rounded-lg p-1.5" onChange={(e)=>setCourse(e.target.value)}>
                        <option value="" className="mr-1">Select Course &nbsp; &nbsp;</option>
                    { 
                        allCourses.map((item)=>(
                        <option value={item._id} key={item._id}>{item.courseName}</option>
                       
                    ))
                }
                </select>                    
                    </span>
                    <span className="flex gap-5">
                    <label htmlFor="admissiondate" className="text-sm font-medium">Admission Date : </label>
                    <input type="date" name="admissiondate" id="admissiondate" onChange={(e)=>setAdmissiondate(e.target.value)}/>
                </span>
                <span className="flex gap-5 justify-end">
                <button className="p-2 border border-gray-400 rounded-lg" onClick={()=>navi("/student")}>Cancel</button>
                <button className="p-2 bg-blue-600 rounded-lg text-white">Save Student</button>
                </span>

            </form>
        </div>
    </>
}