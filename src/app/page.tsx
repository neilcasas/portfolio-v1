import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { testProps, List } from "./components/List";
import { skillsData, Skills } from "./components/Skills";
import Profile from "../../public/profile.jpg";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <div className={styles.content}>
        <About img={Profile} alt="Neil Casas"></About>
        <List items={testProps} title="Experience"></List>
        <List items={testProps} title="Education"></List>
        <Skills skills={skillsData}></Skills>
      </div>
    </main>
  );
}
