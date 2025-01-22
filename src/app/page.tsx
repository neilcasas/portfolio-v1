import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { testProps, List } from "./components/List";
import { skillsData, Skills } from "./components/Skills";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <div className={styles.content}>
        <About></About>
        <List items={testProps} title="experience"></List>
        <List items={testProps} title="education"></List>
        <Skills skills={skillsData}></Skills>
      </div>
    </main>
  );
}
