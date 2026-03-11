# Order Types

Reflex supports multiple order types from the trading form.

## Core Types

- Market
- Limit
- Scale
- TWAP

## Perps Trigger Types

For perp markets, additional trigger orders are available:
- Stop Limit
- Stop Market
- Take Limit
- Take Market

## Related Controls

- Time in Force (`GTC`, `IOC`, `ALO`) for applicable limit-style orders
- Reduce Only
- Optional TP/SL attachment for Market/Limit perp orders

## Practical Guidance

- Use `Market` for speed
- Use `Limit` when price precision matters
- Use `Scale` to ladder entries/exits across a range
- Use `TWAP` for staged execution over time
- Use trigger orders for conditional entries/exits
