import React from "react";
import { Constants } from "../../../api/Contants";

const Category = (props) => {
  let { catImage, catName } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src={Constants.IMAGE_URL + catImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{catName}</h5>

          <a href="#" className="btn btn-primary btn-block">
            Select
          </a>
        </div>
      </div>
    </div>
  );
};
export default Category;
