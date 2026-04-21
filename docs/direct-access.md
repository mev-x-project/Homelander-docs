# Direct Contract Integration

Direct integration allows any smart contract to invoke the Homelander backrun trigger explicitly after completing its own swap logic. This path is suited for protocols with custom architectures, aggregators, or any scenario that requires conditional or parameterized MEV capture.

## How It Works

```
protocol swap completes
  → protocol contract calls homelander.triggerBackrun(...)
    → Homelander evaluates updated pool state
    → if profitable:     executes backrun, distributes profit
    → if not profitable: returns without side effects
```

The call must be wrapped in error handling so that a failed or unprofitable backrun does not revert the outer transaction:

```
after swap completes:
  try:
    homelander.triggerBackrun(poolId, amountIn, direction, recipient, configId)
  catch:
    continue            // swap is unaffected
```

Omitting the try/catch means a failed backrun propagates and reverts the user's transaction. This is the only integration requirement that is non-negotiable.

## triggerBackrun Parameters

```
poolId      — identifier of the pool that completed the swap
amountIn    — swap input amount, used to size the backrun
direction   — swap direction (token0 → token1, or token1 → token0)
recipient   — address that receives the protocol's share of backrun profit
configId    — distribution configuration registered for your protocol
```

## Configuration

The `configId` identifies the revenue distribution settings registered for your protocol at integration time. It determines how backrun profit is allocated between the exchange, its users, and MEV-X. A single config can apply across all pools, or separate configs can be registered per pool if different ratios are needed.

Contact the MEV-X team to register a configuration before deployment.
