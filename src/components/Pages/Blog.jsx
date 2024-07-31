import React from "react";
import b1 from "../../assets/Images/Events/b1.png";

const Blog = () => {
  return (
    <div>
      <div className="relative">
        <img src={b1} alt="" />
        <div className="absolute md:inset-20  inset-10 container">
          <div className="flex justify-items-end justify-end ">
            <div className="md:w-[563px] w-[210px] md:h-full sm:flex hidden p-10 bg-white ml-20">
              <p className="text-sm text-tertiary mt-2">
                MARCH 16,2021 : <span className="text-primary">Nattasha</span>
                <h1 className="text-tertiary font-extrabold font-mincho md:text-xl  mt-2">
                  Why Giving Is Important | Five Reasons to Donate
                </h1>
                <p className="text-custom3 font-work mt-2 ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
