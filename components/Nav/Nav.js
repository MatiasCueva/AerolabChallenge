import styles from "./Nav.module.scss";
import Image from "next/image";

export default function Nav({user}) {
  return (
    <div className={styles.navbar}>
      <Image src="/icons/aerolab-logo.svg" alt="logo" width={36} height={36} />
      <div className={styles.user}>
        <p>{user.name}</p>
        <div className={styles.userPoints}>
          <p>{user.points} </p>
          <Image src="/icons/coin.svg" alt="coin" width={28} height={28} />
        </div>
      </div>
    </div>
  );
}
