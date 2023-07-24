import { useEffect, useState } from "react";

const FeaturedColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/colleges");
        const data = await response.json();

        setColleges(data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchData();
  }, []);
  console.log(colleges);
  return (
    <div>
      <div className="mb-16 mt-28 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Spotlight on Excellence: Featured Colleges Collection
        </h1>
        <p className="  text-justify text-white">
          Step into the limelight of excellence with our curated selection of
          prestigious colleges. Immerse yourself in a world of outstanding
          academics, vibrant campus life, and pioneering research opportunities.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 px-6">
        {colleges.slice(0, 3).map((college) => (
          <div
            key={college._id}
            className="p-2 border rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md"
          >
            <h1>{college.collegeName}</h1>
            {/* <img
              src={college.image}
              alt={classItem.name}
              className="w-full h-80 object-cover mb-2 rounded-lg"
            />
            <p className="font-bold text-xl text-white">{college.collegeName}</p>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2 mt-4 -space-y-2 ">
                <img
                  className="h-9 rounded-md shadow-lg"
                  src={classItem.instructorImg}
                  alt=""
                />
                <div className="flex flex-col -space-y-1 ">
                  <p className="text-white font-bold drop-shadow-lg">
                    {classItem.instructorName}
                  </p>
                  <p className="text-xs text-slate-200 ">#Instructor</p>
                </div>
              </div>
              <p className="text-white text-xs ">
                {" "}
                <br /> {classItem.enrollCount} <br /> Students
              </p>
            </div>
            <div className="border-b border-gray-400 mt-6 mb-4 mx-1"></div>

            <button className=" glass w-full text-white font-semibold py-3 rounded-md hover:shadow-lg ">
              View Class
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedColleges;
