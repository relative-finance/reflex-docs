# Agent Wallet Management

This page explains how Reflex manages agent wallets across browser sessions, backend sync, and Hyperliquid authorization.

## Key Concepts

Reflex surfaces three different agent-wallet states in **Connections**:

1. **Browser / Device Agent Wallet**  
This is the agent private key currently stored in your local browser storage for the connected wallet.

2. **Backend Synced Agent Wallet**  
This is the agent wallet that Reflex backend services are configured to use for server-side actions (for example Telegram-triggered execution flows).

3. **Hyperliquid Active Agent Wallet**  
This is the active approved Reflex agent detected from Hyperliquid metadata (`extraAgents`).

These values can differ if you switched browser/device, cleared storage, revoked keys, or synced from another session.

## Sync, Rotate, Revoke

### Sync Agent Wallet

- Syncs the current local device agent key to Reflex backend.
- If your local key is missing/stale, Reflex can provision a new local agent key and then sync it.

### Rotate Agent Wallet

- Creates a brand-new local agent wallet for this browser/device and approves it on Hyperliquid.
- Use when your local key is stale, compromised, or close to expiry.

### Revoke Access

- Removes backend access to the currently synced agent wallet in Reflex.
- After revoke, reconnect/sync again before using backend-triggered execution.

## Expiry and Rotation Behavior

- Reflex does **not** auto-rotate active unexpired agent keys during normal trading flows.
- If Hyperliquid still has an unexpired Reflex agent but local browser key is missing/stale, Reflex prompts you to resolve from **Connections**.
- Auto-rotation is only allowed in safe/explicit paths (for example Connection management actions).

## Multi-Device Behavior

Each browser/device profile keeps its own local agent key.  
A new browser on the same wallet will not automatically have your previous local private key.

Reflex now labels new approvals with a device-scoped agent name (`ReflexApp-<device>`), making session/device intent clearer.

## Agent Wallet Limits

Hyperliquid supports named API wallets and enforces account-level limits.  
Reflex caps active Reflex agent wallets to **3** per account before requiring revoke/cleanup.

Reference: [Hyperliquid Exchange Endpoint: approveAgent](https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint)

## Troubleshooting

Common agent-wallet error codes shown in Reflex:

- `AW-KEY-LIMIT`: Too many active Reflex agent wallets. Revoke one and retry.
- `AW-LOCAL-MISSING`: Local browser key missing while an active Reflex key exists on Hyperliquid.
- `AW-LOCAL-STALE`: Local browser key does not match current approved Reflex agents.
- `AW-SIGNER-INVALID`: API wallet/signer not recognized by Hyperliquid.

If you see these errors repeatedly:

1. Open **Connections**
2. Check Browser/Device vs Backend Synced addresses
3. Re-sync or rotate intentionally
4. Revoke stale agent wallets no longer needed

