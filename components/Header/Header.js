import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerBg}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Electronics</h2>
        </div>
      </div>
    </div>
  );
}
