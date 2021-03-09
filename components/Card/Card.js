import styles from "./Card.module.scss";

export default function Card({ product }) {
  const { img, _id, cost, name, category } = product;

  return (
    <div className={styles.card}>
      <p>Imagen: {img.url}</p>
      <p>Nombre: {name}</p>
      <p>Puntos: {cost}</p>
      <p>Categoria: {category}</p>
    </div>
  );
}


