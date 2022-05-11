import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import "./Header.css";
const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-left">
        <a href="/ "> Home </a>
        <a href="/search "> Search </a>
      </div>
      <div className="app-header-right">
        <a href="/gmail"> Gmail </a>
        <a href="/drive"> Drive </a>
        <AppsIcon />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
