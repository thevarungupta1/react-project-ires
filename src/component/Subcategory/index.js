import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import { useParams } from 'react-router-dom';

const SubCategory = () => {
  const { id } = useParams();

  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${Endpoints.SUBCATEGORY_URL + id}`)
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
