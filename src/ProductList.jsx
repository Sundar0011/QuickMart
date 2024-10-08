import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import './productList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  console.log(products);

  // Fetch products when the component is mounted
  useEffect(() => {
    axios
      .get("http://localhost:9000/getAllProducts")
      .then((response) => {
        setProducts(response.data);
        console.log(products);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div >
      <ProductCard products={products} />
    </div>
  );
};

export default ProductList;
