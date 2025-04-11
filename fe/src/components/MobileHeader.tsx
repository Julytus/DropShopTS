import React from 'react';
import BaseHeaderTools from './header/BaseHeaderTools';
import BaseHeaderLogo from './header/BaseHeaderLogo';

interface MobileHeaderProps {
  isSticky?: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ isSticky = false }) => {
  const headerClass = isSticky
    ? "mobile-header sticky-header bg-white section d-xl-none"
    : "mobile-header bg-white section d-xl-none";

  return (
    <div className={headerClass}>
      <div className="container">
        <div className="row align-items-center">

          {/* Header Logo Start */}
          <BaseHeaderLogo
            logoUrl="assets/images/logo/logo-2.webp"
            logoClassName=""
          />
          {/* Header Logo End */}

          {/* Header Tools Start */}
          <BaseHeaderTools
            breakpoints={{
              login: 'd-sm-block',
              search: 'd-sm-block',
              wishlist: 'd-sm-block',
              cart: ''
            }}
          />
          {/* Header Tools End */}

        </div>
      </div>
    </div>
  );
};

export default MobileHeader; 