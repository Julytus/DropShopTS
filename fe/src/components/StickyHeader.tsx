import React from 'react';
import MenuRenderer from './header/MenuRenderer';
import { menuData } from '../data/menuData';
import BaseHeaderLogo from './header/BaseHeaderLogo';
import BaseHeaderTools from './header/BaseHeaderTools';
const StickyHeader: React.FC = () => {
  return (
    <div className="sticky-header header-menu-center section bg-white d-none d-xl-block">
      <div className="container">
        <div className="row align-items-center">

          {/* Header Logo Start */}
          <BaseHeaderLogo
            logoUrl="assets/images/logo/logo-2.webp"
            logoClassName=""
          />
          {/* Header Logo End */}

          {/* Search Start */}
          <MenuRenderer menuItems={menuData} className='col d-none d-xl-block' />
          {/* Search End */}

          {/* Header Tools Start */}
          <BaseHeaderTools
            breakpoints={{
              login: 'd-lg-block',
              search: 'd-sm-block d-lg-block',
              wishlist: 'd-sm-block d-lg-block',
              cart: 'd-sm-block'
            }}
          />
          {/* Header Tools End */}

        </div>
      </div>
    </div>
  );
};

export default StickyHeader; 