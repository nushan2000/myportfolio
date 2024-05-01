"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./SkillCard";

import { motion, useInView } from "framer-motion";

const SkillData = [
  {
    id: 1,
    title: "Frontend",
    description: "Frontend description",
    image: "/images/skill/1.png",
    
    icons: [{url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",name:"React Js"}, {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",name:"Next Js"},{url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",name:"HTML5"},{url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",name:"CSS3"},{url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",name:"Javascript"},{url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",name:"Bootstrap"}]
  },
  {
    id: 2,
    title: "Backend",
    description: "Backend description",
    image: "/images/skill/2.png",
   
    icons: [{url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",name:"Node Js"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",name:"Express Js"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" ,name:"MongoDB"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",name:"FireBase"},
    ]
  },
  {
    id: 3,
    title: "Android",
    description: "Android description",
    
    
    icons: [{url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",name:"Kotlin"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original-wordmark.svg",name:"Android Studio"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg" ,name:"XML"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",name:"FireBase"},
    ]
  },
  {
    id: 4,
    title: "Other",
    description: "Other description",
    
    
    icons: [{url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",name:"Git"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",name:"GitHub"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" ,name:"Postman"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",name:"Figma"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jiraalign/jiraalign-original.svg",name:"Jira"},
    ]
  },
  {
    id: 5,
    title: "Ai",
    description: "Authentication and CRUD operations",
    image: "/images/skill/5.png",
   
    icons: [{url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",name:"Tensorflow"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",name:"Jupyter"},
     {url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" ,name:"Pytorch"},
    
    ]
  },
  
];

const SkillSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

 

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="skill">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
     
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {SkillData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              icons={project.icons}
              
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillSection;
