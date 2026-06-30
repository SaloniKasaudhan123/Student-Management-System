import axios from 'axios';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const url = import.meta.env.VITE_URL;
import { FiMail, FiPhone, FiGift } from 'react-icons/fi';
import { RiMapPin2Line, RiShoppingBag4Line } from 'react-icons/ri';
import { FaCalendarAlt } from 'react-icons/fa';

export function SingleStudent() {
  const navi = useNavigate();
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  async function getStudent() {
    const res = await axios.get(`${url}/student/${id}`);
    const stud = res.data.data;
    setStudent(stud);
  }

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <>
      <div className="m-5 sm:m-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Student Detail</h1>
          <span className="flex m-1 mb-5">
            <p
              onClick={() => navi('/student')}
              className="text-xs sm:text-sm text-gray-500 cursor-pointer"
            >
              Student &nbsp;    
            </p>
            <p className="text-xs sm:text-sm text-gray-500">&gt; Student Detail</p>
          </span>
        </div>

        {!student ? (
          <div className="bg-blue-50/70 border border-blue-200 text-blue-900 rounded-lg p-6 text-sm">
            Loading student...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-blue-100/50 p-4 sm:p-6 lg:p-10">
            <div className="p-4 sm:p-5 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  src="/profile_image.jpg"
                  alt="Profile_Image"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover"
                />
                <div className="min-w-100">
                  <h1 className="text-lg sm:text-xl font-semibold truncate">{student?.name}</h1>
                  <h2 className="text-sm text-gray-700">{student?.stuID}</h2>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <h4 className="flex items-center gap-2">
                  <FiMail className="text-blue-700" /> {student?.email}
                </h4>
                <h4 className="flex items-center gap-2">
                  <FiPhone className="text-blue-700" /> {student?.phone}
                </h4>
                <h4 className="flex items-center gap-2">
                  <FiGift className="text-blue-700" /> {student?.dateOfBirth}
                </h4>
                <h4 className="flex items-start gap-2">
                  <RiMapPin2Line className="text-blue-700 mt-0.5" />
                  <span className="wrap-break-word">
                    {student?.address?.city}, {student?.address?.state} ({student?.address?.pincode})
                  </span>
                </h4>
                <h4 className="flex items-center gap-2">
                  <RiShoppingBag4Line className="text-blue-700" /> {student?.course?.courseName}
                </h4>
                <h4 className="flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-700" /> {student?.admissionDate}
                </h4>
              </div>
            </div>

            <div className="bg-blue-200/30 py-5 px-4 sm:py-6 sm:px-6 rounded-lg">
            <div className='underline text-xl text-blue-900/80 mb-5'>Profile</div>
              <h1 className="text-xl sm:text-2xl font-semibold">Academic Information</h1>
              <hr className="text-blue-300 mt-3" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-700">Course</h3>
                  <h4 className="text-sm">{student?.course?.courseName}</h4>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-700">Admission Date</h3>
                  <h4 className="text-sm">{student?.admissionDate}</h4>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-700">Student Id</h3>
                  <h4 className="text-sm">{student?.stuID}</h4>
                </div>
              </div>

              <div className="mt-6">
                <h1 className="text-xl sm:text-2xl font-semibold">Personal Information</h1>
                <hr className="text-blue-300 mt-3" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-700">Gender</h3>
                    <h4 className="text-sm">{student?.gender}</h4>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-700">Date of Birth</h3>
                    <h4 className="text-sm">{student?.dateOfBirth}</h4>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-700">Address</h3>
                    <h4 className="text-sm wrap-break-word">
                      {student?.address?.city}, {student?.address?.state} ({student?.address?.pincode})
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

