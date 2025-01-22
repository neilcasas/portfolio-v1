"use client";
import styles from "./Skills.module.scss";
import { Subheader } from "./Subheader";

type SkillProps = {
  text: string;
};

const Skill: React.FC<SkillProps> = ({ text }) => {
  return <div className={styles.skill}>{text}</div>;
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
      <Subheader text="skills" />
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <Skill key={index} text={skill} />
        ))}
      </div>
    </div>
  );
};
