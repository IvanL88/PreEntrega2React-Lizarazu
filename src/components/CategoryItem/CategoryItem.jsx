import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductList from "../ProductList/ProductList";


const CategoryItem = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

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

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
        if (id) {
          setProductos(res.data.filter((producto) => producto.category == categorias[id].name));
        } else {
          setProductos(res.data);
        }      
      })
      .catch((error) => console.log(error))    
  }, [id]);

  return (
   
      <ProductList products={productos} />
    

  );
};

export default CategoryItem;