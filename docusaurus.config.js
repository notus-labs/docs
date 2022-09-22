// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Notus Docs",
  tagline:
    "Notus is an open source project implementing a new, high-performance, permissionless blockchain.",
  url: "http://docs.notus.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "notus-labs",
  projectName: "notus-docs",
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["tr", "en"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/notus-labs/docs/tree/main/",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: "Notus Logo",
        src: "img/brand/logo/white.svg",
        srcDark: "img/brand/logo/dark.svg",
      },
      items: [
        {
          type: "doc",
          docId: "Overview/intro",
          position: "left",
          label: "Overview",
        },
        {
          type: "doc",
          docId: "Node/intro",
          position: "left",
          label: "Node",
        },
        {
          type: "doc",
          docId: "Developer/intro",
          position: "left",
          label: "Developer",
        },
        {
          type: "doc",
          docId: "Api/REST/intro",
          position: "left",
          label: "API",
        },
        {
          type: "doc",
          docId: "Migration/index",
          position: "left",
          label: "Migration",
        },
        {
          type: "doc",
          docId: "FAQ/index",
          position: "left",
          label: "FAQ",
        },
        {
          href: "https://github.com/notus-labs",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    /* algolia: {
        appId: 'LRR0WHMG8Y',
        apiKey: '80436f7efbeccb8701d266197aaafad8',
        indexName: '/',
      },*/
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/notus-labs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Notus Labs`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["csharp", "typescript"],
    },
  },
};

module.exports = config;
