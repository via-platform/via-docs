# Charts

Charts are an integral part of the Via Terminal. They help traders visualize market data and make informed decisions based on past price action. Via provides very powerful charts along with a number of technical indicators to give you a comprehensive view of the markets.

All markets update in real time and contain a variety of different time frames, ranging from 1 minute to 10 days.

| Chart Timeframes |
|------------------|
| `1m` `3m` `5m` `15m` `30m` `1h` `2h` `4h` `8h` `12h` `1d` `2d` `7d` `10d` |

Time series data is constructed from raw ticks that we receive from the exchange, so it is extremely reliable and robust. We are able to offer many technical indicators that even the exchanges themselves do not provide, for example, volume weighted average price (VWAP).

![alt text](/docs/terminal/images/chart.png "Via Terminal Chart")

## Creating Charts

To open a chart, search for a market in the [omnibar](/terminal/omnibar) and press `Enter`. Alternatively, you can open a blank chart by simply typing `chart`. You can also find the chart component under the `View > Components` menu. Once your chart is open, you can change the market by clicking the market name in the top left of the chart or by pressing the `M` key. If no market is selected, the button will say `Select Market` instead.

There is no limit to the number of charts that you're able to open at once.

## Linking Charts

Charts can be grouped together with other tabs (including other charts). They will all change markets in sync. Read more about linking tabs in the [associated document](/terminal/linking-tabs).

## Changing the Timeframe

By default, charts open in the `5m` timeframe. You may change the default by searching for the option in the chart package settings. To change the timeframe for just this chart, click the icon that says `5m` in the ribbon above the chart. You can also press the `G` key to select a timeframe. The `[` and `]` hot keys will increase and decrease the timeframe by one step.

## Changing the Plot Type

Via offers 5 plot types out of the box. These plot types include standard candlesticks, Heikin-Ashi candlesticks, OHLC bars, line graph, and an area chart. More plot types will be added in the future. To change the plot type, click `Candlesticks` in the ribbon above the chart and select a new type from the omnibar.

## Technical Indicators

Read more about technical indicators in the [associated document](/terminal/technical-indicators).
