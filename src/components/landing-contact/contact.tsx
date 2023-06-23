/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import Tooltip from "@mui/material/Tooltip";
import PersonIcon from "@mui/icons-material/Person";

import "./contact.css";

const footerContacts = [
  {
    name: "Facebook",
    src: "./footer-contacts/facebook.svg",
  },
  {
    name: "Instagram",
    src: "./footer-contacts/instagram.svg",
  },
  {
    name: "Linkedin",
    src: "./footer-contacts/linkedin.svg",
  },
  {
    name: "Github",
    src: "./footer-contacts/github.svg",
  },
];

function Contact() {
  return (
    <div className="mt-10 flex flex-col" id="contact">
      <div>
        <p className="title">Let’s Discuss Your Project</p>
        <p className="subtitle">
          Let’s make something new, different and more meaningful or make thing
          more visual or conceptual
        </p>
      </div>
      <div className="flex gap-5 mt-8">
        <div className="w-5/12">
          <div className="flex gap-2">
            <div className="w-20 h-20 bg-[#42446e] rounded-xl flex items-center justify-center">
              <PlaceOutlinedIcon className="text-white" fontSize="large" />
            </div>
            <div className="mt-1">
              <p className="contact-title">Address</p>
              <p className="contact-subtitle">
                Sarajevo, Bosnia and Herzegovina
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-8">
            <div className="w-20 h-20 bg-[#42446e] rounded-xl flex items-center justify-center">
              <EmailOutlinedIcon className="text-white" fontSize="large" />
            </div>
            <div className="mt-1">
              <p className="contact-title">Email me</p>
              <p className="contact-subtitle">pandzicharis@hotmail.com</p>
            </div>
          </div>
          <div className="flex gap-2 mt-8">
            <div className="w-20 h-20 bg-[#42446e] rounded-xl flex items-center justify-center">
              <PhoneInTalkOutlinedIcon
                className="text-white"
                fontSize="large"
              />
            </div>
            <div className="mt-1">
              <p className="contact-title">Call me</p>
              <p className="contact-subtitle">+387 62 209 709</p>
            </div>
          </div>
          <div className="flex gap-2 mt-8">
            <div className="w-20 h-20 bg-[#42446e] rounded-xl flex items-center justify-center">
              <TagOutlinedIcon className="text-white" fontSize="large" />
            </div>
            <div className="mt-1">
              <p className="contact-title">Follow me</p>
              <div className="flex mt-1 follow-icons">
                {footerContacts.map((item) => (
                  <Tooltip
                    title={item.name}
                    arrow
                    placement="top"
                    key={item.name}
                  >
                    <img
                      className="header-link cursor-pointer"
                      src={item.src}
                      alt="logo"
                      width={35}
                      height={35}
                    />
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name and surname
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <PersonIcon className="text-gray-500 " />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Haris Pandzic"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="pandzicharis@hotmail.com"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="w-full text-white bg-[#42446e] hover:bg-[#42446e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const QContact = qwikify$(Contact, { eagerness: "visible" });
