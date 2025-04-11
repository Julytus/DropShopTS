export interface MenuItem {
  text: string;
  url: string;
  children?: MenuItem[];
  image?: string;
  className?: string;
  isTitle?: boolean;
}

export interface MenuGroup {
  title: string;
  items: MenuItem[];
  image?: string;
}

export interface MegaMenu {
  groups: MenuGroup[];
  banner?: {
    url: string;
    image: string;
    alt: string;
  };
}

export interface MainMenuItem {
  text: string;
  url?: string;
  megaMenu?: MegaMenu;
  children?: MenuItem[];
}

export const menuData: MainMenuItem[] = [
  {
    text: 'Home',
    url: '#',
    megaMenu: {
      groups: [
        {
          title: 'HOME GROUP',
          items: [
            { text: 'Arts Propelled', url: '/', image: 'assets/images/demo/menu/home-01.webp' },
            { text: 'Decor Thriving', url: '/', image: 'assets/images/demo/menu/home-02.webp' },
            { text: 'Savvy Delight', url: '/', image: 'assets/images/demo/menu/home-03.webp' },
            { text: 'Perfect Escapes', url: '/', image: 'assets/images/demo/menu/home-04.webp' },
          ]
        },
        {
          title: 'HOME GROUP',
          items: [
            { text: 'Kitchen Cozy', url: '/', image: 'assets/images/demo/menu/home-05.webp' },
            { text: 'Dreamy Designs', url: '/', image: 'assets/images/demo/menu/home-06.webp' },
            { text: 'Crispy Recipes', url: '/', image: 'assets/images/demo/menu/home-07.webp' },
            { text: 'Decoholic Chic', url: '/', image: 'assets/images/demo/menu/home-08.webp' },
          ]
        },
        {
          title: 'HOME GROUP',
          items: [
            { text: 'Reblended Dish', url: '/', image: 'assets/images/demo/menu/home-9.webp' },
            { text: 'Craftin House', url: '/', image: 'assets/images/demo/menu/home-10.webp' },
            { text: 'Craftswork Biz', url: '/', image: 'assets/images/demo/menu/home-11.webp' },
          ]
        }
      ],
      banner: {
        url: '#',
        image: 'assets/images/banner/menu-banner-1.webp',
        alt: 'Home Menu Banner'
      }
    }
  },
  {
    text: 'Shop',
    url: '#',
    megaMenu: {
      groups: [
        {
          title: 'SHOP PAGES',
          items: [
            { text: 'Shop', url: '/' },
          ]
        },
        {
          title: 'PRODUCT PAGES',
          items: [
            { text: 'PRODUCT', url: '/' },
          ]
        }
      ],
      banner: {
        url: '#',
        image: 'assets/images/banner/menu-banner-2.webp',
        alt: 'Shop Menu Banner'
      }
    }
  },
  {
    text: "Blog",
    url: '#',
    children: [
      { text: 'Portfolio', url: '/' },
      { text: 'Portfolio', url: '/' },
      { text: 'Portfolio', url: '/' },
    ]
  },
  {
    text: 'Project',
    url: '#',
    children: [
      { text: 'Portfolio', url: '/' },
      { text: 'Portfolio', url: '/' },
      { text: 'Portfolio', url: '/' },
    ]
  },
  {
    text: 'Pages',
    url: '#',
    children: [
      { text: 'About us', url: '/' },
      { text: 'About us 02', url: '/' },
      { text: 'Contact us', url: '/' },
      { text: 'Coming Soon', url: '/' },
      { text: 'Page 404', url: '/' },
    ]
  }
]; 