# Assets

Assets are a read-only metadata item that represent a fiat or cryptocurrencies within the Via ecosystem. All tradeable markets will have a base and a quote asset ID, and all of these asset IDs will appear once and only once on the list of available assets.

In addition, asset IDs are standardized across exchanges for user experience purposes. For example, `XBT` on Kraken is normalized to the standard `BTC`. This normalization process is performed by hand to ensure that there are no mistakes.

## Schema

| Field | Type | Description |
|-------|------|-------------|
| asset_id    | String | The standardized ID for this asset. This is unique across all assets within our ecosystem. |
| name    | String | The display name of this asset. Not guaranteed to be unique. |
| type_is_crypto    | Boolean | Whether or not this asset is a cryptocurrency or token. |
| metadata    | JSON | A JSON object containing additional information about this asset (currently unused). |

## GET /api/v1/assets

Returns a list of all available assets. Please keep in mind that some assets may not have any corresponding markets. They are simply available / normalized for later use. You can optionally pass a filter query parameter to return only assets that begin with a certain string.

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filter    | string | false | Only assets whose asset_id starts with this string will be returned. |

### Sample Request

``` javascript
const axios = require('axios');
const token = 'eyJhbGciOiJSUz[...]';

axios.get('https://data.via.world/api/v1/assets', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
```

### Sample Response
``` json
[
    {
        "asset_id": "BTC",
        "name": "Bitcoin",
        "type_is_crypto": true,
        "metadata": null
    },
    ...
]
```
