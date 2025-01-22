import { Subheader } from "./Subheader";
import styles from "./About.module.scss";

export const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Subheader text="about" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        accumsan fringilla dictum. Morbi commodo maximus nisl non aliquam. Fusce
        tincidunt dolor quis hendrerit posuere. Donec gravida nunc diam.
        Maecenas consequat sagittis urna, eu volutpat enim. Praesent sed neque
        at sapien consectetur porta vitae in est. Phasellus imperdiet nisi a
        faucibus malesuada. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Vestibulum non nunc nec sem
        ultricies tincidunt. Phasellus dapibus porta turpis pulvinar tempus.
        Nulla at lorem tincidunt, aliquet sapien a, efficitur ligula. Praesent
        euismod, massa at commodo eleifend, mauris arcu condimentum ex, ac
        porttitor erat ante eget nisl. Quisque a leo pharetra, maximus diam id,
        pharetra magna. Nullam condimentum elit eu sem gravida hendrerit.
        Praesent posuere neque non neque tempor, a blandit ipsum laoreet. Fusce
        bibendum augue et nibh vehicula rhoncus malesuada at tellus.
      </p>
    </div>
  );
};
