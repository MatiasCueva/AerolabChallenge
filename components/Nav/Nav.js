import styles from "./Nav.module.scss";
import Image from "next/image";
import { useState } from "react";
import RedeemCard from "./redeemCard/redeemCard";

export default function Nav({ user, history }) {
  const [openNav, setOpenNav] = useState(false);

  function showNav() {
    setOpenNav(true);
  }

  function hideNav(){
    setOpenNav(false)
  }
  

  return (
    <div className={styles.navbar}>

      <Image src="/icons/aerolab-logo.svg" alt="logo" width={36} height={36} />
      <div  className={styles.user}>
        <a onClick={showNav} className={styles.userName}>{user.name}</a>
        <div className={styles.userPoints}>
          <p>{user.points} </p>
          <Image src="/icons/coin.svg" alt="coin" width={28} height={28} />
        </div>
      </div>

      <div id="mySidenav" className={`${styles.sidenav} ${openNav && styles.show}`}>
        <a className={styles.closeBtn} onClick={hideNav}>&times;</a>

        <div className={styles.user}>
        <p className={styles.userName}>{user.name}</p>
        <div className={styles.userPoints}>
          <p>{user.points} </p>
          <Image src="/icons/coin.svg" alt="coin" width={28} height={28} />
        </div>
        </div>

        <a href="#">Add Points <Image src="/icons/coin.svg" alt="coin" width={28} height={28} /></a>
        <a href="#">Redeem history</a>

        <div className={styles.redeemCardContainer}>
        {history?history.map((item) => (
                <RedeemCard key={item._id} redeems={item} />
              ))
            : "No Redeems"}
        </div>


      </div>


    </div>
  );
}
