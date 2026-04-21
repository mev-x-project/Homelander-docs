# Plugin-Based Integration

Plugin-based integration is the primary path for protocols running on AMMs that support post-swap hooks. A plugin contract connects the pool's native callback to the Homelander execution layer without requiring any changes to core pool contracts.

Supported architectures: Algebra Integral, Uniswap v4, PancakeSwap Infinity.

## Algebra Integral

For protocols using Algebra Integral, Homelander is available as an approved plugin in the Algebra marketplace. No contract deployment is required.

Activate the plugin through the marketplace:

```
https://market.algebra.finance/plugin/mevx-backrun/
```

To set the plugin directly at the contract level:

```
pool.setPlugin(HOMELANDER_PLUGIN_ADDRESS)
```

That completes the integration. Homelander begins evaluating backrun opportunities on every swap through that pool automatically.

## Uniswap v4

For Uniswap v4, Homelander integrates as a hook deployed with `afterSwap` permission. The hook address is set in the pool key at initialization time.

The hook follows the standard Uniswap v4 `BaseHook` pattern with a single active permission:

```
hook permissions:
  afterSwap:            true
  all others:           false

afterSwap callback:
  receive:              sender, pool key, swap params, balance delta
  call:                 homelander.triggerBackrun(poolId, amount0, amount1, direction, recipient)
  return:               afterSwap selector
```

Pool initialization with the hook:

```
PoolKey {
  currency0:            token0,
  currency1:            token1,
  fee:                  fee,
  tickSpacing:          tickSpacing,
  hooks:                HOMELANDER_HOOK_ADDRESS
}
```

## PancakeSwap Infinity

PancakeSwap Infinity uses the same plugin architecture as Algebra Integral. The plugin is registered on the pool after deployment:

```
afterSwap callback:
  verify:               msg.sender == pool
  call:                 homelander.triggerBackrun(poolId, amount0, amount1, direction, recipient)
```

## Monitoring

Homelander emits a `BackrunExecuted` event on every successful capture. Filter by pool ID or config ID to track revenue from specific pools:

```
event BackrunExecuted:
  poolId                (indexed)
  recipient             (indexed)
  profit
  profitToken
  configId              (indexed)
```
