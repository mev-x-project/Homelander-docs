---
sidebar_label: Integrations Overview
title: Integrations Overview
---

Homelander connects to a pool through one of three relationships, depending on who's setting it up and what they're allowed to do. This page maps each one to how it works and where the value goes; the pages under each cover the technical detail.

## The Three Paths

| | Pool Deployers | LP Providers | DEX & Protocol Teams |
|---|---|---|---|
| Action | Deploy a new pool with Homelander already attached | Add liquidity to a pool where Homelander is already attached | Attach Homelander to an existing protocol's pools |
| Access | Permissionless | Nothing to configure | Depends on mechanism — permissionless to role-gated |
| Start here | [For Pool Deployers](../for-pool-deployers) | [For LP Providers](../for-lp-providers) | [For DEXs & Protocols](../for-dexs-protocols) |

## How Profit Is Distributed

Every path settles through the same on-chain Profit Distributor (see [Architecture](../architecture-overview)) — the mechanism doesn't change based on how a pool got its Homelander plugin. What changes is how the split itself is configured:

- **Self-serve pool deployments** use a standard, protocol-wide distribution configuration set at the moment the pool is created. The recipient wallet can be reassigned later without redeploying anything.
- **DEX and protocol integrations** register a distribution configuration at onboarding, negotiated per partner and tied to their own protocol rather than a single pool.

In both cases, the swap itself settles atomically, inside the same transaction that created the profit, and is never delayed by the distribution process. Captured profit is never lost — if a distribution attempt fails, funds remain held by the Profit Distributor rather than reverting or disappearing, and go out on a later successful distribution.
