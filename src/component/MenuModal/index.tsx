import { FC } from "react";
import { daoLink, githubLink } from "../../app/config";
import { handleLink } from "../../app/util";
import logoImage from "../../asset/image/logo.svg";
import styles from "./index.module.scss";

interface Props {
  onClose: () => void;
  openMeetXModal: () => void;
  openFeeModal: () => void;
}

const MenuModal: FC<Props> = ({ onClose, openMeetXModal, openFeeModal }) => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <img className={styles.logo} src={logoImage} alt="sporeswarm" />
        <svg className={styles.closeIcon} onClick={onClose}>
          <use xlinkHref="#icon-close" />
        </svg>
      </div>
      <div className={styles.list}>
        <div
          className={styles.item}
          onClick={() => {
            openMeetXModal();
            onClose();
          }}
        >
          <span className={styles.itemText}>AI Agent Meets X</span>
          <svg className={styles.itemIcon}>
            <use xlinkHref="#icon-right" />
          </svg>
        </div>
        <div
          className={styles.item}
          onClick={() => {
            openFeeModal();
            onClose();
          }}
        >
          <span className={styles.itemText}>Fee Collection</span>
          <svg className={styles.itemIcon}>
            <use xlinkHref="#icon-right" />
          </svg>
        </div>
        <div
          className={styles.item}
          onClick={() => {
            handleLink(daoLink);
            onClose();
          }}
        >
          <span className={styles.itemText}>Spores DAO</span>
          <svg className={styles.itemIcon}>
            <use xlinkHref="#icon-right" />
          </svg>
        </div>
        <div
          className={styles.item}
          onClick={() => {
            handleLink(githubLink);
            onClose();
          }}
        >
          <div className={styles.itemContainer}>
            <svg className={styles.itemIcons}>
              <use xlinkHref="#icon-Github" />
            </svg>
            <span className={styles.itemTexts}>GitHub</span>
          </div>
          <svg className={styles.itemIcon}>
            <use xlinkHref="#icon-right" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
