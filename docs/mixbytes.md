---
title: MixBytes Audit
---

# MixBytes Audit

MEV-X Homelander has undergone an independent security audit conducted by MixBytes, focused on the correctness and safety of its on-chain execution logic.

The audit reviewed the Homelander smart contract implemented in Solidity and designed to operate as a post-swap component within AMM architectures that support lifecycle hooks. The assessment combined manual code review, pair auditing of complex execution paths, proof-of-concept development and fuzzing tests using Foundry, and static analysis via Slither and Mythril, evaluating the contract's behavior in the context of post-swap execution.

## Audit Scope

The audit focused on:

- Post-swap hook invocation logic and callback correctness
- Failure propagation across external dependencies
- Configuration-induced denial of service scenarios
- User-driven disruption of arbitrage execution
- Access control assumptions and privilege boundaries
- Interaction with Uniswap v4 pool state after swap completion

## Results

No critical or high severity vulnerabilities were identified in the reviewed contract.

Three medium severity findings were identified and fully resolved prior to deployment. All reported low severity observations were either fixed or acknowledged, and none affect the correctness of swap execution or the safety of pool funds.

The audit confirms that:

- The contract does not introduce execution paths that allow unauthorized access to or extraction of pool funds;
- Internal MEV execution remains isolated from the user swap flow and does not affect swap correctness;
- Scenarios with no valid internal backrun are handled without reverting the user transaction;
- Administrative controls allow the component to be disabled or removed by protocol governance without impacting trading functionality.

## Reports

- **Full audit report:** https://github.com/mixbytes/audits_public/tree/master/MEV-X/Homelander
- **Technical audit summary:** https://medium.com/@MEV-X/homelander-security-audit-uniswap-v4-summary-and-outcomes-9352b029dce5
