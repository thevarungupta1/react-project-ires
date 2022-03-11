import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import Product from "./Product";
import { useParams } from 'react-router-dom';

const Products = () => {
  const { id } = useParams()

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${Endpoints.PRODUCT_BY_CAT_ID + id}`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 classNameName="text-center">All Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Products;
