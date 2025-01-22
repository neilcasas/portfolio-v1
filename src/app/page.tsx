import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Item } from "./components/List";
import styles from "./page.module.scss";
import Meta from "../../public/meta-logo.webp";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <About></About>
      <Item
        image={Meta}
        title="Software Engineer"
        subtitle="Meta"
        years="2023-2024"
        description="hello"
      ></Item>
    </main>
  );
}
