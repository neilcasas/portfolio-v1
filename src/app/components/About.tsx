"use client";

import { Subheader } from "./Subheader";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

export const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Subheader text="About Me" />
      <motion.p
        initial={{ opacity: 0, translateX: "-20%" }}
        whileInView={{ opacity: 1, translateX: "0%" }}
        transition={{ duration: "0.8", type: "spring" }}
        viewport={{ once: true }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        accumsan fringilla dictum. Morbi commodo maximus nisl non aliquam. Fusce
        tincidunt dolor quis hendrerit posuere. Donec gravida nunc diam.
        Maecenas consequat sagittis urna, eu volutpat enim. Praesent sed neque
        at sapien consectetur porta vitae in est. Phasellus imperdiet nisi a
        faucibus malesuada. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </motion.p>
    </div>
  );
};
