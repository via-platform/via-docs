# Candles

Candles contain valuable time series information about a market. Candles available through Via Data Services contain much more information than the standard open, high, low, close candles available on your average exchange. Our candles are constructed directly from tick data, so we can achieve a wider variety of granularities.

## Available Granularities

There are many different candle granularities available for your consumption. No monthly candles are available due to the lack of a standard measurement of one month. You are free to try to construct monthly candles by combining daily candles. The table below lists the granularities that are currently available.

| Candle Period | Milliseconds |
|---------------|--------------|
| 1 Minute | 60000 |
| 3 Minutes | 180000 |
| 5 Minutes | 300000 |
| 15 Minutes | 900000 |
| 30 Minutes | 1800000 |
| 1 Hour | 3600000 |
| 2 Hours | 7200000 |
| 4 Hours | 14400000 |
| 8 Hours | 28800000 |
| 12 Hours | 43200000 |
| 1 Day | 86400000 |
| 2 Day | 172800000 |
| 7 Day | 604800000 |
| 10 Day | 864000000 |

## Schema

| Field | Type | Description |
|-------|------|-------------|
| candle_period        | Number | The length of this candle in milliseconds. |
| time_period_start    | Date |  |
| time_period_end      | Date |  |
| time_open            | Date |  |
| time_close           | Date |  |
| price_open           | Number |  |
| price_high           | Number |  |
| price_low            | Number |  |
| price_close          | Number |  |
| volume_traded        | Number |  |
| volume_buy           | Number |  |
| volume_sell          | Number |  |
| volume_notional      | Number |  |
| trades_count         | Number |  |
| buy_count            | Number |  |
| sell_count           | Number |  |
| vwap                 | Number |  |
| profile_increment    | Number |  |
| profile              | JSON | An array of arrays containing volume profile details. |
| first_trade_sequence | Number | The first trade `sequence` in this candle. |
| last_trade_sequence  | Number | The last trade `sequence` in this candle. |

## GET /api/v1/:market_id/candles

Returns a list of all available markets. You can optionally pass a filter query parameter to return only markets that begin with a certain string.

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filter    | string | false | Only exchanges whose market_id starts with this string will be returned. |

### Sample Request

``` javascript
const axios = require('axios');
const token = 'eyJhbGciOiJSUz[...]';

axios.get('https://data.via.world/api/v1/markets', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
```

### Sample Response
``` json
[
    {
        "market_id": "BINANCE_SPOT_ETH_USDT",
        "market_type": "SPOT",
        "exchange_id": "BINANCE",
        "asset_id_base": "ETH",
        "asset_id_quote": "USDT",
        "future_delivery_time": null,
        "option_type_is_call": null,
        "option_strike_price": null,
        "option_contract_unit": null,
        "option_exercise_style": null,
        "option_expiration_time": null,
        "exchange_market_id": "ETHUSDT",
        "exchange_asset_id_base": "ETH",
        "exchange_asset_id_quote": "USDT",
        "exchange_fee_taker": null,
        "exchange_fee_maker": null,
        "exchange_fee_currency": null,
        "active": true,
        "precision_price": 2,
        "precision_amount": 5,
        "precision_notional": 8,
        "min_price": 20.93,
        "min_amount": 0.00001,
        "min_notional": 10,
        "max_price": 2092.3,
        "max_amount": 10000000,
        "max_notional": null,
        "reference_market_id": null,
        "enabled": true,
        "metadata": {},
        "contract_size": null,
        "tick_size": 0.01,
        "profile_increment": 0.1
    },
    ...
]
```
