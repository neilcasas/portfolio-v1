import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with 💜 by
        <Link href="https://github.com/neilcasas" target="_blank">
          Neil Casas
        </Link>
        © 2025
      </p>
    </footer>
  );
};
