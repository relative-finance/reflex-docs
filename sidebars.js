/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'overview/what-is-reflex',
        'overview/key-features',
        'overview/supported-assets',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/prerequisites',
        'getting-started/joining-the-waitlist',
        'getting-started/connecting-your-wallet',
        'getting-started/onboarding-flow',
        'getting-started/approving-the-builder-fee',
      ],
    },
    {
      type: 'category',
      label: 'The Terminal',
      items: [
        'terminal/interface-overview',
        'terminal/terminal-modes',
        'terminal/customizing-your-layout',
      ],
    },
    {
      type: 'category',
      label: 'Trading',
      items: [
        'trading/order-types',
        'trading/leverage-and-margin',
        'trading/trading-presets',
        'trading/one-click-news-trading',
        'trading/position-management',
        'trading/twap-orders',
        'trading/scale-orders',
      ],
    },
    {
      type: 'category',
      label: 'News & Intelligence',
      items: [
        'news-and-intelligence/overview',
        'news-and-intelligence/feed-sources',
        'news-and-intelligence/ai-enrichment',
        'news-and-intelligence/polymarket-signals',
        'news-and-intelligence/events-calendar',
        'news-and-intelligence/managing-subscriptions',
      ],
    },
    {
      type: 'category',
      label: 'Notifications & Alerts',
      items: [
        'notifications/alert-types',
        'notifications/notification-channels',
        'notifications/setting-up-alerts',
      ],
    },
    {
      type: 'category',
      label: 'Telegram Bot',
      items: [
        'telegram-bot/overview',
        'telegram-bot/linking-your-account',
        'telegram-bot/commands-reference',
        'telegram-bot/one-click-trading',
        'telegram-bot/security-and-key-management',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/trading-presets',
        'settings/socials-and-rss-feed',
        'settings/hot-keys',
        'settings/layout',
      ],
    },
    {
      type: 'category',
      label: 'Bridging & Deposits',
      items: [
        'bridging/bridging-funds',
        'bridging/depositing-and-withdrawing',
      ],
    },
    {
      type: 'category',
      label: 'Fees',
      items: [
        'fees/fee-structure',
        'fees/hyperliquid-trading-fees',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/wallet-security',
        'security/api-wallet-and-key-management',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: ['faq/faq'],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/terms-and-conditions',
        'legal/privacy-policy',
      ],
    },
  ],
};

module.exports = sidebars;
