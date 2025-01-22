import styles from "./Subheader.module.scss";
type SubheaderProps = {
  text: string;
};

export const Subheader: React.FC<SubheaderProps> = ({
  text,
}: SubheaderProps) => {
  return <h2 className={styles.subheader}>{text}</h2>;
};
