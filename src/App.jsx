import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import ProductItem from "./components/ProductItem/ProductItem";
import styles from "./App.module.css";
import Error404 from "./components/errors/Error404";
import CategoryList from "./components/CategoryList/CategoryList";
import CategoryItem from "./components/CategoryItem/CategoryItem";

function App() {

  const [productos, setProductos] = useState([]);

  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => setProductos(res.data))
    .catch((err) => console.log(err));
   
  }, []);

  const categorias =[
    {
      "id": 1,
      "name": "men's clothing"
    },
    {
      "id": 2,
      "name": "jewelery"
    },
    {
      "id": 3,
      "name": "electronics"
    },
    {
      "id": 4,
      "name": "women's clothing"
    }
    
  ];
  
 return (
    <div>
       <div>
        <Navbar className={styles.container}/>
        <h1 className={styles.title}>Bienvenido a MouseLand</h1>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<ProductList products={productos} />}/>
          <Route path="/productos/:id" element={<ProductItem />} />
          <Route path="/categorias" element={ <CategoryList categorias={categorias}  />} />
          <Route path="/categorias/:id" element={<CategoryItem />} />
          <Route path="/cart" element={<h3>Carrito de compras</h3>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </div>
    </div>
  );
}

export default App;


