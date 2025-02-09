"use client";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.scss";
import { Subheader } from "./Subheader";
import { Skill } from "./Skills";
import ProjectImage from "../../../public/cat.jpeg";

type ProjectProps = {
  title: string;
  description: string;
  github: string;
  skills: string[];
  website?: string;
  image: StaticImageData;
};

export const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-20%" }}
      whileInView={{ opacity: 1, translateX: "0%" }}
      transition={{ duration: "0.8", type: "spring" }}
      viewport={{ once: true }}
      className={styles.project}
    >
      <div className={styles.imgContainer}>
        <Image src={props.image} alt={props.title} />
      </div>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div className={styles.skills}>
        {props.skills.map((skill, key) => (
          <Skill key={key} text={skill} />
        ))}
      </div>
      <div className={styles.buttons}>
        <div>
          <a href={props.github}>GitHub</a>
          {props.website && <a href={props.website}>Website</a>}
        </div>
      </div>
    </motion.div>
  );
};

export const mockProjects: ProjectProps[] = [
  {
    title: "Project One",
    description: "This is a description for project one.",
    github: "https://github.com/project-one",
    skills: ["React", "TypeScript", "Next.js"],
    website: "https://project-one.com",
    image: ProjectImage,
  },
  {
    title: "Project Two",
    description: "This is a description for project two.",
    github: "https://github.com/project-two",
    skills: ["JavaScript", "HTML", "CSS"],
    image: ProjectImage,
  },
  {
    title: "Project Three",
    description: "This is a description for project two.",
    github: "https://github.com/project-two",
    skills: ["JavaScript", "HTML", "CSS"],
    image: ProjectImage,
  },
  {
    title: "Project Four",
    description: "This is a description for project two.",
    github: "https://github.com/project-two",
    skills: ["JavaScript", "HTML", "CSS"],
    image: ProjectImage,
  },
];

export const Projects: React.FC<{ projects: ProjectProps[] }> = ({
  projects,
}) => {
  return (
    <div className={styles.projectsContainer}>
      <Subheader text="Projects" />
      <div className={styles.projects}>
        {projects.map((project, key) => (
          <Project {...project} key={key} />
        ))}
      </div>
    </div>
  );
};
