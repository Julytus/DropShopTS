import React from 'react';
import { useOffCanvas } from './OffCanvasContext';

/**
 * OffCanvasOverlay - Component hiển thị lớp phủ tối khi offcanvas được mở
 * Khi click vào overlay sẽ đóng offcanvas đang mở
 */
const OffCanvasOverlay: React.FC = () => {
  const { activeOffCanvas, closeOffCanvas } = useOffCanvas();
  const isActive = activeOffCanvas !== null;

  return (
    <div 
      className="offcanvas-overlay"
      onClick={closeOffCanvas}
      style={{
        display: isActive ? 'block' : 'none'
      }}
    ></div>
  );
};

export default OffCanvasOverlay; 