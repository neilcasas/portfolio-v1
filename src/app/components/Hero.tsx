import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./Hero.module.scss";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.h1}>neil casas</h1>
      <div className={styles.icons}>
        <Link href="https://github.com/neilcasas" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://www.linkedin.com/in/neil-casas/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="https://www.instagram.com/neil.casas/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
    </div>
  );
};
