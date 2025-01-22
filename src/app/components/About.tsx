import { Subheader } from "./Subheader";
import styles from "./About.module.scss";

export const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Subheader text="about me" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        accumsan fringilla dictum. Morbi commodo maximus nisl non aliquam. Fusce
        tincidunt dolor quis hendrerit posuere. Donec gravida nunc diam.
        Maecenas consequat sagittis urna, eu volutpat enim. Praesent sed neque
        at sapien consectetur porta vitae in est. Phasellus imperdiet nisi a
        faucibus malesuada. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>
    </div>
  );
};
