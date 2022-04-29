import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./topfold.css";
import { searchExpense } from "../../redux/action/expenses";
const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fi fi-rr-search"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
              <i className="fi-rr-add"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to = "/">
          <div className="back-button">
            <i className="fi fi-br-arrow-left"></i>
            <span>Back</span>
          </div>
          </Link>
          
          <div className="cancel-button">
            <i className="fi fi-sr-cross-circle"></i>
            <span>Cancel</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopFold;
