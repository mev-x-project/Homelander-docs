---
title: Bailsec Audit
---

# Bailsec Audit

MEV-X Homelander has undergone an independent security audit conducted by Bailsec, focused on the correctness and safety of its on-chain execution logic.

The audit reviewed the Homelander smart contract implemented in Solidity and designed to operate as a post-swap component within AMM architectures that support lifecycle hooks. The assessment was performed through manual code review and evaluated the contract's behavior in the context of post-swap execution.

## Audit Scope

The audit focused on:

- Post-swap execution flow and hook invocation logic
- Internal MEV-related execution paths and control flow
- Access control assumptions and privilege boundaries
- Failure handling and revert behavior
- Interaction with AMM state after swap completion

## Results

No security vulnerabilities were identified in the reviewed contract.

All reported observations were non-exploitable and related to general design assumptions or operational considerations rather than to flaws in execution logic.

The audit confirms that:

- The contract does not introduce execution paths that allow unauthorized access to or extraction of pool funds;
- Internal MEV execution remains isolated from the user swap flow and does not affect swap correctness;
- Scenarios with no valid internal backrun are handled without reverting the user transaction;
- Administrative controls allow the component to be disabled or removed by protocol governance without impacting trading functionality.

## Reports

- **Full audit report:** https://github.com/bailsec/BailSec/blob/main/Bailsec%20-%20MEV-X%20-%20Plugin%20-%20Final%20Report.pdf
- **Technical audit summary:** https://medium.com/@MEV-X/homelander-security-audit-summary-and-outcomes-a1847828f730
