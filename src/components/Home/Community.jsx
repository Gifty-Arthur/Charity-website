import Medicine from "./Medicine";

//images
import ebg1 from "../../assets/Images/Education/ebg1.png";
import ed2 from "../../assets/Images/Education/ed2.png";

import { urls } from "../Helpers/routes";

const community = () => {
  return (
    <div>
      <div>
        <div className="relative ">
          <img src={ebg1} alt=" " className="md:h-auto  h-[910px]" />
          <div className="absolute inset-0 ">
            <div className="container">
              <div className="md:flex md:flex-row gap-10 md:mt-20 mt-4 ">
                <div className="flex flex-col">
                  <p className="font-sue text-white md:text-[35px] ">
                    How we Help
                  </p>
                  <h1 className="font-mincho text-white font-extrabold md:text-4xl text-md mt-2">
                    Join The Community To <br /> Give Education For
                    <br /> Children
                  </h1>
                  <p className="text-white text-sm md:mt-2 mt-1 font-work">
                    Lorem Ipsum is simply dummy text of the printin typesetting
                    <br />
                    dummy text ever when an unknown printer took a galley of
                    type
                    <br />
                    and scrambled it to make a type specimen book.
                  </p>
                  <img src={ed2} alt="" className="mt-4" />
                  <a
                    href={urls.found}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" w-[115px] h-[45px] text-white bg-primary md:text-md text-sm rounded-sm  hover:bg-gray-500 hover:text-white md:mt-8 mt-8 ">
                      DONATE NOW
                    </button>
                  </a>
                </div>
                {/* becom */}
                <div className="md:w-[569px] md:h-[529px]  w-full h-[410px] border-2 md:mt-0 mt-6">
                  <form className="max-w-sm mx-auto px-4 md:mt-16">
                    <h1 className="text-white font-mincho text-2xl mt-4 font-extrabold">
                      Become A Volunteer
                    </h1>
                    <div className="mb-5">
                      <label
                        htmlFor="FullName"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      ></label>
                      <input
                        type="name"
                        id="name"
                        className=" border border-white  text-sm block md:w-[359px] w-full p-2.5 bg-transparent  font-work text-md dark:border-white dark:placeholder-white dark:text-white  "
                        placeholder="Full Name*"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        className=" border border-white  text-sm block md:w-[359px] w-full p-2.5 bg-transparent  font-work text-md dark:border-white dark:placeholder-white dark:text-white  "
                        placeholder="Email Adress*"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="number"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      ></label>
                      <input
                        type="number"
                        id="number"
                        className=" border border-white  text-sm block md:w-[359px] w-full  p-2.5 bg-transparent  font-work text-md dark:border-white dark:placeholder-white dark:text-white  "
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor=""
                        className=" text-sm font-medium text-white dark:text-white"
                      ></label>
                      <input
                        type=""
                        id=""
                        className=" border border-white  text-sm block md:w-[359px] w-full  h-[90px] p-2.5 bg-transparent  font-work text-md dark:border-white dark:placeholder-white dark:text-white  "
                        placeholder="Message"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-tertiary bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-primary rounded-full md:mt-4"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Medicine />
    </div>
  );
};

export default community;
