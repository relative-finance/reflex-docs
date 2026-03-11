# API Wallet & Key Management

This page explains the key model used for Telegram-enabled trading.

## API Wallet Role

An API/agent wallet is authorized to place orders for your account context.

It is separate from your main wallet authority and is designed for execution operations, not custody withdrawal control.

## Why It Exists

Telegram trading needs server-side signing capability for real-time command execution.

## Lifecycle Summary

1. API wallet is created/linked during setup
2. Key material is encrypted for storage
3. Decrypted in memory only for signing operations
4. Re-discarded after use
5. Permission can be revoked/unlinked

## Operational Control

You can revoke agent/API wallet authorization from Hyperliquid settings to immediately stop further Telegram-side order placement.
