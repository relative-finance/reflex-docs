# AI Enrichment

Reflex feed items can include AI enrichment metadata.

## Current Surface in UI

- Sentiment label (for example bullish/bearish/neutral)
- Ticker extraction used by feed trade actions

## How To Use It Safely

- Treat enrichment as context, not instruction
- Confirm ticker relevance before executing
- Validate with chart/order-book context for the active market

## Trade Ideas

Each feed card includes `Suggest Trade Idea`.

This generates a structured setup and opens/updates the Trade Ideas panel. Use it as a starting point for analysis, not as automatic execution logic.
