import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";

const SubCategory = () => {
  const catId = 3;

  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${Endpoints.SUBCATEGORY_URL + catId}`)
      .then((response) => {
        setSubCategories(response.data.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <h2>Sub Categories</h2>
      <ul className="list-group">
        {
            subCategories.map(item => <li className="list-group-item">{ item.subName }</li>)
        }
      </ul>
    </div>
  );
};
export default SubCategory;
