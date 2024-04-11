// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {Options} from '@docusaurus/preset-classic';
import {themes} from 'prism-react-renderer';
import {irCode} from './src/themes/ir-code';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import sidebars from './sidebars';


const lightCodeTheme = irCode.light
const darkCodeTheme = irCode.dark;

const navbarItems = Object.keys(sidebars).map((sidebarId):{
  type:string,
  sidebarId:string,
  position:'left' | 'right',
  label: string,
} => {
  return {
    type: 'docSidebar',
    sidebarId,
    position: 'left',
    label: sidebarId.replace(/-/g, ' ').charAt(0).toUpperCase() + sidebarId.slice(1),
  };
});




const config:Config = {
  title: 'Open Source at Infinite Red',
  tagline: 'Tools to supercharge your React Native development!',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://docs.infinite.red',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'infinitered', // Usually your GitHub org/user name.
  projectName: 'ir-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    require.resolve('./plugins/support-symlinks'),
    require.resolve('./plugins/homepage-items-plugin'),
  ],

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-H431N07LX7',
          anonymizeIP: true,
        },
      }) satisfies Options,
    ] ,
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/irVertical.jpg',
      navbar: {
        title: 'Open Source @ Infinite Red',
        logo: {
          alt: 'Infinte Red Logo',
          src: 'img/logo.svg',
        },
        style: 'dark',
        items: [
          ...navbarItems,
          {
            href: 'https://github.com/infinitered/ir-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://community.infinite.red',
              },
              {
                label: 'Medium',
                href: 'https://shift.infinite.red',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/infinite_red',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Organization',
                href: 'https://github.com/infinitered/',
              },
              {
                label: 'Infinite Red',
                href: 'https://www.infinite.red',
              },
              {
                label: 'Privacy Policy',
                  href: 'https://www.infinite.red/privacy-policy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Infinite Red, Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: [
          'bash',
          'json',
          'diff',
          'ruby',
          'gradle',
          'java',
          'yaml',
          'kotlin',
          'groovy',
          'ejs',
          'markup-templating'
        ],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          {
            className: 'code-block-highlight-line',
            line: 'highlight-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-success-line',
            line: 'success-line',
            block: {start: 'success-start', end: 'success-end'},
          },{
            className: 'code-block-warning-line',
            line: 'warning-line',
            block: {start: 'warning-start', end: 'warning-end'},
          },{
            className: 'code-block-error-line',
            line: 'error-line',
            block: {start: 'error-start', end: 'error-end'},
          },
        ],
      },
    }) satisfies Preset.ThemeConfig,
};

module.exports = config;
