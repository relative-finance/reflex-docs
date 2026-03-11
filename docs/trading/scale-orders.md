# Scale Orders

Scale orders place multiple limit orders between a start and end price.

## Inputs

- Side (buy/sell)
- Start price
- End price
- Total size
- Number of child orders
- Size skew
- Time in force

## What Happens

Reflex builds the order ladder and submits child limit orders to Hyperliquid.

## Manage After Submit

Scale children appear in `Open Orders` and can be managed/cancelled there.

## Typical Uses

- Laddering entries into volatility
- Staggered exits for profit-taking
- Structured accumulation/distribution ranges
