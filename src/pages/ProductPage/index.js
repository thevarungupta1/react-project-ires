import React from "react";
import Navbar from "../../component/Navbar";
import SubCategory from "../../component/Subcategory";
import Products from "../../component/Products";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SubCategory />
          </div>
          <div className="col-lg-9">
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
