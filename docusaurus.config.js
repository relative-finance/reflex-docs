// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reflex Docs',
  tagline: 'Trading terminal built on Hyperliquid',
  favicon: 'img/favicon.svg',
  url: 'https://docs.reflex.trade',
  baseUrl: '/',
  organizationName: 'relative-finance',
  projectName: 'reflex-docs',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Reflex Docs',
        logo: {
          alt: 'Reflex',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://app.reflex.trade',
            label: 'Launch App ↗',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Launch App',
            href: 'https://app.reflex.trade',
          },
          {
            label: 'Terms',
            to: '/legal/terms-and-conditions',
          },
          {
            label: 'Privacy',
            to: '/legal/privacy-policy',
          },
        ],
        copyright: `© ${new Date().getFullYear()} Reflex. Built on Hyperliquid.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
