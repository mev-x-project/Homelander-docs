/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'index',
    'architecture-overview',
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integration-overview',
        'for-pool-deployers',
        'for-lp-providers',
        {
          type: 'category',
          label: 'For DEXs & Protocols',
          link: { type: 'doc', id: 'for-dexs-protocols' },
          items: [
            'plugin-based',
            'universal-dex',
            'direct-access',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security-overview',
        'bailsec',
        'bailsec-differential',
        'mixbytes',
      ],
    },
    'links-and-contacts',
  ],
};
module.exports = sidebars;
