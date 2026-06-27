    import axios from 'axios';
    import { useNavigate } from 'react-router';
    import { useEffect, useState } from 'react';
    import { useParams } from "react-router"
    const url = import.meta.env.VITE_URL;
    import { FiMail , FiPhone , FiGift } from 'react-icons/fi';
    import { RiMapPin2Line , RiShoppingBag4Line } from 'react-icons/ri';
    import { FaCalendarAlt } from 'react-icons/fa';

    export function SingleStudent(){
        const navi = useNavigate();
        const [student , setStudent] = useState(null);
        const {id} = useParams();

        async function getStudent(){
            const res = await axios.get(`${url}/student/${id}`);
            const stud = res.data.data;
            console.log("stu : ",stud);
            setStudent(stud);
        }
        useEffect(()=>{
            getStudent();
        },[])


        return<>
        <div className="m-5 sm:m-8">
                <div>
                    <h1 className="text-xl font-bold">Student Detail</h1>
                <span className="flex m-1 mb-5">
                        <p onClick={() => navi("/student")} className="text-xs sm:text-xs text-gray-500">Student &nbsp; &gt;</p>
                        <p className="text-xs sm:text-xs text-gray-500">&nbsp; Student Detail</p>
                    </span>
            </div>
            <div className='flex bg-blue-100/50 p-10'>
                <div className='bg-blue-200/30 p-5 rounded-lg'>
                    <span>
                        <img src="\profile_image.jpg" alt="Profile_Image" className='h-70 w-80 rounded-lg'/>
                    </span>
                    <span>
                        <h1>{student?.name}</h1>
                        <h2>{student?.stuID}</h2>
                        <h4><FiMail /> {student?.email}</h4>
                        <h4><FiPhone /> {student?.phone}</h4>
                        <h4><FiGift /> {student?.dateOfBirth}</h4>
                        <h4><RiMapPin2Line /> {student?.address.city} , {student?.address.state} ({student?.address.pincode})</h4>
                        <h4><RiShoppingBag4Line /> {student?.course.courseName}</h4>
                        <h4><FaCalendarAlt /> {student?.admissionDate}</h4>
                    </span>
                </div>
                <div className='bg-blue-200/30 py-5 pl-15 rounded-lg'>
                        <h1 className='text-2xl'>Academic Information</h1>
                <hr className='text-blue-300' />
                    <div className='flex gap-10'>
                        <span className="text-sm">
                        <h3>Course</h3>                        
                        <h3>Admission Date</h3>                        
                        <h3>Student Id</h3>                        
                        </span>
                        <span className="text-xs font-sans">
                        <h4>{student?.course.courseName}</h4>
                        <h4>{student?.admissionDate}</h4>
                        <h4>{student?.stuID}</h4>
                        </span>
                    </div>
                    <div>
                        <h1 className='text-2xl'>Personal Information</h1>
                <hr className='text-blue-300' />
                        <div className='flex gap-10'>
                        <span className="text-sm">
                        <h3>Gender</h3>                        
                        <h3>Date of Birth</h3>                        
                        <h3>Address</h3>                        
                        </span>
                        <span className="text-xs font-sans">
                        <h4>{student?.gender}</h4>
                        <h4>{student?.dateOfBirth}</h4>
                        <h4>{student?.address.city}, {student?.address.state} ({student?.address.pincode})</h4>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }