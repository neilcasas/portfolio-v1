import { Hero } from "./components/Hero";
import { About } from "./components/About";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <About></About>
    </main>
  );
}
