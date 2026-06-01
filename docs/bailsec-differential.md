---
title: Bailsec Differential Audit
---

# Bailsec Differential Audit

MEV-X Homelander has undergone a second independent security audit conducted by Bailsec, focused on the correctness and safety of its on-chain execution logic.

The audit was structured as a differential review, covering the changes introduced in the updated Homelander Algebra plugin relative to the previously audited version. The assessment was performed through manual code review and evaluated the updated contract's behavior in the context of pre-swap fee control, post-swap execution, and plugin fee settlement.

## Audit Scope

The audit focused on:

- beforeSwap hook logic for dynamic fee override and plugin fee handling
- afterSwap execution flow and arbitrage trigger control
- Plugin fee settlement via handlePluginFee
- Access control assumptions and privilege boundaries
- Failure handling and revert behavior
- Interaction with Algebra pool state across all three hook entry points

## Results

No critical or high severity vulnerabilities were identified in the reviewed contract.

Two medium severity findings were identified and fully resolved prior to deployment. All low severity and informational observations were either fixed or acknowledged, and none affect the correctness of swap execution or the safety of pool funds.

The audit confirms that:

- The contract does not introduce execution paths that allow unauthorized access to or extraction of pool funds;
- Internal MEV execution remains isolated from the user swap flow and does not affect swap correctness;
- Scenarios with no valid internal backrun are handled without reverting the user transaction;
- Administrative controls allow the component to be disabled or reconfigured by protocol governance without impacting trading functionality.

## Reports

- **Full audit report:** https://github.com/bailsec/BailSec/blob/main/Bailsec%20-%20MEV-X%20-%20Differential%20-%20Final%20Report.pdf
- **Technical audit summary:** https://medium.com/@MEV-X/homelander-security-audit-by-bailsec-summary-and-outcomes-04523eb5096b
