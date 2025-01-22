"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./List.module.scss";
import { useState } from "react";
import { Subheader } from "./Subheader";
import MetaLogo from "../../../public/meta-logo.webp";

type ListItemProps = {
  title: string;
  subtitle: string;
  years: string;
  image: StaticImageData;
  description?: string;
  href?: string;
};

const Item: React.FC<ListItemProps> = (props: ListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
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
            <div
              className={`${styles.description} ${isOpen ? styles.show : ""}`}
            >
              {props.description}
            </div>
          )}
        </div>
        <p>{props.years}</p>
      </div>
    </div>
  );
};

export const testProps: ListItemProps[] = [
  {
    title: "TomasinoWeb",
    subtitle: "Frontend Developer",
    years: "2024-2025",
    image: MetaLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida magna eu felis consequat, et lacinia neque hendrerit. Donec et arcu mauris. Pellentesque at ultricies tellus, a tempor ex. Etiam rutrum eu lectus sed fringilla. Nunc rhoncus est sed nunc cursus, vel venenatis justo aliquam. Etiam id lacus sit amet purus cursus tincidunt a at leo. Praesent egestas condimentum porttitor. Ut a mollis lacus.",
  },
  {
    title: "TomasinoWeb",
    subtitle: "Frontend Developer",
    years: "2024-2025",
    image: MetaLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida magna eu felis consequat, et lacinia neque hendrerit. Donec et arcu mauris. Pellentesque at ultricies tellus, a tempor ex. Etiam rutrum eu lectus sed fringilla. Nunc rhoncus est sed nunc cursus, vel venenatis justo aliquam. Etiam id lacus sit amet purus cursus tincidunt a at leo. Praesent egestas condimentum porttitor. Ut a mollis lacus.",
  },
  {
    title: "TomasinoWeb",
    subtitle: "Frontend Developer",
    years: "2024-2025",
    image: MetaLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida magna eu felis consequat, et lacinia neque hendrerit. Donec et arcu mauris. Pellentesque at ultricies tellus, a tempor ex. Etiam rutrum eu lectus sed fringilla. Nunc rhoncus est sed nunc cursus, vel venenatis justo aliquam. Etiam id lacus sit amet purus cursus tincidunt a at leo. Praesent egestas condimentum porttitor. Ut a mollis lacus.",
  },
];

type ListProps = {
  items: ListItemProps[];
  title: string;
};

export const List: React.FC<ListProps> = (props: ListProps) => {
  return (
    <div className={styles.list}>
      <Subheader text={props.title}></Subheader>
      {props.items.map((item, key) => (
        <Item
          key={key}
          title={item.title}
          subtitle={item.subtitle}
          years={item.years}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};
