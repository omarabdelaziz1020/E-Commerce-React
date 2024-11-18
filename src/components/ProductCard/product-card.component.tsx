import React from "react";
import { useAppDispatch } from "../../redux/store";
import { addItem } from "../../redux/cartSlice";
import "./product-card.styles.scss";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  description,
  thumbnail,
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name: title, price, quantity: 1 }));
  };

  return (
    <div className="card">
      <img src={thumbnail} alt={title} className="image" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <p className="price">${price.toFixed(2)}</p>
      <button onClick={handleAddToCart} className="addButton">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
