import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './ProductItem.module.css';
import { Navigate, Route, Routes } from "react-router-dom";

const ProductItem = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{product.title}</h3>   
      <h4>Categoría: {product.category}</h4>
      <p>{product.description}</p>   
      <img src={product.image} alt={product.title} width="200" height="200" />
      <p>$ {product.price}</p>
      <a href="#">Agregar al carrito</a>
    </div>
  );
};

export default ProductItem;