import { FC } from "react";
import { discordLink, telegramLink } from "../../app/config";
import { handleLink } from "../../app/util";
import styles from "./index.module.scss";

interface Props {
  onClose: () => void;
}

const SocialModal: FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Join Community</span>
          <svg className={styles.closeIcon} onClick={onClose}>
            <use xlinkHref="#icon-close" />
          </svg>
        </div>
        <div className={styles.list}>
          <div
            className={styles.item}
            onClick={() => {
              handleLink(discordLink);
              onClose();
            }}
          >
            <div className={styles.itemHeader}>
              <svg className={styles.itemHeaderIcon}>
                <use xlinkHref="#icon-discord" />
              </svg>
              <span className={styles.itemHeaderText}>Discord</span>
              <svg className={styles.itemHeaderIcons}>
                <use xlinkHref="#icon-r_h" />
              </svg>
            </div>
            <div className={styles.itemContent}>
              <span className={styles.itemContentText}>└ Swarms</span>
              <span className={styles.itemContentText}>
                &nbsp;&nbsp;└ Spores
              </span>
            </div>
          </div>
          <div
            className={styles.item}
            onClick={() => {
              handleLink(telegramLink);
              onClose();
            }}
          >
            <div className={styles.itemHeader}>
              <svg className={styles.itemHeaderIcon}>
                <use xlinkHref="#icon-telegram" />
              </svg>
              <span className={styles.itemHeaderText}>Telegram</span>
              <svg className={styles.itemHeaderIcons}>
                <use xlinkHref="#icon-r_h" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialModal;
