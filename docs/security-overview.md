---
sidebar_label: Security Overview
title: Security Overview
---

## Guarantees

Homelander operates strictly as a consumer of post-swap state — whichever entry point it's attached through (hook, plugin, proxy, or direct call — see [Deployment Models](../architecture-overview#deployment-models)), it never performs privileged actions against the pool itself. Its safety profile is bounded by that entry point's own guarantees: if the underlying AMM framework's hook or callback system is secure, Homelander's integration doesn't introduce a new attack surface on top of it.

- **Isolated from the user's swap.** If no profitable opportunity exists, execution reverts or no-ops without touching the user's swap logic. The user receives the expected swap output regardless of whether Homelander captured anything.
- **No mempool exposure.** Profitability checks, execution, and settlement all happen on-chain, inside the same transaction boundary. Nothing in the process is broadcast or observable before it executes.
- **Scoped access.** Homelander's contracts accept callbacks only from authorized pools and enforce token and route constraints at execution time — they don't accept arbitrary instructions from arbitrary callers.
- **No new trust assumptions.** Homelander doesn't modify the AMM's own trust model or introduce entry points beyond the ones documented under [Deployment Models](../architecture-overview#deployment-models).

One caveat, for completeness: some plugin implementations enforce a minimum gas-remaining check before running their post-swap logic, configurable by the plugin's owner. By default this check always passes — but if an owner raises it, a swap without enough gas headroom left could fail because of that check specifically. This is an owner-configured parameter, not a fixed property of the system, and worth knowing about rather than discovering by surprise.

## Audits

Homelander has undergone three independent security audits, across two firms, covering both its Uniswap v4 and Algebra Integral implementations. No critical or high severity findings survived any of the three; every medium finding was resolved before deployment.

| Auditor | Scope | Result |
|---|---|---|
| MixBytes | Uniswap v4 hook | 0 critical/high, 3 medium (resolved) |
| Bailsec | Algebra plugin | 0 vulnerabilities found |
| Bailsec (differential) | Algebra plugin, post-update changes | 0 critical/high, 2 medium (resolved) |

→ [MixBytes Audit](../mixbytes)
→ [Bailsec Audit](../bailsec)
→ [Bailsec Differential Audit](../bailsec-differential)
