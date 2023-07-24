import { useLocation } from "react-router-dom";

const Details = () => {
  // Use the useLocation hook to access the location data
  const location = useLocation();
  const { college } = location.state;



  return (
    <div
      key={college._id}
      className="p-4 border rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md "
    >
      {/* <img
      src={classItem.image}
      alt={classItem.name}
      className="w-full h-80 object-cover mb-2 rounded-lg"
    /> */}
      <p className="font-bold text-white">{college.collegeName}</p>
      <p className="text-white">College Rating: {college.collegeRating}</p>
      <p className="text-white">Admission Date: {college.admissionDate}</p>
      <p className="text-white">Number of Research: {college.researchCount}</p>
      
    </div>
  );
};

export default Details;
