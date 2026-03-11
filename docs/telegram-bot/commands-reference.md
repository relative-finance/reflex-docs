# Commands Reference

Current registered bot commands:

## `/start` (and `/help`)

Shows onboarding/help context and linking guidance.

## `/trade`

Starts interactive trading flow.

Flow supports:
- Simple order path (side, symbol, size, price/market, TIF, reduce-only, confirm)
- Advanced strategy menu (availability can vary by backend strategy rollout)

## `/wallet`

Stores or updates the Hyperliquid wallet address used for order routing context.

## `/status`

Checks order status by request ID.

## Notes

Older slash command sets such as `/long` and `/short` are not the current default bot command model.
