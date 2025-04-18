import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

import { FiChevronDown } from "react-icons/fi";
import backbtn from "../../assets/backbutton.png";
import arrow from "../../assets/arrow.png";
import img1 from "../../assets/img1.png";
import { useNavigate } from "react-router-dom";

const reductionOptions = [0, 10, 20, 30];

const Screen3 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-[#F8FCFF]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Content */}
        <div className="p-6 px-10 pr-20">
          <div className="bg-white p-6  rounded-lg">
            <div className="grid grid-cols-2 gap-2">
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <h2 className="font-semibold text-gray-700">
                    Company Overview
                  </h2>{" "}
                  <div className="mt-1">
                    <img src={arrow} alt="Logo" className="w-16 h-3" />
                  </div>
                  <a href="#" className="text-[#008CD0] font-medium ">
                    Hutton Construction, LLC
                  </a>
                  <p className="text-gray-600 text-sm">example@mrbm.com</p>
                  <p className="text-gray-600 text-sm">+1-555-987-6543</p>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-700">
                    Bid Contact Info
                  </h2>{" "}
                  <div className="mt-1">
                    <img src={arrow} alt="Logo" className="w-16 h-3" />
                  </div>
                  <a href="#" className="text-[#008CD0] font-medium ">
                    Reccia
                  </a>
                  <p className="text-gray-600 text-sm">reccia@mrbm.com</p>
                  <p className="text-gray-600 text-sm">+1-973-857-2501</p>
                </div>
              </div>

              <div className=" pt-4">
                <p className="font-semibold text-gray-700">
                  BID NUMBER: <span className="text-[#008CD0]">0000011</span>
                </p>
                <div className="grid grid-cols-4 gap-4 text-gray-600 mt-2">
                  <p>
                    Employer <p className="text-[#008CD0] font-medium">8137</p>
                  </p>
                  <p>
                    Group <p className="text-[#008CD0] font-medium">65</p>
                  </p>
                  <p>
                    Local <p className="text-[#008CD0] font-medium">0472</p>
                  </p>
                  <p>
                    Business Agent{" "}
                    <p className="text-[#008CD0] font-medium">LG</p>
                  </p>
                </div>
              </div>
            </div>

            {/* <button className="mt-6 flex items-center bg-[#008CD0] text-white py-2 px-4 rounded-lg text-sm font-medium">
              <FaArrowLeft className="mr-2" /> BACK
            </button> */}

            <div className="mt-10">
              <img
                onClick={() => navigate("/screen2")}
                src={backbtn}
                alt="Logo"
                className="w-28 h-7 cursor-pointer"
              />
            </div>

            <div className="mt-6 flex gap-10 text-gray-600 text-sm">
              <p className=" font-semibold">
                App Date: 07/13/20233{" "}
                <p className="text-[#008CD0] text-xs text-end pl-10 font-light">
                  MM/DD/YY
                </p>
              </p>
              <p className=" font-semibold">
                <span className=" text-red-500">Bid Date:</span> 08/04/20233{" "}
                <p className="text-[#008CD0] text-xs text-end pl-10 font-light">
                  MM/DD/YY
                </p>
              </p>
              <p className=" font-semibold">
                Agreement Date: 08/04/20233{" "}
                <p className="text-[#008CD0] text-xs text-end pl-10 font-light">
                  MM/DD/YY
                </p>
              </p>
              <p className=" font-semibold">
                Response Date: 08/04/20233{" "}
                <p className="text-[#008CD0] text-xs text-end pl-10 font-light">
                  MM/DD/YY
                </p>
              </p>
              <p className=" font-semibold">
                Exp Date: 10/13/20233{" "}
                <p className="text-[#008CD0] text-xs text-end pl-10 font-light">
                  MM/DD/YY
                </p>
              </p>
            </div>

            <div className="flex">
              <div className="w-96">
                <div className="mt-6 flex items-center text-green-600 font-medium text-lg">
                  <FaRegCheckCircle className="text-2xl" />
                  <span className="ml-2 text-base">Approved</span>
                </div>

                <div className="mt-4 text-gray-600 font-medium text-sm">
                  <p>Estimated Hours: 10,500</p>
                  <p>Awarded Amount: 105,000.00</p>

                  {/* Dropdown for Reduction Amount */}
                  <div className="flex items-center space-x-2 relative w-40">
                    <label htmlFor="reductionAmount">Reduction Amount:</label>

                    <div className="relative w-full">
                      <select
                        id="reductionAmount"
                        name="reductionAmount"
                        className="appearance-none w-full border border-gray-400 rounded px-2 py-1"
                        defaultValue="0"
                      >
                        {reductionOptions.map((value) => (
                          <option key={value} value={value}>
                            {value === 0 ? ".00" : value}
                          </option>
                        ))}
                      </select>

                      {/* Custom Arrow Icon */}
                      <div className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600">
                        <FiChevronDown />
                      </div>
                    </div>
                  </div>

                  <p>Amount Used: 0.00</p>
                  <p>Remaining Amount: 0.00</p>
                </div>
              </div>
              <div className="mt-6 pt-4 w-full">
                <h2 className="text-[#008CD0] font-medium text-sm">
                  Remark / Comments (If Any)
                </h2>
                <div className="flex items-start mt-2 text-gray-600 text-sm">
                  <div className="mt-1">
                    <img src={img1} alt="Logo" className="w-16 h-10" />
                  </div>
                  <p className="mx-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Velit, enim dolore quasi eum cum ex numquam rem suscipit
                    harum laudantium eos distinctio voluptatem quod rerum vel
                    illum tenetur quo libero?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer className="text-start p-3 fixed bottom-0 w-full border-t-2 border-blue-300 text-gray-500 text-sm ">
            &copy; 2025{" "}
            <span className="font-medium">
              Market Recovery Bid Maintenance.
            </span>{" "}
            All Rights Reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
