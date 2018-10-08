# Exchanges

Exchanges are a read-only metadata item that represent the list of exchanges supported by the Via ecosystem. All tradeable markets will have an exchange ID, and all of these exchange IDs will appear once and only once on the list of available exchanges.

## Schema

| Field | Type | Description |
|-------|------|-------------|
| exchange_id    | String | The ID for this exchange. This is unique across all exchanges within our ecosystem. |
| name    | String | The display name of this exchange. Not guaranteed to be unique. |
| metadata    | JSON | A JSON object containing additional information about this exchange (currently unused). |

## GET /api/v1/exchanges

Returns a list of all available exchanges. Please keep in mind that some exchanges may not have any corresponding markets. They are simply available within the system for later use. You can optionally pass a filter query parameter to return only exchanges that begin with a certain string.

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filter    | string | false | Only exchanges whose exchange_id starts with this string will be returned. |

### Sample Request

``` javascript
const axios = require('axios');
const token = 'eyJhbGciOiJSUz[...]';

axios.get('https://data.via.world/api/v1/exchanges', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
```

### Sample Response
``` json
[
    {
        "exchange_id": "BINANCE",
        "name": "Binance",
        "metadata": null
    },
    ...
]
```
