import React from 'react';
import { menuData } from '../../data/menuData';
import MenuRenderer from './MenuRenderer';

const Navigation: React.FC = () => {
  return (
    <div className="site-menu-section section">
      <div className="container">
        <MenuRenderer menuItems={menuData} />
      </div>
    </div>
  );
};

export default Navigation; 