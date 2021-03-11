import styles from "./Products.module.scss";
import Card from "./Card/Card";
import {useState} from 'react';

export default function Products({ items, userPoints }) {

  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState("recent")
  const [orderItems, setOrderItems] = useState([...items]);


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
    setActiveNav("lowest");
  }

  function orderHighestPrice() {

    const highestPriceOrder = orderItems.sort(function (a, b) {
      return b.cost - a.cost;
    });

    setOrderItems([...highestPriceOrder]);
    setActiveNav("highest");
  }

  function orderRecents() {
    setOrderItems(items);
    setActiveNav("recent");
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
          <div className={`${styles.navButtons} ${showNav && styles.navDown}`}>
            <button onClick={orderRecents}
              className={`${styles.productsFilter} ${(activeNav=="recent") && styles.active}`}>
              Most recent
            </button>
            <button onClick={orderLowestPrice} className={`${styles.productsFilter} ${(activeNav=="lowest") && styles.active}`}>
              Lowest price
            </button>
            <button onClick={orderHighestPrice} className={`${styles.productsFilter} ${(activeNav=="highest") && styles.active}`}>Highest price</button>
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


        .
      `}</style>
    </div>
  );
}
