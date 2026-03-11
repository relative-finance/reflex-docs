# Security & Key Management

Telegram trading is built around authorized agent/API-wallet permissions.

## Security Model

- Main wallet remains your root authority
- Agent/API wallet can trade but cannot withdraw or transfer custody funds
- Permissions can be revoked

## Practical Controls

- Link only through official Reflex flow
- Rotate/revoke permissions if compromise is suspected
- Use `/wallet` carefully and verify destination/account context before submitting orders

For deeper architecture details, see [API Wallet & Key Management](../security/api-wallet-and-key-management.md).
