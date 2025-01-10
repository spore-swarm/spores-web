import { FC } from "react";
import styles from "./index.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.body}>
      <span
        className={styles.container}
      >{`© ${new Date().getFullYear()} sporeswarm.com All rights reserved.`}</span>
    </div>
  );
};

export default Footer;
