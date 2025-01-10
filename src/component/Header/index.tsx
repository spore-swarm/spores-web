import { FC, useState } from "react";
import { daoLink, githubLink } from "../../app/config";
import { handleLink } from "../../app/util";
import logoImage from "../../asset/image/logo.svg";
import MenuModal from "../MenuModal";
import styles from "./index.module.scss";

interface Props {
  openMeetXModal: () => void;
  openFeeModal: () => void;
}

const Header: FC<Props> = ({ openMeetXModal, openFeeModal }) => {
  const [isMenuModalOpened, setIsMenuModalOpened] = useState(false);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <img className={styles.logo} src={logoImage} alt="sporeswarm" />
          <span className={styles.link} onClick={openMeetXModal}>
            AI Agent Meets X
          </span>
          <span className={styles.link} onClick={openFeeModal}>
            Fee Collection
          </span>
          <span className={styles.link} onClick={() => handleLink(daoLink)}>
            Spores DAO
          </span>
          <div
            className={styles.linkContainer}
            onClick={() => handleLink(githubLink)}
          >
            <svg className={styles.linkIcon}>
              <use xlinkHref="#icon-Github" />
            </svg>
            <span className={styles.linkText}>GitHub</span>
          </div>
        </div>
        <div className={styles.wallet}>
          <span className={styles.walletText}>Connect Wallet</span>
        </div>
      </div>
      <div className={styles.containerMobile}>
        <img className={styles.logoMobile} src={logoImage} alt="sporeswarm" />
        <svg
          className={styles.menuIcon}
          onClick={() => setIsMenuModalOpened(true)}
        >
          <use xlinkHref="#icon-menu" />
        </svg>
      </div>
      {isMenuModalOpened && (
        <MenuModal
          onClose={() => setIsMenuModalOpened(false)}
          openMeetXModal={openMeetXModal}
          openFeeModal={openFeeModal}
        />
      )}
    </div>
  );
};

export default Header;
