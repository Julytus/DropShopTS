import React from 'react';

/**
 * Props cho component MiniCartItem
 * @property {string} image - Đường dẫn ảnh sản phẩm
 * @property {string} title - Tên sản phẩm
 * @property {number} price - Giá sản phẩm
 * @property {number} quantity - Số lượng sản phẩm
 * @property {boolean} isWishlist - Đánh dấu có phải item wishlist hay không
 */
interface MiniCartItemProps {
  image: string;
  title: string;
  price: number;
  quantity: number;
  isWishlist?: boolean;
}

/**
 * MiniCartItem - Component hiển thị một sản phẩm trong giỏ hàng mini hoặc wishlist
 * Được sử dụng trong OffCanvasCart và OffCanvasWishlist
 */
const MiniCartItem: React.FC<MiniCartItemProps> = ({ image, title, price, quantity, isWishlist = false }) => {
  return (
    <li>
      <a href="product-details.html" className="image">
        <img src={image} alt="Cart product Image" />
      </a>
      <div className="content">
        <a href="product-details.html" className="title">{title}</a>
        <span className="quantity-price">
          {quantity} x <span className="amount">${price.toFixed(2)}</span>
        </span>
        <a href="#" className="remove">×</a>
      </div>
    </li>
  );
};

export default MiniCartItem; 