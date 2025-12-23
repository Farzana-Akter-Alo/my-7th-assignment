import React from "react";
import ProgressImg from "../../assets/vector1.png";

const Banner = ({ count }) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-14 flex items-center justify-center gap-5">
        {/* left side */}
        <div className="text-white flex-1 h-[250px] relative overflow-hidden rounded-2xl flex flex-col items-center justify-center text-center ">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={ProgressImg}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#9f62f2] to-[#632ee3]"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h3 className="text-lg">In-Progress</h3>
            <p className="text-4xl font-semibold">{count.inProgress}</p>
          </div>
        </div>
        {/* right side */}
        <div className="text-white flex-1 h-[250px] rounded-2xl flex flex-col items-center justify-center text-center bg-gradient-to-l from-[#00827A] to-[#54CF68]">
          <h3 className="text-lg">Resolved</h3>
          <p className="text-4xl font-semibold">{count.resolved}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
