---
sidebar_label: For LP Providers
title: For LP Providers
---

There's no integration step here, because there's nothing for an LP to integrate. Liquidity providers interact with a Homelander-enabled pool exactly like they would any other pool — same deposit flow, same tooling, no approvals granted to any Homelander contract.

## What Changes For You

Whether a pool's captured yield reaches its LPs depends entirely on a choice its deployer made, not on anything you do. If the deployer directed part of their share back to LPs, it shows up as elevated yield on that pool, distributed the same way trading fees already are. If they didn't, the pool behaves exactly like a pool without Homelander at all, from an LP's perspective — nothing about the mechanics of providing liquidity is different either way.

There's no separate claim button and no LP-facing contract to interact with. Whatever reaches LPs arrives through the pool's existing fee-accrual mechanics, because that's precisely where it's directed.

See [Where the Value Goes](../#where-the-value-goes) in the Overview for the underlying mechanism and the flywheel diagram behind why a deployer might choose to share in the first place.
