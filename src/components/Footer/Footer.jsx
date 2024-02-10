import Image from "next/image";
import styles from "./footer.module.css";
import social_media from "./data";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 Fayrouz Khan. All rights reserved</div>
      <div className={styles.social}>
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.name}.png`}
            width={20}
            height={20}
            className={styles.icon}
            alt={`Fayrouz Khan ${media.name} link`}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
