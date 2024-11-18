import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import "./header.styles.scss";

const Header: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <header className="header">
      <h1>My E-Commerce App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">🛒 Cart({cart.items.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
