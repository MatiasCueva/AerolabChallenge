import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerBg}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Electronics</h1>
        </div>
      </div>
    </div>
  );
}
