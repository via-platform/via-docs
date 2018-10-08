# Markets

Markets are a read-only metadata item that represent the list of markets supported by the Via ecosystem. All markets have a unique ID which is used heavily throughout the data services API.

## Schema

| Field | Type | Description |
|-------|------|-------------|
| market_id               | String | The market ID. |
| market_type             | String (Enum) | The market type, current possibilities are: `SPOT`, `PERPETUAL`, `OPTION`, `FUTURES`, `INDEX` |
| exchange_id             | String | The ID of the exchange on which this market is traded. |
| asset_id_base           | String | The ID of the base asset. |
| asset_id_quote          | String | The ID of the quote asset. |
| future_delivery_time    | Date | The date of future delivery. |
| option_type_is_call     | Boolean | Set to `true` for CALL options, `false` for PUT. |
| option_strike_price     | Number | The strike price of the option. |
| option_contract_unit    | Number | The underlying unit of an options contract. |
| option_exercise_style   | String | The exercise style for the options contract, either `EUROPEAN` or `AMERICAN`. |
| option_expiration_time  | Date | The expiration date for an option. |
| exchange_market_id      | String | The original market ID, used on the actual exchange. |
| exchange_asset_id_base  | String | The original base asset ID, used on the actual exchange. |
| exchange_asset_id_quote | String | The original quote asset ID, used on the actual exchange. |
| exchange_fee_taker      | Number | Exchange fee for market orders. |
| exchange_fee_maker      | Number | Exchange fee for limit orders. |
| exchange_fee_currency   | String | The `asset_id` for the exchange fee currency. |
| active                  | Boolean | Whether or not the market is active or halted on the exchange. |
| precision_price         | Number | Number of decimals in the quoted price of an asset. |
| precision_amount        | Number | Number of decimals in the amount of an asset. |
| precision_notional      | Number | Number of decimals in the notional value of a trade. |
| min_price               | Number | The lowest allowed price in `asset_id_quote`. |
| min_amount              | Number | The smallest amount of `asset_id_base` that you are allowed to trade. |
| min_notional            | Number | The smallest total notional value of a trade. |
| max_price               | Number | The highest allowed price in `asset_id_quote`. |
| max_amount              | Number | The largest amount of `asset_id_base` that you are allowed to trade. |
| max_notional            | Number | The largest total notional value of a trade. |
| reference_market_id     | String | A `market_id` corresponding to the underlying asset or index for this market. |
| enabled                 | Boolean | Whether or not market data is available from the Via API. |
| metadata                | JSON | Additional details about the market. Varies by exchange. |
| contract_size           | Number | Amount of the underlying asset in a single derivative contract (e.g. a perpetual swap). |
| tick_size               | Number | The step-size for trading on this market. Not necessarily the same as `precision_price`, but often identical. |
| profile_increment       | Number | The smallest possible step size available for volume profiles. |


## GET /api/v1/markets

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
