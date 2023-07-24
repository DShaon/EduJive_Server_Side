import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useColleges from "../../hooks/useColleges";

const Colleges = () => {
  const { user } = useContext(AuthContext);
  const { colleges } = useColleges();
  const navigate = useNavigate();

  console.log("dfghujh", colleges);

  //   TODO add swal instead of alert
  const handleDetails = (college) => {
    if (user) {
      navigate(`/details/${college.collegeName}`, { state: { college } });
    } else {
      navigate("/login");
    }
  };
  console.log(colleges);

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">
       All Colleges
      </h1>
      <div className="grid md:grid-cols-3 gap-4 px-6 ">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="p-4 border rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md "
          >
            <img
              src={college.collegeImage}
              className="w-full h-80 object-cover mb-2 rounded-lg"
            />
            <p className="font-bold text-white">{college.collegeName}</p>
            <p className="text-white">
              College Rating: {college.collegeRating}
            </p>
            <p className="text-white">
              Admission Date: {college.admissionDate}
            </p>
            <p className="text-white">
              Number of Research: {college.researchCount}
            </p>
            <button
              onClick={() => handleDetails(college)}
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded disabled:bg-gray-400"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
