import React from "react";
import { ReactComponent as Logo } from "../../resources/account_balance_wallet.svg";
import {Link} from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to="/">
        <div className="header-logo">
          Kharcha Book
          <span className="header-logo-icon">
            <Logo />
          </span>
        </div>
        </Link>
        
        <div className="header-button">
          <a
            href="https://github.com/imamarham10"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original colored"></i>Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
