import styles from "./Subheader.module.scss";
type SubheaderProps = {
  text: string; // Ensure 'text' is a string
};

export function Subheader({ text }: SubheaderProps) {
  return <h2 className={styles.subheader}>{text}</h2>;
}
