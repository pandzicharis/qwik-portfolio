/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import Chip from "@mui/material/Chip";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import "./about.css";

function About() {
  return (
    <div className="mt-12 w-full flex flex-col">
      <p className="link-title">about.</p>
      <span className="about-me">
        The Generator App is an online tool that helps you to export ready-made
        templates ready to work as your future website. It helps you to combine
        slides, panels and other components and export it as a set of static
        files: HTML/CSS/JS.
      </span>
      <div className="mt-10">
        <span className="title">Work experience</span>
        <div className="p-8 w-[70%]">
          <ol className="relative border-l border-gray-200">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div className="flex items-center justify-between">
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  Full-stack developer
                </h3>
                <Chip
                  label="Full Time"
                  size="medium"
                  sx={{
                    backgroundColor: "#D7FFE0",
                    "& .MuiChip-label": {
                      color: "#018C0F",
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "26px",
                    },
                  }}
                />
              </div>
              <div className="flex gap-5 text-sm justify-between">
                <div className="flex items-ce gap-3">
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <BusinessIcon sx={{ fontSize: "16px" }} />
                    <p className="">Ankora</p>
                  </div>
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <LocationOnIcon sx={{ fontSize: "16px" }} />
                    <p className="">Sarajevo</p>
                  </div>
                </div>
                <div className="flex text-[#A7A7A7] items-center gap-1 mt-3">
                  <CalendarMonthIcon sx={{ fontSize: "16px" }} />
                  <p className="">September 2021 - now</p>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div className="flex items-center justify-between">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                  Web developer
                </h3>
                <Chip
                  label="Internship"
                  size="medium"
                  sx={{
                    backgroundColor: "#D7FFE0",
                    "& .MuiChip-label": {
                      color: "#018C0F",
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "26px",
                    },
                  }}
                />
              </div>
              <div className="flex gap-5 text-sm justify-between">
                <div className="flex items-ce gap-3">
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <BusinessIcon sx={{ fontSize: "16px" }} />
                    <p className="">Ankora</p>
                  </div>
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <LocationOnIcon sx={{ fontSize: "16px" }} />
                    <p className="">Sarajevo</p>
                  </div>
                </div>
                <div className="flex text-[#A7A7A7] items-center gap-1 mt-3">
                  <CalendarMonthIcon sx={{ fontSize: "16px" }} />
                  <p className="">July 2021 - Septemper 2021</p>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div className="flex items-center justify-between">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                  Codecta Academy student
                </h3>
                <Chip
                  label="Academy"
                  size="medium"
                  sx={{
                    backgroundColor: "#D7FFE0",
                    "& .MuiChip-label": {
                      color: "#018C0F",
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "26px",
                    },
                  }}
                />
              </div>
              <div className="flex gap-5 text-sm justify-between">
                <div className="flex items-ce gap-3">
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <BusinessIcon sx={{ fontSize: "16px" }} />
                    <p className="">Codecta</p>
                  </div>
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <LocationOnIcon sx={{ fontSize: "16px" }} />
                    <p className="">Sarajevo</p>
                  </div>
                </div>
                <div className="flex text-[#A7A7A7] items-center gap-1 mt-3">
                  <CalendarMonthIcon sx={{ fontSize: "16px" }} />
                  <p className="">January 2020 - March 2020</p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div>
        <span className="title">Education</span>
        <div className="p-8 w-[70%]">
          <ol className="relative border-l border-gray-200 ">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                <SchoolIcon sx={{ fontSize: "14px", color: "#1e40af" }} />
              </span>
              <div className="flex items-center justify-between">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                  Bachelor of Information Technologies
                </h3>
                <Chip
                  label="College"
                  size="medium"
                  sx={{
                    backgroundColor: "#D7FFE0",
                    "& .MuiChip-label": {
                      color: "#018C0F",
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "26px",
                    },
                  }}
                />
              </div>
              <div className="flex gap-5 text-sm justify-between">
                <div className="flex items-ce gap-3">
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <BusinessIcon sx={{ fontSize: "16px" }} />
                    <p className="">Faculty of information technology</p>
                  </div>
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <LocationOnIcon sx={{ fontSize: "16px" }} />
                    <p className="">Mostar</p>
                  </div>
                </div>
                <div className="flex text-[#A7A7A7] items-center gap-1 mt-3">
                  <CalendarMonthIcon sx={{ fontSize: "16px" }} />
                  <p className="">October 2016 - June 2022</p>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                <SchoolIcon sx={{ fontSize: "14px", color: "#1e40af" }} />
              </span>
              <div className="flex items-center justify-between">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                  Graduate of the Gazi Husrev-bey madrasa
                </h3>
                <Chip
                  label="High School"
                  size="medium"
                  sx={{
                    backgroundColor: "#D7FFE0",
                    "& .MuiChip-label": {
                      color: "#018C0F",
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "26px",
                    },
                  }}
                />
              </div>
              <div className="flex gap-5 text-sm justify-between">
                <div className="flex items-ce gap-3">
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <SchoolIcon sx={{ fontSize: "16px" }} />
                    <p className="">Gazi Husrev-bey's madrasa</p>
                  </div>
                  <div className="flex text-[#A7A7A7] items-center gap-1">
                    <LocationOnIcon sx={{ fontSize: "16px" }} />
                    <p className="">Sarajevo</p>
                  </div>
                </div>
                <div className="flex text-[#A7A7A7] items-center gap-1 mt-3">
                  <CalendarMonthIcon sx={{ fontSize: "16px" }} />
                  <p className="">Septemper 2012 - April 2016</p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export const QAbout = qwikify$(About, { eagerness: "visible" });
