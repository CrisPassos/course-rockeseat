import React, { useEffect, useState } from "react";
import api from "../../services/api";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");
      console.log(response.data.docs);
      setProducts([...response.data.docs]);
    }

    loadProducts();
  }, []);

  return (
    <div>
      {products.map(product => <h2 key={product._id}>{product.title}</h2>)}
    </div>
  );
}

export default Main;
