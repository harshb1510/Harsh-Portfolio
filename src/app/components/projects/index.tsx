import React from "react";
import { ProjectItem } from "./ProjectItem";
import {
  df1,
  df2,
  dfiance,
  fahwa,
  telegram,
  tg1,
  tg2,
  tg3,
  th1,
  th2,
  xp_bridge_1,
  xpr1,
  xpr2,
} from "@/app/services/assets.service";
import { Project, TechnologiesEnum } from "@/app/utils";
import { Element } from "react-scroll";

type Props = {};

export function Projects({}: Props) {
  const projects: Array<Project> = [
    {
      title: "Future Finance",
      subtitle: "A website based banking system",
      description: "Developed a comprehensive banking system, featuring fund transfers, balance checking, and deposits. Enabled real-time transaction history views, providing users with up-to-date financial information.",
      cover: xp_bridge_1.src,
      url: "https://finance-future.netlify.app",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.express,
        TechnologiesEnum.mongo,
        TechnologiesEnum.mongoose,
        TechnologiesEnum.github,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
        TechnologiesEnum.razorpay,
      ],
      images: [xp_bridge_1.src],
    },

    {
      title: "WatchNest",
      subtitle: "Redux E-commerce Web Application",
      description:
        "Implemented a dynamic shopping cart feature enabling seamless user experience with adjustments for individual products, entire cart, and quantity of multiple watches; resulting in a 20% increase in average order value.",
      cover: tg1.src,
      url: "https://watchnest.vercel.app",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.redux,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
        TechnologiesEnum.razorpay,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.redux,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
      ],
      images: [tg1.src, tg2.src, tg3.src],
    },

    {
      title: "Stack Overflow Clone",
      subtitle: "A Q&A platform for developers",
      description: `Developed a full stack application using MERN (MongoDB)`,
      cover: xpr1.src,
      url: "https://stackoverfclone.vercel.app",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.redux,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
        TechnologiesEnum.express,
        TechnologiesEnum.mongoose,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.openai,
        TechnologiesEnum.razorpay
      ],
      images: [xpr1.src, xpr2.src],
    },

    {
      title: "GDrive",
      subtitle:
        "A decentralized file storage system",
      description:
        "A decentralized file storage system using IPFS and Ethereum Blockchain.",
      cover: th1.src,
      url: "https://github.com/harshb1510/GDrive",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.ethereum,
        TechnologiesEnum.ethers,
        TechnologiesEnum.hardhat,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.hardhat,
        TechnologiesEnum.ethereum,
      ],
      images: [th1.src,th2.src],
    },

    {
      title: "TokenMaster",
      subtitle: "A blockchain-based ticket booking system",
      description:
        "A blockchain-based ticket booking system using Ethereum Blockchain.",
      cover: fahwa.src,
      url: "https://fahwa.io/",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.ethereum,
        TechnologiesEnum.ethers,
        TechnologiesEnum.hardhat,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.hardhat,
        TechnologiesEnum.ethereum,
      ],
      images: [fahwa.src],
    },

    {
      title: "BeSocial",
      subtitle: "A social media platform",
      description:"A social media platform with the use of CSS.",
      cover: dfiance.src,
      url: "https://react-social-cyan.vercel.app/profile",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.css,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.css,
      ],
      images: [dfiance.src, df1.src],
    },
  ];

  return (
    <Element name="projects">
      <div
        id="projects"
        className="flex flex-row justify-center items-stretch flex-wrap py-1 gap-3"
      >
        {projects.map((project, index) => {
          return (
            <div className="w-full sm:w-1/3 md:w-1/4">
              <ProjectItem key={index} {...project} />
            </div>
          );
        })}
      </div>
    </Element>
  );
}
