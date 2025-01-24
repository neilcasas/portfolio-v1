import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./Projects.module.scss";
import { Subheader } from "./Subheader";

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
    <div className={styles.project}>
      <div className={styles.imgContainer}>
        <Image src={props.image} alt={props.title} />
      </div>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div className={styles.skills}>
        {props.skills.map((skill, key) => (
          <div key={key} className={styles.skill}>
            {skill}
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <div>
          <a href={props.github}>GitHub</a>
          {props.website && <a href={props.website}>Website</a>}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectProps[]> = (props: ProjectProps[]) => {
  return (
    <div className={styles.projectsContainer}>
      <Subheader text="projects" />
      <div className={styles.projects}>
        {props.map((project, key) => (
          <Project {...project} key={key} />
        ))}
      </div>
    </div>
  );
};
