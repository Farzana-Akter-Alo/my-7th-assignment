import React from "react";
import ProgressImg from "../../assets/vector1.png";

const Banner = ({ count }) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-8 lg:mt-14 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 sm:gap-5 px-4">
        {/* left side */}
        <div className="text-white flex-1 min-h-[180px] sm:min-h-[250px] py-6 relative overflow-hidden rounded-2xl flex flex-col items-center justify-center text-center ">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={ProgressImg}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#9f62f2] to-[#632ee3]"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h3 className="text-md md:text-lg">In-Progress</h3>
            <p className="text-2xl md:text-4xl font-semibold">
              {count.inProgress}
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="text-white flex-1 min-h-[180px] sm:min-h-[250px] py-6 rounded-2xl flex flex-col items-center justify-center text-center bg-gradient-to-l from-[#00827A] to-[#54CF68]">
          <h3 className="text-md md:text-lg">Resolved</h3>
          <p className="text-2xl md:text-4xl font-semibold">{count.resolved}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
