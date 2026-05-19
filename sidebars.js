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
    {
  type: 'category',
  label: 'Audit',
  items: [
    'audit-overview',
    'bailsec',
    'mixbytes',
  ],
},
    'links-and-contacts',
  ],
};
module.exports = sidebars;
