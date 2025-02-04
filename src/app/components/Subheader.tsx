"use client";
import styles from "./Subheader.module.scss";
import { motion } from "framer-motion";
// type SubheaderProps = {
//   text: string
// };

export const Subheader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, translateX: "-20%" }}
      whileInView={{ opacity: 1, translateX: "0%" }}
      transition={{ duration: "0.8", type: "spring" }}
      viewport={{ once: true }}
      className={styles.subheader}
    >
      {text}
    </motion.h2>
  );
};
