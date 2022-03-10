import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import Endpoints from '../../api/Endpoints';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${Endpoints.CATEGORY_URL}`)
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch(error => console.log(error))     
  }, []);

  return (
    <div className="container">
      <div className="row">
        {
          categories.map(item => <Category data={ item }  />)
        }
      </div>
    </div>
  );
};
export default Categories;
