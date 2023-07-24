import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [selectedColleges, setSelectedColleges] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/myCollege?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setSelectedColleges(data))
        .catch((error) => {
          console.error("Error fetching selected colleges data:", error);
          setSelectedColleges([]); // Set selectedColleges to an empty array to avoid errors
        });
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to view your selected colleges data.</div>;
  }

  if (selectedColleges.length === 0) {
    return <div>No selected colleges data found.</div>;
  }

  if (!Array.isArray(selectedColleges)) {
    return <div>No selected colleges data found.</div>;
  }

  return (
    <div>
      <h2>My Colleges</h2>
      {selectedColleges.map((selectedCollege) => (
        <div key={selectedCollege._id}>
          <p>College Name: {selectedCollege.college.collegeName}</p>
          {/* Add more fields to display the selected college data */}
        </div>
      ))}
    </div>
  );
};

export default MyCollege;
