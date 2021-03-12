import styles from "./Card.module.scss";
import Image from "next/image";
import useAppContext from "../../../context/context";
import { redeemItem } from "../../../services/api";


export default function Card({product, userPoints}) {
  const { img, _id, cost, name, category } = product;
  const {variableState, setVariableState}=useAppContext();

  let havePoint =  styles.bagBtn;
  let overlay = styles.cardOverlay;

  if (cost > userPoints){
    overlay = styles.hide;
    havePoint = `${styles.bagBtn} ${styles.noPoints}`
  }

  async function handleRedeem(productId){
     const user=await redeemItem(productId);
     setVariableState({...variableState,user})
 }



  return (
  
    <div className={styles.card}>


      <button className={havePoint}>
        <svg height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"/></svg>
        <div className={styles.cantRedeem}>
          <p>You need {cost}</p>  <Image src="/icons/coin.svg" alt="coin" width={20} height={20} />
        </div>

      </button>

      <div className={overlay}>
        <p>{cost} <Image src="/icons/coin.svg" alt="coin" width={28} height={28} /></p>
        <button onClick={()=>handleRedeem(_id)} className={styles.redeemBtn}>Redeem now</button>
      </div>

      <div className={styles.cardImgContainer}>
        <img src={img.url} alt="product-img" />
      </div>
      <div className={styles.cardText}>
        <p>{name}</p>
        <p className={styles.category}>{category}</p>
      </div>
    </div>
  

   // </Context.provider>

  );
}


