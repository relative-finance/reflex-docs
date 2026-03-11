# Trading Presets

Presets are saved execution templates used across feed trading and manual workflows.

## What a Preset Stores

- Name
- Position size
- Leverage
- Order type (Market/TWAP)
- Slippage
- TP / SL (non-TWAP presets)
- Margin mode (Cross/Isolated)
- Confirmation behavior
- Quick trade sizes (3 shortcut amounts)

## Limits

- Up to 10 presets
- Validation requires usable position size and leverage bounds

## Where Presets Apply

- Feed `Long/Short` actions
- Pulse quick trade size buttons
- Manual trade flow when preset context is loaded

## Best Practice

Create multiple presets by risk profile (small/medium/high conviction) instead of editing one preset repeatedly.
