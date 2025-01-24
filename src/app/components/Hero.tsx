"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.scss";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, translateX: "-20%" }}
      whileInView={{ opacity: 1, translateX: "0%" }}
      transition={{ duration: "0.8", type: "spring" }}
      viewport={{ once: true }}
    >
      <h1 className={styles.h1}>Neil Casas</h1>
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
    </motion.div>
  );
};
