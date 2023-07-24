import React, { useContext } from "react";
import useColleges from "../../hooks/useColleges";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Admission = () => {
  const { colleges } = useColleges();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleApply = (college) => {
    if (user) {
        navigate(`/admissionForm/${college.collegeName}`, { state: { college } });
      } else {
        navigate("/login");
      }
  };

  return (
    <div>
      <h1>This is admission page</h1>

      {colleges.map((college) => (
        <div
          key={college._id}
          className="p-4 border rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md "
        >
          <p className="font-bold text-white">{college.collegeName}</p>
          
            <button
              onClick={() => handleApply(college)}
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded disabled:bg-gray-400"
            >
              Apply
            </button>
        </div>
      ))}
    </div>
  );
};

export default Admission;
