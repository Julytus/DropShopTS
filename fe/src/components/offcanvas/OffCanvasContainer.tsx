import React from 'react';
import OffCanvasSearch from './OffCanvasSearch';
import OffCanvasWishlist from './OffCanvasWishlist';
import OffCanvasCart from './OffCanvasCart';
import OffCanvasOverlay from './OffCanvasOverlay';

/**
 * OffCanvasContainer - Container chứa tất cả các offcanvas components
 * Tập trung quản lý tất cả các offcanvas tại một nơi
 */
const OffCanvasContainer: React.FC = () => {
  return (
    <>
      {/* OffCanvas Search - Offcanvas tìm kiếm */}
      <OffCanvasSearch />
      
      {/* OffCanvas Wishlist - Offcanvas danh sách yêu thích */}
      <OffCanvasWishlist />
      
      {/* OffCanvas Cart - Offcanvas giỏ hàng */}
      <OffCanvasCart />

      {/* OffCanvas Overlay - Lớp phủ khi mở offcanvas */}
      <OffCanvasOverlay />
    </>
  );
};

export default OffCanvasContainer; 