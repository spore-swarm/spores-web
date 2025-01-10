import { FC, useState } from "react";
import {
  discordLink,
  twitterLink1,
  twitterLink2,
  twitterLink3,
  twitterLink4,
  twitterLink5,
} from "../../app/config";
import { handleLink } from "../../app/util";
import communityImage from "../../asset/image/community.png";
import grassianImage from "../../asset/image/grassian.png";
import homeImage from "../../asset/image/home.png";
import jaguarundiImage from "../../asset/image/jaguarundi.png";
import oozebornImage from "../../asset/image/oozeborn.png";
import sayaImage from "../../asset/image/saya.png";
import sporesiImage from "../../asset/image/spores.png";
import FeeModal from "../../component/FeeModal";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import MeetXModal from "../../component/MeetXModal";
import SocialModal from "../../component/SocialModal";
import styles from "./index.module.scss";

const actionList = [
  {
    image: communityImage,
    text: "Join Community",
    // link: "modal",
    link: discordLink,
  },
  {
    image: sporesiImage,
    text: "@justsay_ohno",
    link: twitterLink1,
  },
  {
    image: oozebornImage,
    text: "@hioozeborn_ai",
    link: twitterLink2,
  },
  {
    image: sayaImage,
    text: "@hisaya_ai",
    link: twitterLink3,
  },
  {
    image: grassianImage,
    text: "@higrassian_ai",
    link: twitterLink4,
  },
  {
    image: jaguarundiImage,
    text: "@hicat_ai",
    link: twitterLink5,
  },
];

const Home: FC = () => {
  const [isMeetXModalOpened, setIsMeetXModalOpened] = useState(false);
  const [isFeeModalOpened, setIsFeeModalOpened] = useState(false);
  const [isSocialModalOpened, setIsSocialModalOpened] = useState(false);

  return (
    <>
      <Header
        openMeetXModal={() => setIsMeetXModalOpened(true)}
        openFeeModal={() => setIsFeeModalOpened(true)}
      />
      <div className={styles.body}>
        <div className={styles.container}>
          <img className={styles.bannerImage} src={homeImage} alt="" />
          <div className={styles.bannerActions}>
            {actionList?.map((_item, _index) => (
              <div
                className={`${styles.bannerAction} ${
                  _item.link ? styles.active : ""
                }`}
                key={_index}
                onClick={() => {
                  if (_item.link === "modal") {
                    setIsSocialModalOpened(true);
                  } else {
                    handleLink(_item.link);
                  }
                }}
              >
                <img
                  className={styles.bannerActionImage}
                  src={_item.image}
                  alt=""
                />
                <span className={styles.bannerActionText}>{_item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      {isMeetXModalOpened && (
        <MeetXModal onClose={() => setIsMeetXModalOpened(false)} />
      )}
      {isFeeModalOpened && (
        <FeeModal onClose={() => setIsFeeModalOpened(false)} />
      )}
      {isSocialModalOpened && (
        <SocialModal onClose={() => setIsSocialModalOpened(false)} />
      )}
    </>
  );
};

export default Home;
