// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  tagline: 'ourapp studio',
  favicon: 'img/favicon.ico',

  url: 'https://ourapp.studio',
  baseUrl: '/docs/',

  organizationName: 'facebook',
  projectName: 'ourapp studio',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          path: './roadmap', // Rename the blog path to roadmap if desired
          routeBasePath: 'roadmap', // This changes the route to /roadmap
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'ourapp logo',
        src: 'img/logo.svg',
        href: 'https://ourapp.studio',
        target: "_self"
      },
      items: [
        { 
          to: '/', 
          label: 'Documentation', 
          position: 'left', 
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} ourapp.studio`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
