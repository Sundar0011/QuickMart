import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch products when the component is mounted
  useEffect(() => {
    axios
      .get("http://localhost:8087/getProducts")
      .then((response) => {
        setProducts(response.data); // Store the data in the state
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>Name:</strong> {product.name} | <strong>Price:</strong> {product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default ProductList;
