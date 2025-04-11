import React from 'react';

interface BaseHeaderLogoProps {
  logoUrl?: string;
  logoAlt?: string;
  className?: string;
  logoClassName?: string;
  linkUrl?: string;
}

const BaseHeaderLogo: React.FC<BaseHeaderLogoProps> = ({
  logoUrl = 'assets/images/logo/logo.webp',
  logoAlt = 'Learts Logo',
  className = '',
  logoClassName = 'justify-content-center',
  linkUrl = '/'
}) => {
  return (
    <div className={`col ${className}`}>
      <div className={`header-logo ${logoClassName}`}>
        <a href={linkUrl}>
          <img src={logoUrl} alt={logoAlt} />
        </a>
      </div>
    </div>
  );
};

export default BaseHeaderLogo; 