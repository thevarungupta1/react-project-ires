import React from "react";
import { Link } from "react-router-dom";

import { Constants } from "../../../api/Contants";
// import { useHistory } from 'react-router-dom';

const Category = (props) => {
  let { catId, catImage, catName } = props.data;

  // let history = useHistory()

  // function onClickHandler(){
  //   history.push(`products/1`)
  // }

  return (
    <div className="col-sm-3">
      <Link to={`/products/${catId}`}>
        <div className="card">
          <img
            src={Constants.IMAGE_URL + catImage}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{catName}</h5>

            <button className="btn btn-primary btn-block">Buy now</button>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Category;
