// @ts-check
const config = {
  title: 'MEV-X Homelander',
  tagline: 'Yield Maximization Layer for AMMs',
  url: 'https://mev-x-project.github.io',
  baseUrl: '/Homelander-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'MEV-X',
  projectName: 'Homelander-docs',
  trailingSlash: true,
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [require.resolve('./llms-txt-plugin.js')],
  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
        },
        blog: false,
        pages: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],
  themeConfig: ({
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
  navbar: {
  title: 'MEV-X Homelander',
  logo: {
    alt: 'MEV-X',
    src: 'img/logo.png',
  },
  items: [
  
    { href: 'https://www.mev-x.com/', label: 'Website', position: 'right' },

    { href: 'https://x.com/MEV_X_project', label: 'X', position: 'right' },

    { href: 'https://github.com/mev-x-project/Homelander-docs', label: 'GitHub', position: 'right' },
  ],
},
    prism: { additionalLanguages: ['solidity'] },
    docs: { sidebar: { hideable: false } },
  }),
};
module.exports = config;
