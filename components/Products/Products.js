import styles from "./Products.module.scss";
import Card from "../Card/Card";
import {useState} from 'react';

export default function Products({ items, userPoints }) {

  const [showNav, setShowNav] = useState(false);
  const [orderItems, setOrderItems] = useState([...items])


  function handleShowNav() {
    if (window.innerWidth < 769 && !showNav ) {
      setShowNav(true); 
    }else{
      setShowNav(false);
    }
  }

  function orderLowestPrice() {

    const lowestPriceOrder = orderItems.sort(function (a, b) {
      return a.cost - b.cost;
    });

    setOrderItems([...lowestPriceOrder]);
  }

  return (

    <div className={styles.container}>
      <div className={styles.products}>
        <div className={`${styles.productsNav} ${showNav && styles.navMargin}`}>
          <div className={styles.navControl}>
            <p className={styles.productsQuantity}>
              16 of {items.length} products
            </p>
            <p onClick={handleShowNav} className={styles.sortButton}>
              Sort by:
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M176 32h96c13.3 0 24 10.7 24 24v200h103.8c21.4 0 32.1 25.8 17 41L241 473c-9.4 9.4-24.6 9.4-34 0L31.3 297c-15.1-15.1-4.4-41 17-41H152V56c0-13.3 10.7-24 24-24z" />
              </svg>
            </p>
          </div>
          <div className={`navButtons ${showNav && 'show'}`}>
            <button
              className={[styles.active, styles.productsFilter].join(" ")}
            >
              Most recent
            </button>
            <button onClick={orderLowestPrice} className={styles.productsFilter}>
              Lowest price
            </button>
            <button className={styles.productsFilter}>Highest price</button>
          </div>
        </div>
        
        <div className={styles.cardsContainer}>
          {orderItems?orderItems.map((item) => (
                <Card key={item._id} product={item} userPoints={userPoints} />
              ))
            : "Sin productos"}
        </div>
      </div>       


      <style jsx>{`
        @media (max-width: 768px) {
          .navButtons {
            position: absolute;
            z-index: 0;
            display: flex;
            border-bottom: 1px solid #d9d9d9;
            transition: 0.5s;
          }
          .navButtons button {
            font-size: 14px;
            padding: 6px;
          }
        }
        .show{
          transform: translateY(80px)
        }
        .
      `}</style>
    </div>
  );
}
