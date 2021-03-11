import styles from "./redeemCard.module.scss";
import Image from "next/image";


export default function RedeemCard({ redeems }) {
  const { img, cost, name, category } = redeems;

  console.log(redeems);

  return (
    <div className={styles.redeemCard}>
      <div className={styles.redeemCardImg}>
        <img src={img.url} />
      </div>
      <div className={styles.redeemCardText}>
        <p>{name}</p>
        <p className={styles.category}>{category}</p>
        <p className={styles.cost}>{cost} <Image src="/icons/coin.svg" alt="coin" width={28} height={28} /></p>
      </div>
    </div>
  );
}
