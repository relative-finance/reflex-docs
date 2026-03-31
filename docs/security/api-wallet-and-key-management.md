# Agent Wallet & Key Management

This page is the single source of truth for agent (API) wallet behavior in Reflex.

## Terminology

- **Agent wallet** and **API wallet** refer to the same thing in Reflex docs.
- It is authorized for order execution only.
- It is separate from your main wallet authority and cannot withdraw funds.

## Why This Exists

Reflex needs an agent wallet for:

1. Terminal execution features (conditional/advanced flows)
2. Telegram-triggered execution
3. Backend-assisted signing paths

## What Connections Shows

Reflex surfaces distinct states in **Connections**:

1. **Browser / Device Agent Wallet**  
The key currently stored in this browser profile.

2. **Backend Synced Agent Wallet**  
The key Reflex backend is currently configured to use.

3. **Hyperliquid Active Agent Wallet**  
Primary active approved agent selected from Hyperliquid metadata.

4. **Active Agent Wallets**  
Full list of currently approved Hyperliquid agent wallets for your account.

These can differ across devices/sessions.

## Button Behavior

### Add Agent Wallet

- Creates and approves a new local browser/device agent wallet.
- If Hyperliquid named-wallet capacity is full and Reflex-managed keys exist, Reflex rotates by reusing an existing Reflex agent name.
- If capacity is full and none of the keys are Reflex-managed, Reflex cannot auto-resolve and prompts you to revoke one in Hyperliquid.

### Sync Agent Wallet

- Syncs local browser/device key to Reflex backend.
- Does **not** create a new key.
- If no local key exists, add/rotate first.

### Revoke Access

- Unsyncs backend access only.
- Does **not** delete local browser key.
- Does **not** revoke Hyperliquid approval by itself.

### Rotate Agent Wallet

- Provisions a fresh local browser/device wallet and approves it on Hyperliquid.
- Use for key refresh or stale local state recovery.

## Key Limits and Rotation Rules

Hyperliquid limits **named** API wallets at the account level. Reflex enforces this limit in flow logic.

- If there is room under limit: add/rotate proceeds normally.
- If at limit with Reflex-managed keys: Reflex rotates by replacing one Reflex key.
- If at limit with only non-Reflex keys: revoke one in Hyperliquid first.

Reference: [Hyperliquid Exchange Endpoint: approveAgent](https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint)

## Expiry Behavior

- Reflex shows **Time To Expiry** and **Valid Until** for the active selection.
- Reflex does not silently rotate healthy unexpired keys during normal operation.
- If a key is stale/missing locally, Reflex follows guarded recovery paths and prompts through Connections when required.

## Multi-Device Behavior

- Each browser/device keeps its own local key material.
- Opening Reflex on a new browser/device does not copy local keys from another device.
- Agent names are device-scoped (`ReflexApp-<device>`), and constrained to Hyperliquid naming limits.

## Security Model

1. Local/browser key is stored client-side for local execution.
2. Backend-synced key is stored encrypted (KMS-backed) for backend-triggered actions.
3. Main wallet private key is never stored by Reflex.

## Common Error Codes

- `AW-KEY-LIMIT`: account at named-wallet capacity
- `AW-LOCAL-MISSING`: no local key present for this device
- `AW-LOCAL-STALE`: local key not currently approved on Hyperliquid
- `AW-SIGNER-INVALID`: API wallet/signer rejected by Hyperliquid
- `AW-APPROVAL`: approval request failed (toast includes detailed reason)

## Recommended Recovery Order

1. Check **Active Agent Wallets** in Connections
2. Confirm which key is **Local** vs **Backend**
3. Use **Add** or **Rotate** for local-device provisioning
4. Use **Sync** only when backend access is needed
5. Revoke stale/unneeded approvals in Hyperliquid when at key limit
