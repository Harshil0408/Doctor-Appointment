import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
          <p>
            Welcome yo Our website. Your Trusted Partner in Manging Your
            HealthCore Needs Conviently And Efficiently. At Prescripto, We
            understand The Challanges individual faces it comes to scheduling
            the Doctor Appointments and Manging their Health Recorld
          </p>
          <p>
            Prescripto is Commited To Excellence In HealthCare Technology. We
            continuoulsy strive To Enhance Our Platfomr. Integrating The Latest
            Advancements To User Experience And Deliver Superior Survice.
            Whether You're Booking your First Appointment Or Managing Ongoing
            Care, Presripto is Here To Support You Every Step of The Way.{" "}
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our Vision At Prescripto Is To Create A Seamless Healthcare
            Experience For Every user. We Aim to Bridge The Gap Between The
            Patiets And Healthcare Providers, Making It Easier For You To Access
            The Care You Need. When Your Nedd It.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE</span> US
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convinience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reaminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
