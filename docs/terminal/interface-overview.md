# Interface Overview

This page maps the current Reflex terminal structure.

## Top Header

| Area | Purpose |
|---|---|
| Navigation | `Trade`, `Stats`, `Points`, `Leaderboard`, `Telegram Bot` |
| Search | Fast market search/switch |
| Layout Mode | Toggle `Classic` / `Pulse` |
| Reset Layout | Reset panel arrangement |
| Notifications | Open notification settings panel |
| Settings | Open trading/layout/feed settings |
| Bridge | Open LI.FI bridge modal |
| Wallet | Connect, copy address, disconnect |

## Main Panels (Trade Page)

Reflex uses movable/resizable panels to display groups of data and information. 

Default panel content includes:
- Chart + market header
- Feed (news + presets + trade actions)
- Order Book / Trades / Calendar tabs
- Data tables (balances, positions, orders, history)
- Account overview

Optional panels can also be enabled:
- Polymarket
- Trade Ideas

## Feed Panel

The feed panel includes:
- Source filters (`All`, `Telegram`, `Twitter`, `RSS Feed`)
- Preset strip (active preset selection)
- News cards with sentiment, ticker selection, and Long/Short actions
- "Suggest Trade Idea" action on each card

## Polymarket Panel (Optional)

The Polymarket panel shows prediction-market signals, including:
- Market question/title
- Yes/No odds
- Volume and liquidity
- Direct link to the source market

Why it is useful:
- Adds event-probability context alongside chart and order-flow views
- Helps validate or challenge directional conviction before entering trades

## Trade Ideas Panel (Optional)

The Trade Ideas panel stores AI-generated trade setups created from feed cards.

Typical idea entries include:
- Symbol/timeframe
- Direction and confidence
- Setup details plus catalyst/confluence/risk notes
- Historical ideas for later review

Why it is useful:
- Converts fast-moving news into structured, actionable setup drafts
- Keeps an idea log you can review before placing or sizing a trade

## Data Tables Panel

Tabs:
- Balances
- Positions
- Open Orders
- TWAP
- Funding History
- Order History
- Trade History
