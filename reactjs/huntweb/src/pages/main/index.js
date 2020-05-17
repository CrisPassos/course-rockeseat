import React, { useEffect } from "react";
import api from "../../services/api";

function Main() {
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");
      console.log(response.data.docs);
    }

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default Main;
