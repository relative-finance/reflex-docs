# Trading via Telegram

Telegram trading is conversational in the current implementation.

## Simple Order Flow

`/trade` -> choose simple order -> side -> symbol -> size -> price (`MKT` or limit) -> TIF -> reduce-only -> confirm.

## Advanced Flow

`/trade` -> advanced strategy menu -> fill parameters -> confirm.

Strategy support depends on backend rollout; some listed strategies may be unavailable in a given environment.

## Confirmations

After submit, the bot returns request/message IDs. Use `/status` to track execution state.
