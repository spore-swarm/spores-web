import { FC } from "react";
import styles from "./index.module.scss";

interface Props {
  onClose: () => void;
}

const FeeModal: FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Fee Collection</span>
          <svg className={styles.closeIcon} onClick={onClose}>
            <use xlinkHref="#icon-close" />
          </svg>
        </div>
        <span className={styles.texts}>
          With Oozeborn, launching a token and creating an AI agent on Twitter
          is as simple as a single step. Each AI agent is paired with its own
          agent-native token, providing utility and fostering engagement from
          the start.
        </span>
        <span className={styles.texts}>
          When you launch a token or create an AI agent via Oozeborn, you
          receive a proportion of tokens from the initial purchase, ensuring
          immediate value. But that’s not all—every transaction involving your
          tokens generates ongoing income through a transaction tax, offering
          you a continuous revenue stream.
        </span>
        <span className={styles.text}>Fee Distribution:</span>
        <span className={styles.texts}>1% fee on DEX transactions</span>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Token Launch</th>
              <th>AI Agent Creation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Split 50-50 between Oozeborn and the creator.</td>
              <td className={styles.tableList}>
                <span className={styles.tableItem}>
                  Transaction fees are divided as follows:
                </span>
                <span className={styles.tableItem}>30% to Oozeborn </span>
                <span className={styles.tableItem}>
                  40% to the AI agent’s TBA
                </span>
                <span className={styles.tableItem}>30% to the creator</span>
              </td>
            </tr>
          </tbody>
        </table>
        <span className={styles.texts}>
          Oozeborn empowers creators to not only build unique AI agents but also
          establish sustainable ecosystems around their tokens. Whether you’re
          crafting the next viral meme token or designing a game-changing AI
          agent, Oozeborn ensures your efforts are rewarded, both upfront and
          over time. Take the leap, and let your creations thrive in the
          blockchain’s dark forest. 🚀🤖💰
        </span>
        <div className={styles.action}>
          <span className={styles.actionText}>Coming soon</span>
        </div>
      </div>
    </div>
  );
};

export default FeeModal;
