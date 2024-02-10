export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: `Fayrouz Khan - ${product.title}`,
    description: product.description,
  };
}

import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Post({ params }) {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src={product.thumbnail}
            alt={product.title}
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image) => (
            <Image
              key={product.id}
              src={image}
              alt={product.title}
              width={150}
              height={150}
            />
          ))}
        </div>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptatem odio temporibus amet placeat aliquam earum iste suscipit,
          officiis atque quaerat tenetur nisi mollitia quidem tempora, explicabo
          corporis. Repellendus ab facere fugit at mollitia quidem provident ea
          laborum exercitationem. Excepturi quibusdam ratione labore, iusto
          reiciendis animi nesciunt consequatur sapiente voluptas?
        </p>
      </div>
    </div>
  );
}

export default Post;
