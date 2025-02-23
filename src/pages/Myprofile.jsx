import React, { useState } from "react";
import { assets } from "../assets/assets";

const Myprofile = () => {
  const [userData, setuserData] = useState({
    name: "Kanjariya Harshit",
    image: assets.profile_pic,
    email: "kanjariyaharshit@gmail.com",
    phone: "+91 8200977916",
    address: {
      line1: "A-8,104 Saurastra Green City ",
      line2: " umra , surat-394130",
    },
    gender: "male",
    dob: "04-08-2005",
  });

  const [isEdit, setisEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded " src={userData.image} alt="" />

      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setuserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr,3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium ">Email id:</p>
          <p className="text-blue-500 ">{userData.email}</p>
          <p className="font-medium ">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400 ">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50"
                onChange={(e) =>
                  setuserData((prev) => ({
                    ...prev.address,
                    line1: e.target.value,
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-50"
                onChange={(e) =>
                  setuserData((prev) => ({
                    ...prev.address,
                    line2: e.target.value,
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500 ">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFROMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700 mt-3 ">
          <p className="font-medium ">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100 rounded-md"
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10 ">
        {isEdit ? (
          <button
            className="border borderb-2 bg-blue-500 text-white px-8 py-2 rounded-full"
            onClick={() => setisEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-b-2 bg-blue-500 text-white px-8 py-2 rounded-full"
            onClick={() => setisEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Myprofile;
