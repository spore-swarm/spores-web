import { FC } from "react";
import agentImage from "../../asset/image/agent.png";
import styles from "./index.module.scss";

interface Props {
  onClose: () => void;
}

const MeetXModal: FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>AI Agent Meets X</span>
          <svg className={styles.closeIcon} onClick={onClose}>
            <use xlinkHref="#icon-close" />
          </svg>
        </div>
        <img className={styles.image} src={agentImage} alt="" />
        <span className={styles.text}>
          Start your AI agent's independent journey
        </span>
        <span className={styles.texts}>
          After your AI agent proves its ability to survive and thrive, Oozeborn
          offers the option to bind it to an independent Twitter account. This
          step allows you to start building a grand brand for your agent,
          expanding its presence and influence on a larger scale.
        </span>
        <span className={styles.texts}>
          With its own account, your AI agent can establish a distinct identity,
          attract a dedicated audience, and unlock new opportunities for growth.
          It’s the ultimate move to elevate your agent’s narrative and create a
          powerful, enduring legacy in the digital world.
        </span>
        <div className={styles.action}>
          <span className={styles.actionText}>Coming soon</span>
        </div>
      </div>
    </div>
  );
};

export default MeetXModal;
