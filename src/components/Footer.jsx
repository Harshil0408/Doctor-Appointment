import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
            <img className="mb-5 w-40 " src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fugit laborum, eveniet veritatis nobis, accusamus sapiente voluptatum placeat optio ipsam repellendus magni magnam saepe laboriosam? Aspernatur deserunt fugit incidunt similique?</p>
        </div>

        <div>
            <p className="text-xl font-medium mb-5 ">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-700">
                <li>Home</li>
                <li>About us</li>
                <li>Comtact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5 ">Get in Touch</p>
            <ul className="flex flex-col gap-2 text-gray-700">
                <li>+91 8200977916</li>
                <li>kanjariyaharshit@gmail.com</li>
            </ul>
        </div>
      </div>



      <div>
        <hr />
        <p className="py-5 text-sm text-center ">Copyright 2024@ harshit - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
