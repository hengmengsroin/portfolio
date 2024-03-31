import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Mission Budget Request Management System",
    description:
      "Internal system for managing budget requests and approvals for foreign missions in Ministry of Foreign Affairs",
    image: "/LogoProject1.png",
    link: "/#",
  },
  {
    title: "Borey Management System",
    description:
      "A system for managing borey properties, sales, and customer information",
    image: "/LogoProject2.png",
    link: "https://borey.com/",
  },
  {
    title: "Bontub System",
    description: "A system for managing and tracking tenants and properties",
    image: "/LogoProject3.png",
    link: "https://www.bontub.com/",
  },
  {
    title: "Travona",
    description:
      "A platform for searching and booking hotels, attractions, and tours",
    image: "/travona-logo.png",
    link: "https://www.travona.net/",
  },
  {
    title: "KhmerPedia Dictionary",
    description:
      "A dictionary application for searching Khmer words and their meanings",
    image: "/khmer-pedia-logo.png",
    link: "https://www.travona.net/",
  },
  {
    title: "CCC Directory application",
    description:
      "A mobile application for searching and contacting CCC members and partners",
    image: "/ccc-logo.png",
    link: "https://www.travona.net/",
  },
  {
    title: "FaS eKYC",
    description:
      "A Fast and Secure eKYC system for verifying customer identities",
    image: "/fas-ekyc-logo.png",
    link: "https://www.travona.net/",
  },
  {
    title: "Meeting And Mission Management System",
    description:
      "A system for managing and tracking meetings and missions in the organization",
    image: "/LogoProject4.png",
    link: "http://gomeeting.com/",
  },
];

type ProjectType = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ProjectCard = ({ title, description, image, link }: ProjectType) => {
  return (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <div className="flex-row flex mb-5">
        <Image
          src={image}
          height={150}
          width={150}
          alt={title}
          style={{ objectFit: "contain" }}
        />
        <div className="p-3">
          <p className="text-white font-semibold text-md">{title}</p>
          <p className="text-gray-500 text-[10px]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
