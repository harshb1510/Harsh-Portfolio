import React from "react";
import { ConnectionItemComp } from "./ConnectionItem";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { ConnectionItem } from "@/app/utils";

type Props = {};

function Connections({}: Props) {
  const iconSize = "25px";
  const connections: Array<ConnectionItem> = [
    {
      url: "https://github.com/harshb1510",
      icon: <IoLogoGithub color="white" size={iconSize} />,
      username: "harshb1510",
    },
    {
      url: "https://www.linkedin.com/in/harsh1510/",
      icon: <PiLinkedinLogoThin color="white" size={iconSize} />,
      username: "Harsh .",
    },
    {
      url: "https://wa.me/+919350728474",
      icon: <FaWhatsapp color="white" size={iconSize} />,
      username: "+91-9350728474",
    },
    {
      url: "https://t.me/harsh_bajwan",
      icon: <FaTelegram color="white" size={iconSize} />,
      username: "harsh_bajwan",
    },
  ];
  return (
    <div
      id="connect"
      className="flex flex-row justify-evenly md:justify-start flex-wrap sm:flex-nowrap gap-x-3 md:gap-x-10"
    >
      {connections.map((element, index) => {
        return <ConnectionItemComp key={index} {...element} />;
      })}
    </div>
  );
}

export { Connections };
