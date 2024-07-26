//images
import ebg1 from "../../assets/Images/Education/ebg1.png";
import ed2 from "../../assets/Images/Education/ed2.png";

const community = () => {
  return (
    <div>
      <div className="relative h-[500px]">
        <img src={ebg1} alt=" " className="md:h-auto  h-full" />

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
                  dummy text ever when an unknown printer took a galley of type
                  <br />
                  and scrambled it to make a type specimen book.
                </p>
                <img src={ed2} alt="" className="mt-4" />
                <a href="" target="_blank" rel="noopener noreferrer">
                  <button className=" w-[115px] h-[45px] text-white bg-primary md:text-md text-sm rounded-sm  hover:bg-gray-500 hover:text-white md:mt-8 mt-8 ">
                    DONATE NOW
                  </button>
                </a>
              </div>
              {/* becom */}
              <div className="md:w-[569px] md:h-[549px] w-[200px] h-full border-2 md:mt-0 mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default community;
