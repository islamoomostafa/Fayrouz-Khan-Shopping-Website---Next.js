export const metadata = {
  title: "Fayrouz Khan - Products",
  description: "Designed by Islam Mostafa",
};

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Blog() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContainer}>
      {products.map((product) => (
        <Link
          href={`/products/${product.id}`}
          className={styles.post}
          key={product.id}
        >
          <div className="styles.imageContainer">
            <Image
              className={styles.image}
              src={product.thumbnail}
              width={350}
              height={250}
              alt="post image"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.text}>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
