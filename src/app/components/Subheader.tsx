import styles from "./Subheader.module.scss";
import { motion } from "framer-motion";
type SubheaderProps = {
  text: string;
};

export const Subheader: React.FC<SubheaderProps> = ({
  text,
}: SubheaderProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, translateX: "-20%" }}
      whileInView={{ opacity: 1, translateX: "0%" }}
      viewport={{ once: true }}
      className={styles.subheader}
    >
      {text}
    </motion.h2>
  );
};
