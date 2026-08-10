---
sidebar_label: For DEXs & Protocols
title: For DEXs & Protocols
---

Attaching Homelander to an existing protocol's pools takes one of three forms, depending on what your AMM architecture already exposes. All three settle through the same on-chain core (see [Architecture](../architecture-overview)) and provide the same execution guarantees — atomic, no mempool exposure, no effect on the user's swap output regardless of whether a profitable opportunity exists. What differs is the entry point, and who's allowed to use it.

| Path | Requires | Access | Best fit |
|---|---|---|---|
| Plugin-Based | A native hook/plugin surface | Depends on mechanism | AMMs with lifecycle hooks already built in (Algebra Integral, PancakeSwap Infinity) |
| Universal DEX | A router to wrap | Permissionless | DEXs without a native hook surface |
| Direct Contract | A calling contract that constructs its own arbitrage route | Permissionless | Custom protocols, aggregators, advanced or conditional execution |

→ [Plugin-Based Integration](../plugin-based)
→ [Universal DEX Integration](../universal-dex)
→ [Direct Contract Integration](../direct-access)

Uniswap v4 isn't listed above — a protocol team integrating on Uniswap v4 uses the same permissionless factory covered under For Pool Deployers. That path doesn't distinguish between an individual deployer and a protocol team; it's open to both the same way.

## Getting Started

Partner-specific configuration — distribution setup, onboarding for a plugin marketplace listing where relevant — is handled directly with the MEV-X team. Reach out with which of the three paths fits your architecture, and to get your distribution configuration registered.

Contact: [t.me/ex_seoeva](https://t.me/ex_seoeva)
