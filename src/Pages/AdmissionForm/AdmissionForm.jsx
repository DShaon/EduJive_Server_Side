import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation } from "react-router-dom";

const AdmissionForm = () => {
  const location = useLocation();
  const { college } = location.state;
  const { user } = useContext(AuthContext);
  console.log(user);
  const { register, handleSubmit, reset } = useForm();
  const [mongoDBSuccess, setMongoDBSuccess] = useState(false);

  const onSubmit = (data) => {
    if (user) {
      const formData = { ...data, college };

      console.log(formData, 'college name', formData.college.collegeName);

      fetch("http://localhost:5000/selectedCollege", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.status === 200) {
            setMongoDBSuccess(true);
            reset();
          } else if (res.status === 400) {
            throw new Error("Failed to save data");
          } else {
            throw new Error("Failed to save data");
          }
        })
        .catch((error) => {
          console.error("Error saving data:", error);
          setMongoDBSuccess(false);
        });
    } else {
      alert("Please login to submit the form");
    }
  };

  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Candidate Name*</span>
          </label>
          <input
            type="text"
            placeholder="Candidate Name"
            {...register("CandidateName", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Phone Number*</span>
            </label>
            <input
              type="tel"
              {...register("CandidatePhone", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Subject*</span>
            </label>
            <input
              type="text"
              {...register("CandidateSubject", { required: true })}
              placeholder="Subject"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Candidate Email*</span>
            </label>
            <input
              defaultValue={user?.email}
              readOnly
              type="email"
              {...register("CandidateEmail", { required: true })}
              placeholder="Candidate Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Address*</span>
            </label>
            <input
              type="text"
              {...register("availableSeats", { required: true })}
              placeholder="Address"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Date of Birth*</span>
            </label>
            <input
              type="date"
              {...register("availableSeats", { required: true })}
              placeholder="Date of Birth"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Your Photo*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>
        {mongoDBSuccess && (
          <div className="text-green-500 mt-4">
            College added successfully to MongoDB.
          </div>
        )}
        <input className="btn btn-sm mt-4" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AdmissionForm;
