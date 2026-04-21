# Universal DEX Integration

The Universal integration path enables MEV capture for DEX protocols that do not expose native hook or plugin interfaces. A proxy contract wraps the existing router: the proxy executes the swap through the underlying DEX and triggers the Homelander backrun within the same transaction.

No modifications to pool contracts are required.

## How It Works

```
user call
  → HomelanderSwapProxy
    → execute swap via underlying router
    → call homelander.triggerBackrun(poolId, amountIn, direction, recipient, configId)
      → backrun executes atomically if opportunity exists
    → return swap output to user
```

If no profitable opportunity is found, the backrun step is skipped and the swap completes normally. The user's output is unaffected in either case.

## Integration Steps

Deploy `HomelanderSwapProxy` with the target router address — one proxy per router. Then route swaps through the proxy instead of calling the router directly, passing `poolId` and `configId` alongside the standard swap parameters.

The proxy does not retain token balances between transactions. Any leftover amounts are returned to the caller.

## Monitoring

```
event BackrunExecuted:
  poolId                (indexed)
  recipient             (indexed)
  profit
  profitToken
  configId              (indexed)
```
