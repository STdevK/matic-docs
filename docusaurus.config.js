const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Polygon Wiki",
  tagline: "The official documentation for all Polygon products.",
  url: "https://wiki.polygon.technology",
  baseUrl: "/",
  favicon: "img/polygon/polygon-logo.svg",
  organizationName: "Polygon Technology",
  projectName: "matic-docs",
  customFields: {
    description: "Build your next blockchain app on Polygon.",
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'de', 'es', 'fr', 'it', 'ja', 'pt', 'br', 'hi', 'id', 'ru', 'th', 'tl'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
        calendar: 'gregory',
        path: 'ko',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
        htmlLang: 'de-DE',
        calendar: 'gregory',
        path: 'de',
        },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
        calendar: 'gregory',
        path: 'es',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
        calendar: 'gregory',
        path: 'fr',
      },
      it: {
        label: 'Italiano',
        direction: 'ltr',
        htmlLang: 'it-IT',
        calendar: 'gregory',
        path: 'it',
      },
      ja: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        calendar: 'gregory',
        path: 'ja',
      },
      pt: {
        label: 'Português',
        direction: 'ltr',
        htmlLang: 'pt-PT',
        calendar: 'gregory',
        path: 'pt',
      },
      br: {
        label: 'Português (Brasil)',
        direction: 'ltr',
        htmlLang: 'pt-BR',
        calendar: 'gregory',
        path: 'br',
      },
      hi: {
        label: 'हिंदी',
        direction: 'ltr',
        htmlLang: 'hi-IN',
        calendar: 'gregory',
        path: 'hi',
      },
      id: {
        label: 'Bahasa Indonesia',
        direction: 'ltr',
        htmlLang: 'id-ID',
        calendar: 'gregory',
        path: 'id',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
        calendar: 'gregory',
        path: 'ru',
      },
      th: {
        label: 'ภาษาไทย',
        direction: 'ltr',
        htmlLang: 'th-TH',
        calendar: 'gregory',
        path: 'th',
      },
      tl: {
        label: 'Tagalog',
        direction: 'ltr',
        htmlLang: 'tl-PH',
        calendar: 'gregory',
        path: 'tl',
      },
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/',
            from: ['/en/latest', '/en/'],
          },
          {
            to: '/docs/contribute/orientation',
            from: '/docs/pos/orientation',
          },
          {
            to: '/docs/contribute/community-maintainers',
            from: '/docs/pos/community-maintainers',
          },
          {
            to: '/docs/contribute/bug-bountry-program',
            from: '/docs/pos/bug-bountry-programs',
          },
          {
            to: '/docs/develop/meta-transactions/meta-transactions',
            from: '/docs/develop/metatransactions/metatransactions-biconomy',
          },
          {
            to: '/docs/develop/meta-transactions/meta-transactions',
            from: '/docs/develop/metatransactions/metatransactions-gsn',
          },
          {
            to: '/docs/develop/meta-transactions/network-agnostics',
            from: '/docs/develop/metatransactions/network-agnostics',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/cexs-wallets',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/fiat-on-ramp',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/fiat-ramps'
          },
          {
            to: '/docs/develop/network-details/full-node-binaries',
            from: '/docs/integrate/full-node-binaries',
          },
          {
            to: '/docs/develop/network-details/full-node-deployment',
            from: '/docs/integrate/full-node-deployment',
          },
          {
            to: '/docs/develop/wallets/metamask',
            from:'/docs/develop/metamask/overview',
          },
          {
            to: '/docs/develop/wallets/getting-started',
            from: '/docs/develop/cexs-wallets/cexs',
          },
          {
            to: '/docs/develop/wallets/polygon-web-wallet/web-wallet-v3-guide',
            from: '/docs/develop/wallets/polygon-web-wallet/web-wallet-v2-guide',
          },
          {
            to: '/docs/faq/general-faq/',
            from: '/docs/category/faq/'
          },
          {
            to:'/docs/maintain/validate/kb/known-issues',
            from:'/docs/maintain/validate/faq/known-issues'
          },
          {
            to:'/docs/maintain/validate/kb/how-to',
            from:'/docs/maintain/validate/faq/how-to'
          },
          {
            to:'/docs/faq/validator-faq',
            from:'/docs/maintain/validate/faq/validator-faq'
          },
          {
            to:'/docs/maintain/validator/responsibilities',
            from:'/docs/maintain/validate/validator-responsibilities'
          }
        ],
        createRedirects: function (existingPath) {
          if (existingPath.startsWith('/docs/validate/')) {
            return [existingPath.replace('/docs/maintain/')
          ];
          }
        },
      },
    ],
  ],
  onBrokenLinks: 'log',
  themeConfig: {
    metadata: [{name: 'description', content: 'Welcome to Polygon Wiki, the official documentation for Polygon and its products. Explore and learn about Polygon and its wide range of Ethereum-scaling solutions.'}],
    footer: {
      style: 'dark',
      links: [
        {
          title: "Scaling Solutions",
          items: [
          {
              label: "Polygon PoS",
              href: "https://polygon.technology/solutions/polygon-pos/"
          },
          {
            label: "Polygon Edge",
            href: "https://polygon.technology/solutions/polygon-edge/"
          },
          {
              label: "Polygon Supernets",
              href: "https://polygon.technology/polygon-edge-supernets/"
          },
          {
            label: "Polygon Hermez",
            href: "https://polygon.technology/solutions/polygon-hermez/"
          },
          {
            label: "Polygon Avail",
            href: "https://polygon.technology/solutions/polygon-avail/"
          },
          {
            label: "Polygon Zero",
            href: "https://polygon.technology/solutions/polygon-zero/"
          },
          {
            label: "Polygon Miden",
            href: "https://polygon.technology/solutions/polygon-miden/"
          },
       ]
       },
        {
          title: "Developers",
          items: [
          {
              label: "Get Started",
              href: "https://wiki.polygon.technology/docs/develop/getting-started/"
          },
          {
              label: "Advocate Program",
              href: "https://polygon.technology/advocate-program/"
          },
          {
            label: "Polygon Funds",
            href: "https://polygon.technology/funds/"
          },
          {
            label: "Polygon Studios",
            href: "https://polygonstudios.com/"
          },
          {
              label: "Bug Bounty",
              href: "https://immunefi.com/bounty/polygon/"
          },
          {
            label: "dApps",
            href: "https://polygon.technology/ecosystem/"
          },
          {
            label: "Polygon Lightpaper",
            href: "https://polygon.technology/lightpaper-polygon.pdf"
          },
          {
            label: "Matic Whitepaper",
            href: "https://github.com/maticnetwork/whitepaper/"
          },
      ]
      },
     {
      title: "Company",
      items: [
      {
        label: "About Us",
        href: "https://polygon.technology/about/"
      },
      {
        label: "Contact",
        href: "https://polygon.technology/contact-us/"
      },
      {
        label: "Transparency Sheet",
        href: "https://polygon.technology/transparency-sheet/"
    },
      {
          label: "Blogs",
          href: "https://blog.polygon.technology/"
      },
      {
        label: "Brand Kit",
        href: "https://www.notion.so/polygontechnology/Brand-Resources-2cd18ae436584e98a6c5aae56db73058/"
      },
      {
        label: "Media Kit",
        href: "https://www.notion.so/polygontechnology/Polygon-Brand-Resources-2cd18ae436584e98a6c5aae56db73058/"
      },
      {
          label: "Careers",
          href: "https://polygon.technology/careers/"
      },
      {
        label: "Ecosystem Careers",
        href: "https://ecosystemjobs.polygon.technology/jobs/"
      },
    ]
    },
    ],
    logo: {
      alt: 'Polygon Logo',
      src: 'img/polygon/polygon-logo.svg',
      href: 'https://polygon.technology/',
    },
    copyright: `Copyright © ${new Date().getFullYear()} Polygon Technology`,
    },
    image: 'img/polygon-wiki.png',
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ['solidity']
    },
    algolia: {
      indexName: "matic_developer",
      appId: '16JCDEHCCN',
      apiKey: "757c19b23127e9c6959da7f13b71cfab",
      contextualSearch: true,
      algoliaOptions: {},
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Polygon logo",
        src: "/img/polygon/polygon-logo.webp",
        srcDark: "/img/polygon/polygon-logo.webp",
        // width: 100,
        // height: 500,
        // href: 'https://wiki.polygon.technology/', // default to siteConfig.baseUrl
        target: "_self", // by default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one)
      },
      items: [
        {
          label: "dApps",
          position: "right",
          items: [
                  {
                    href: 'https://wallet.polygon.technology',
                    label: 'PoS Wallet',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://wallet.polygon.technology/polygon/bridge/deposit',
                    label: 'PoS Bridge',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://staking.polygon.technology/',
                    label: 'PoS Staking',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://polygonscan.com/',
                    label: 'PoS Explorer',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://wallet.hermez.io/login',
                    label: 'Hermez Wallet',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://explorer.hermez.io/',
                    label: 'Hermez Explorer',
                    target: '_blank',
                    rel: null,
                  },
                ],
        },
        {
          href: 'https://polygon.technology/developers/',
          label: "Developer Resources",
          position: "right",
        },
        {
          label: "Community",
          position: "right",
          items: [
                  {
                    to: "docs/contribute/orientation/",
                    label: "Contribute to Wiki",
                    target: '_blank',
                    rel: null,
                    activeBasePath: "docs/contribute",
                  },
                  {
                    href: 'https://discord.com/invite/0xPolygon',
                    label: 'Discord',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://forum.polygon.technology/',
                    label: 'Forum',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://www.reddit.com/r/0xPolygon/',
                    label: 'Reddit',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://twitter.com/0xPolygon',
                    label: 'Twitter',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://t.me/polygonofficial',
                    label: 'Telegram',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    label: "Get Updates",
                    href: 'https://polygon.technology/notifications/',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    href: 'https://polygon.technology/community/',
                    label: 'View all communities',
                    target: '_blank',
                    rel: null,
                  },
                ],
        },
        {
          label: "Support",
          position: "right",
          items: [
            {
              href: 'https://support.polygon.technology/support/home',
              label: 'End-user support',
              target: '_blank',
              rel: null,
            }
          ]
        },
        {
          label: "FAQs",
          position: "right",
          items: [
                  {
                    to: 'docs/faq/general-faq/',
                    label: 'PoS FAQ',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    to: 'docs/avail/faq',
                    label: 'Avail FAQ',
                    target: '_blank',
                    rel: null,
                  },
                  {
                    to: 'docs/edge/faq/validators/',
                    label: 'Edge FAQ',
                    target: '_blank',
                    rel: null,
                  }
                ],
        },
        {
          href: "https://github.com/maticnetwork",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/maticnetwork/matic-docs/tree/master/",
          path: "docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [[katex, {strict: false, throwOnError: true,globalGroup: true}]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-LLNECLTBDN',
          anonymizeIP: true,
        },
      },
      // "@docuaurus/plugin-content-pages",
      // {
      //   path: "src/pages",
      //   routeBasePath: "",
      //   include: ["**/*.{js,jsx}"],
      // },
      // "@docusaurus/plugin-google-analytics",
      // "@docusaurus/plugin-sitemap",
      // {
      //   cacheTime: 600 * 1000, // 600 sec - cache purge period
      //   changefreq: "weekly",
      //   priority: 0.5,
      // },
    ],
  ],
};
