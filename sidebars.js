/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'index',
    'executive-summary',
    'architecture-overview',
    {
      type: 'category',
      label: 'Integration for Exchanges',
      items: [
        'integration-overview',
        'plugin-based',
        'universal-dex',
        'direct-access',
      ],
    },
    'profit-distribution-model',
    'security-guarantees',
    'audit',
    'links-and-contacts',
  ],
};
module.exports = sidebars;
