"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./List.module.scss";
import { useState } from "react";

type ListItemProps = {
  title: string;
  subtitle: string;
  years: string;
  image: StaticImageData;
  description?: string;
  href?: string;
};

export const Item: React.FC<ListItemProps> = (props: ListItemProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.listItem}>
      <div className={styles.imgContainer}>
        <Image src={props.image} alt={props.title} />
      </div>
      <div className={styles.listContent}>
        <div className={styles.listText} onClick={handleOpen}>
          <strong>{props.title}</strong>
          <p>{props.subtitle}</p>
          {props.description && (
            <div className={`${styles.description} ${open ? styles.show : ""}`}>
              {props.description}
            </div>
          )}
        </div>
        <p>{props.years}</p>
      </div>
    </div>
  );
};
