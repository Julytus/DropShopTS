import React from 'react';
import Navigation from './header/Navigation';
import HeaderLanguage from './header/HeaderLanguage';
import BaseHeaderLogo from './header/BaseHeaderLogo';
import BaseHeaderTools from './header/BaseHeaderTools';

const Header: React.FC = () => {
  return (
    <div className="header-section section bg-white d-none d-xl-block">
      <div className="container">
        <div className="row row-cols-lg-3 align-items-center">

          {/* Header Language & Currency Start */}
          <HeaderLanguage />
          {/* Header Language & Currency End */}

          {/* Header Logo Start */}
          <BaseHeaderLogo />
          {/* Header Logo End */}

          {/* Header Tools Start */}
          <BaseHeaderTools />
          {/* Header Tools End */}

        </div>
      </div>

      {/* Site Menu Section Start */}
      <Navigation />
      {/* Site Menu Section End */}

    </div>
  );
};

export default Header; 