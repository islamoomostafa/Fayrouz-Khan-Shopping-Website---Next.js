import Link from "next/link";
import styles from "./logo.module.css";
import logo from "/public/images/logo.png";
import { Cairo } from "next/font/google";
import Image from "next/image";

const logoFont = Cairo({ subsets: ["latin"], weight: "900" });

function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image src={logo} alt="Fayrouz Khan" width={200} height={120} />
    </Link>
  );
}

export default Logo;
