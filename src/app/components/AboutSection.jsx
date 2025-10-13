"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BSc. (Hons) in Computer Engineering University of Ruhuna</li>
        <li>Rajapakshe Central Collage, Weeraketiya</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an undergraduate student in Computer Engineering at the University of Ruhuna and currently working as a Software Engineer. As a full-stack web developer, I am passionate about building interactive, user-friendly, and responsive web applications. I am a fast learner who constantly seeks to expand my technical knowledge and stay updated with emerging technologies. I enjoy collaborating with teams to turn innovative ideas into high-quality software solutions.
          </p>
           <div className="flex flex-row justify-start mt-8">
            
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div> 
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> 
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
