"use client";
import styles from "./Skills.module.scss";
import { Subheader } from "./Subheader";
import { motion } from "framer-motion";

type SkillProps = {
  text: string;
};

export const Skill: React.FC<SkillProps> = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "50%" }}
      whileInView={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: "0.8", type: "spring" }}
      viewport={{ once: true }}
      className={styles.skill}
    >
      {text}
    </motion.div>
  );
};

type SkillsProps = {
  skills: string[];
};

export const skillsData: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "Flask",
  "Java",
  "SQL",
  "MySQL",
  "SQLite",
  "PHP",
  "C#",
  "Java",
];

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className={styles.mainContainer}>
      <Subheader text="Skills" />
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <Skill key={index} text={skill} />
        ))}
      </div>
    </div>
  );
};
