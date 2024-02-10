import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.svg";
import { Cairo } from "next/font/google";
import Link from "next/link";
const textFont = Cairo({ subsets: ["arabic"], weight: "900" });

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={Hero} alt="Fayrouz Khan" />
      </div>

      <div className={styles.col}>
        <h1 className={`${styles.title} ${textFont.className}`}>
          .. هدايا مختلفة <br />
          وتسيب ذكرى
        </h1>
        <p className={`${styles.description} ${textFont.className}`}>
          عالم كبير من الهدايا التذكارية في انتظارك عشان تختار منهم في فيروز خان
          .. هنساعدك عشان تختار أجمل هدية للناس اللي بتحبهـ❤️ــم
        </p>
        <Link href="/products" className={styles.link}>
          <button className={`${styles.button} ${textFont.className}`}>
            شوف منتجاتنا
          </button>
        </Link>
      </div>
    </div>
  );
}
