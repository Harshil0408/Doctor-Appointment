import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 text-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm ">
        <img
          className="w-full max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">
            A-8,104 SAURASTRA GREEN CITY <br /> UMRA,SURAT-394130
          </p>
          <p  className="text-gray-500">
            +91 8200977916 <br /> Email : kanjariyaharshit@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">Carrers At PRESCIPTO</p>
          <p className="text-gray-500">Learn more about our team and job Oppertunities.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
