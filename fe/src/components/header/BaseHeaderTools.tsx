import React from 'react';
import { useOffCanvas } from '../offcanvas/OffCanvasContext';

interface BaseHeaderToolsProps {
  showLogin?: boolean;
  showSearch?: boolean;
  showWishlist?: boolean;
  showCart?: boolean;
  className?: string;
  breakpoints?: {
    login?: string;
    search?: string;
    wishlist?: string;
    cart?: string;
  };
}

const BaseHeaderTools: React.FC<BaseHeaderToolsProps> = ({
  showLogin = true,
  showSearch = true,
  showWishlist = true,
  showCart = true,
  className = '',
  breakpoints = {
    login: '',
    search: '',
    wishlist: '',
    cart: ''
  }
}) => {
  const { openOffCanvas } = useOffCanvas();

  const getDisplayClass = (breakpoint: string = '') => {
    return breakpoint ? `d-none ${breakpoint}` : '';
  };

  return (
    <div className={`col-auto ${className}`}>
      <div className="header-tools justify-content-end">
        {showLogin && (
          <div className={`header-login ${getDisplayClass(breakpoints.login)}`}>
            <a href="/my-account"><i className="far fa-user"></i></a>
          </div>
        )}
        
        {showSearch && (
          <div className={`header-search ${getDisplayClass(breakpoints.search)}`}>
            <a onClick={() => openOffCanvas('search')} style={{ cursor: 'pointer' }}>
              <i className="fas fa-search"></i>
            </a>
          </div>
        )}
        
        {showWishlist && (
          <div className={`header-wishlist ${getDisplayClass(breakpoints.wishlist)}`}>
            <a onClick={() => openOffCanvas('wishlist')} style={{ cursor: 'pointer' }}>
              <span className="wishlist-count">3</span>
              <i className="far fa-heart"></i>
            </a>
          </div>
        )}
        
        {showCart && (
          <div className={`header-cart ${getDisplayClass(breakpoints.cart)}`}>
            <a onClick={() => openOffCanvas('cart')} style={{ cursor: 'pointer' }}>
              <span className="cart-count">3</span>
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BaseHeaderTools; 