import React from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const { name } = useParams();

  return (
    <>
      <h1>Soy un producto pa! {name}</h1>
    </>
  );
};

export default Product;
