"use client";
import React from "react";
import { Subheader } from "./Subheader";
import { motion } from "framer-motion";
import styles from "./About.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";

type AboutProps = {
  img: StaticImageData;
  alt: string;
};

export const About: React.FC<AboutProps> = (props: AboutProps) => {
  return (
    <motion.div
      className={styles.about}
      initial={{ opacity: 0, translateX: "-20%" }}
      whileInView={{ opacity: 1, translateX: "0%" }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      <motion.div
        className={styles.mobileImgContainer}
        initial={{ opacity: 0, translateY: "20%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
      >
        <Image src={props.img} alt={props.alt} />
      </motion.div>
      <Subheader text="About Me" />
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          accumsan fringilla dictum. Morbi commodo maximus nisl non aliquam.
          Fusce tincidunt dolor quis hendrerit posuere. Donec gravida nunc diam.
          Maecenas consequat sagittis urna, eu volutpat enim. Praesent sed neque
          at sapien consectetur porta vitae in est. Phasellus imperdiet nisi a
          faucibus malesuada. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
        <motion.div
          className={styles.imgContainer}
          initial={{ opacity: 0, translateY: "20%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <Image src={props.img} alt={props.alt} />
        </motion.div>
      </div>
    </motion.div>
  );
};
