import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="md:flex  items-center  mx-auto ">
      <div className="md:w-2/5 text-white ">
        <div className=" px-5">
          <h1 className="text-5xl font-bold mb-5">
          Embrace Your Academic Odyssey with EduJive
          </h1>
          <p className="text-justify">
          Set sail on an exhilarating academic journey with EduJive. Unearth endless possibilities, connect with your dreams, and chart a course to a brighter future.
          </p>
          <div className="flex gap-5">
            <button className=" border  hover:backdrop-blur-2xl px-5 py-4 rounded-2xl mt-10 ">
              View Our Colleges
            </button>
            <Link to="/signup">
              <button className=" hover:border bg-white  bg-opacity-10  backdrop-blur-md px-5 py-4 rounded-2xl mt-10">
                SignUp Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-10 w-1/2 mt-6">
      </div>
    </div>
  );
};

export default Banner;
