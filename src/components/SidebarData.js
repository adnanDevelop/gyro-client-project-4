import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IoMdContact } from "react-icons/io";

export const SidebarData = [
    {
        title: "Log In",
        path: "/LogIn",
        icon: <IoMdContact />,
        cName: "nav-text",
    },{
        title: "Member",
        path: "/member",
        icon: <IoMdContact />,
        cName: "nav-text",
    },
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Reserve",
        path: "/reserve",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
    {
        title: "Trips",
        path: "/trips",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text",
    },
    {
        title: "FAQ",
        path: "/faq",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text",
    },
    {
        title: "About Us",
        path: "/aboutus",
        icon: <IoIcons.IoMdHelpCircle />,
        cName: "nav-text",
    },
];