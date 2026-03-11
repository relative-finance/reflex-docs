# TWAP Orders

TWAP splits a larger order into scheduled child orders over time.

## How Reflex Uses TWAP

- You set total size and duration
- Execution uses fixed interval slicing (30-second cadence in current form UX)
- Optional randomization is available in the form

## Where You Can Monitor

Use the `TWAP` tab in Data Tables to track active runs and cancel open TWAP executions.

## Good Use Cases

- Entering/exiting size without one-shot impact
- Building positions across a window instead of a single timestamp

## Caution

TWAP is execution logic, not a risk control tool by itself. Pair it with sensible leverage and stop management.
