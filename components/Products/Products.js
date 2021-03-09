import styles from "./Products.module.scss";
import Card from "../Card/Card";

export default function Products({ items }) {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <div className={styles.productsNav}>
          <p className={styles.productsQuantity}>16 of {items.length} products</p>
          <p>Sort by:</p>
          <p className={styles.active}>Most recent</p>
          <p className={styles.productsFilter}>Lowest price</p>
          <p className={styles.productsFilter}>Highest price</p>
        </div>
        <div>
          {items?items.map((item) => (
            <Card key={item._id} product={item} />
          )):"Ssin productoss"}
        </div>
      </div>
    </div>
  );
}

