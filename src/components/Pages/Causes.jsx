// eslint-disable-next-line no-unused-vars
import React from "react";
import c1 from "../../assets/Images/Causes/c1.png";
import c2 from "../../assets/Images/Causes/c2.png";
import c3 from "../../assets/Images/Causes/c3.png";
import c4 from "../../assets/Images/Causes/c4.png";

import { MdArrowRight } from "react-icons/md";

const Causes = () => {
  return (
    <div>
      <div className="relative">
        <img src={c1} alt="" />
        <div className="absolute inset-0 flex container">
          <div className="flex flex-col md:mt-40 mt-8">
            <p className="text-white md:text-5xl text-lg  font-sue mt-2">
              Donation
            </p>
            <h1 className="text-white font-mincho font-extrabold md:text-6xl mt-2">
              First charity activity of this <br />
              summer today
            </h1>
          </div>
        </div>
      </div>
      <div className="container mt-10 md:mt-20">
        <img src={c2} alt="" />
        <div className="mt-10">
          <h1 className="text-2xl font-mincho text-tertiary border-b-2 border-[#BEBEBE] py-4">
            Donation : $5,000/$12,000
          </h1>
          <h1 className="text-2xl font-mincho text-tertiary  mt-4">Our Goal</h1>
          <p className="text-custom3 font-work mt-2">
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
          <p className="text-custom3 font-work mt-4">
            For dynamic content, add a rich text field to any collection and
            then connect a rich text element to that field in the settings
            panel. Headings, paragraphs, block-quotes, figures, images, and
            figure captions can all be styled.
          </p>
          <h1 className="text-2xl font-mincho text-tertiary mt-4 ">
            We love design beautiful things.
          </h1>
          <p className="text-custom3 font-work mt-2">
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
          <h1 className="text-2xl font-mincho text-tertiary mt-4 ">
            Details about the cause
          </h1>
          <p className="text-custom3 font-work mt-2">
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
          <p className="text-custom3 font-work mt-2">
            Headings, paragraphs, blockquotes, figures, images, and figure
            captions can all be styled after A rich text element can be used
            with static or dynamic content. For static content, just drop it
            into any page and begin editing.
          </p>
          <p className="text-custom3 font-work mt-2">
            ‍ The rich text element allows you to create and format headings,
            paragraphs, blockquotes, images, and video all in one place instead
            of having to add and format them individually. Just double-click and
            easily create content.
          </p>
        </div>
        <img src={c3} alt="" className="mt-20" />

        <div>
          <h1 className="text-2xl font-mincho text-tertiary  mt-10">
            Challenge
          </h1>
          <p className="text-custom3 font-work mt-2">
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
          <div className="relative">
            <img src={c4} alt="" className=" mt-4" />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://www.youtube.com/watch?v=mPRXhNFPgwo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white rounded-full md:w-[86px] md:h-[86px] w-[50px] h-[50px] flex items-center justify-center">
                  <MdArrowRight size={30} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20"></div>
    </div>
  );
};

export default Causes;
