# Integration Overview

Homelander integrates at the protocol level as a post-swap component, executing backrun MEV atomically within the same transaction as the originating swap. Core pool logic is not modified, and the integration is transparent to users.

Three integration paths are available depending on the protocol's AMM architecture and deployment context.

## Plugin-Based Integration

For AMMs with native hook or plugin support — Algebra Integral, Uniswap v4, and PancakeSwap Infinity — integration is handled through a lightweight plugin contract that attaches to the pool's post-swap callback. Once the swap completes, the plugin forwards the updated pool state to the Homelander execution layer, which evaluates and executes the backrun within the same transaction.

For protocols running on Algebra Integral, Homelander is available as an approved plugin in the Algebra marketplace. Installation requires a single on-chain action with no contract deployment.

[→ Plugin-Based Integration](../plugin-based)

## Universal DEX Integration

For DEX protocols that do not expose native hooks or plugins, the Universal integration path uses a proxy contract that wraps the existing router and adds post-swap MEV capture. Swap routing and Homelander execution occur within a single transaction, and no modifications to the underlying pool contracts are required.

[→ Universal DEX Integration](../universal-dex)

## Direct Contract Integration

For protocols with custom architectures or non-standard post-swap flows, Homelander exposes a direct integration interface that allows the backrun trigger to be invoked from any contract context. This path provides full control over execution timing and is suitable for conditional MEV capture or advanced integration scenarios.

[→ Direct Contract Integration](../direct-access)

## Comparison

| Method | AMM Changes Required | Complexity | Best Fit |
|---|---|---|---|
| Plugin-Based | None | Low | Algebra Integral, Uniswap v4, PancakeSwap Infinity |
| Universal DEX | None | Low | Any DEX without native hook support |
| Direct Contract | Custom call | Medium | Custom protocols, conditional execution |

All three methods provide the same execution guarantees: backrun executes atomically inside the swap transaction, no step is exposed to the public mempool, and the user's swap output is unaffected regardless of whether a profitable opportunity is found.

## Getting Started

Homelander integration contracts and configuration are provided directly to partner protocols. If you are interested in integrating, reach out to the MEV-X team to receive the integration package and get your distribution configuration registered.

Contact: [t.me/ex_seoeva](https://t.me/ex_seoeva)
