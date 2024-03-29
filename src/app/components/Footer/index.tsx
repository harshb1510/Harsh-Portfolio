import React from "react";
import { Link } from "@nextui-org/react";
import { GoHeart } from "react-icons/go";
import { Connections } from "..";
import { resolveColor, resolveTheme } from "@/app/utils";
import { Contact } from "../Contact";
import { useTheme } from "next-themes";
import { FooterTechnologies } from "./FooterTechnologies";
import { TfiEmail } from "react-icons/tfi";
import { whatsAppButton } from "@/app/services/assets.service";
import { MdPhone } from "react-icons/md";

type Props = {};
function Footer({}: Props) {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col w-full pt-10 mt-3 md:mt-20 rounded-lg">
      <div className="flex flex-row w-full mb-10 justify-center gap-20 flex-wrap">
        <div className="w-full md:w-1/3 px-5 md:px-0 flex flex-col justify-start items-center">
          <Contact />
        </div>
        <div className="flex flex-col w-full md:w-1/3 items-center">
          <div className="w-full h-min py-5">
            <Connections />
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start w-full">
            <div className="flex flex-row justify-center md:justify-start w-full">
              <Link href="https://wa.me/+919350728474" target="_blank">
                <img src={whatsAppButton.src} alt="" />
              </Link>
            </div>
            <div className="flex flex-row justify-start items-center gap-5 w-fit">
              <MdPhone color="white" size={"20px"} />
              <p className="text-tiny sm:text-sm md:text-normal">
                +91 9350728474
              </p>
            </div>
            <div className="flex flex-row justify-start items-center gap-5 w-fit">
              <TfiEmail color="white" size={"20px"} />
              <p className="text-tiny sm:text-sm md:text-normal">
                harshb15003@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-row items-center justify-center align-center align-center gap-x-2 w-full`}
        style={{ fontSize: 16 }}
      >
        <p className="m-0 p-0 text-tiny sm:text-sm md:text-normal">{`Made with`}</p>
        <GoHeart
          size={25}
          className="m-0 p-0"
          style={{ color: resolveColor(resolveTheme(theme)) }}
        />
        <p className="m-0 p-0 text-tiny sm:text-sm md:text-normal">{`with`}</p>

        <Link
          className="m-0 p-0 text-tiny sm:text-sm md:text-normal"
          isExternal
          href="https://nextui.org/"
          showAnchorIcon
          // style={{ color: resolveColor(resolveTheme(theme)) }}
        >
          Next.js
        </Link>
      </div>

      <FooterTechnologies />
    </div>
  );
}

export { Footer };
