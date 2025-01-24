"use client";

import { Subheader } from "./Subheader";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

export const About: React.FC = () => {
  return (
    <motion.div
      className={styles.about}
      initial={{ opacity: 0, translateX: "-20%" }}
      whileInView={{ opacity: 1, translateX: "0%" }}
      viewport={{ once: true }}
    >
      <Subheader text="About Me" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        accumsan fringilla dictum. Morbi commodo maximus nisl non aliquam. Fusce
        tincidunt dolor quis hendrerit posuere. Donec gravida nunc diam.
        Maecenas consequat sagittis urna, eu volutpat enim. Praesent sed neque
        at sapien consectetur porta vitae in est. Phasellus imperdiet nisi a
        faucibus malesuada. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>
    </motion.div>
  );
};
