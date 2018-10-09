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

## Candle Schema

| Field | Type | Description |
|-------|------|-------------|
| candle_period        | Number | The length of this candle in milliseconds. |
| time_period_start    | Date | The start time for this candle. |
| time_period_end      | Date | The end time for this candle. |
| time_open            | Date | The timestamp of the first trade. |
| time_close           | Date | The timestamp of the last trade. |
| price_open           | Number | The price at which the first trade was executed. |
| price_high           | Number | The highest price at which a trade was executed. |
| price_low            | Number | The lowest price at which a trade was executed. |
| price_close          | Number | The price at which the last trade was executed. |
| volume_traded        | Number | The total trading volume in the base currency. |
| volume_buy           | Number | The total volume where the seller was the aggressor. |
| volume_sell          | Number | The total volume where the seller was the aggressor. |
| volume_notional      | Number | The total trading volume in the quote currency. |
| trades_count         | Number | The total number of trades that took place. |
| buy_count            | Number | The number of trades where the buyer was the aggressor. |
| sell_count           | Number | The number of trades where the seller was the aggressor. |
| vwap                 | Number | The volume weighted average price (`volume_notional` / `volume_traded`). |
| profile_increment    | Number | The size of the increments (i.e. buckets) at which the volume profile is calculated. |
| profile              | JSON | An array of arrays containing volume profile details. |
| first_trade_sequence | Number | The first trade `sequence` in this candle. |
| last_trade_sequence  | Number | The last trade `sequence` in this candle. |

## Volume Profile Schema / Example

Volume profiles consist of an parent array with between 1 and 100 child arrays. Each child array will have exactly 3 values: the `price_level`, `volume_buy`, and `volume_sell`, corresponding to the amount of buy / sell trades at a certain price level between `time_period_start` to `time_period_end`.

``` javascript
[
    [ price_level, volume_buy, volume_sell ],
    ...
]
```

Each `price_level` will necessarily be an increment of `profile_increment`. There will be no greater than 100 price levels per candle. This is by design, rather than a result of some technical limitation. In particular, there are some exchanges that allow for tick sizes far beyond any reasonable limit (e.g. a BTC-USD market quoted out to 8 decimal places), and it would be unproductive to store volume profile information at such levels of granularity.

## GET /api/v1/:market_id/candles

Returns a list of all available markets. You can optionally pass a filter query parameter to return only markets that begin with a certain string.

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| market_id    | String | true | The market ID for the desired market. |
| candle_period    | Number | true | The granularity in milliseconds. |
| time_start    | Date | true | An ISO-8601 date string. |
| time_end    | Date | true | An ISO-8601 date string. |

### Sample Request

``` javascript
const axios = require('axios');
const token = 'eyJhbGciOiJSUz[...]';

axios.get('https://data.via.world/api/v1/:market_id/candles', {
    headers: {
        Authorization: `Bearer ${token}`
    },
    params: {
        candle_period: 300000,
        time_start: new Date(Date.now() - 3600000),
        time_end: new Date()
    }
});
```

### Sample Response
``` json
[
    {
        "candle_period": 300000,
        "time_period_start": "2018-10-08T13:55:00.000Z",
        "time_period_end": "2018-10-08T14:00:00.000Z",
        "time_open": "2018-10-08T13:55:10.366Z",
        "time_close": "2018-10-08T13:59:27.250Z",
        "price_open": 6606.61,
        "price_high": 6606.61,
        "price_low": 6606.6,
        "price_close": 6606.61,
        "volume_traded": 0.31344217,
        "volume_buy": 0.31344217,
        "volume_sell": 0,
        "volume_notional": 2070.78917474,
        "trades_count": 8,
        "buy_count": 8,
        "sell_count": 0,
        "vwap": 6606.60680962,
        "profile_increment": 1,
        "profile": [["6606", "0.31344217", "0"]],
        "first_trade_sequence": 203551,
        "last_trade_sequence": 203558
    },
    ...
]
```
