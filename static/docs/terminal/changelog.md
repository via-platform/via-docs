# Change Log
## These are the most recent updates to the Via Terminal. You can find the latest release, as well as historical releases on our [releases page](https://releases.via.world).

## 0.11.2-alpha
### 08 Oct 2018

* Fixed a couple bugs with charting.
* The omnibar will now only show tradeable markets when searching.
* The omnibar will now refocus the active pane after you are done with it.
* The omnibar will now show search results relevant to the currently focused tab.
* Fixed a bug that was preventing the accounts window from opening properly.

## 0.11.1-alpha
### 08 Oct 2018

* Volume profiles are now enabled for all markets, in all timeframes.
* A parallelogram drawing tool has been added to the chart component.
* A triangle drawing tool has been added to the chart component.
* Added a shadow value line to the chart for future use.
* Right click watchlist items to open chart, etc.
* You can now press the "L" hotkey to re-lock a chart.
* Chart volume indicator will now show buy and sell volume individually.
* Chart number of trades indicator will now show buy and sell volume individually.

## 0.11.0-alpha
### 05 Oct 2018

* A new data backend was created for speed and efficiency improvements, and to lay the groundwork for future features.
* There were a whole bunch of front end changes necessary for Via to properly interface with the new backend.
* General UI / theme improvements.
* Orderbooks and trades are now fully cached on the backend for speed and accuracy improvements.

## 0.10.2-alpha
### 20 Sep 2018

* A bug was fixed that prevented the "Number of Trades" indicator from appearing correctly.
* Market status stream was added to help monitor live connections.
* Contract size and tick size were added to the market metadata for future use in non-SPOT markets.
* A few bugs were fixed that caused websockets to unintentionally disconnect.
* A delta number was added to the local high & low indicator.

## 0.10.1-alpha
### 05 Sep 2018

* Via was updated to Electron v2.0.8 which fixed a potential security vulnerability discovered in the Electron codebase.
* Added a status bar indicator for Via software updates.
* The Via core was upgraded to allow for via:// URL handling.
* Workspace saving and restoration has been implemented in the core, requires one more package to make it available to users.
* Fixed an graphics issue with the price flag on the depth chart.
* Tab color grouping will now persist when restarting the app or refreshing the window.

## 0.10.0-alpha
### 23 Aug 2018

* Updated the Electron version underlying Via.
* Fixed a bug where notional volume was not rendering correctly.
* Trading volume number will now round to the correct number of decimals.
* Alerts should now function properly again.
* Docks were removed from the main interface due to confusion.

## 0.9.2-alpha
### 15 Jul 2018

* Fixed a bug in the time series cache.
* Fixed a bug in the chart volume indicator.
* Added a chart indicator for notional volume traded.
* Truncate the trade amount to the allowed decimal precision.
* You can now auto-fill the limit prices in the trade window to last price, highest bid, and lowest offer.
* The limit and stop fields in the trade window will automatically fill when applicable.
* The look of input labels has been updated to remove clutter.

## 0.9.1-alpha
### 10 Jul 2018

* Fixed a bug where the chart would remove more than one panel at once.
* Cleaned up some chart timers that would stick around even after you closed a chart.
* Added two more icons to the status bar; one for active alerts, the other for open orders.
* Via will now only open one application instance at a time (You can still have multiple windows, they will just be running under the same main process).
* Charts will now have grey dashes for candles that are empty.
* Fixed a bug that prevented the user data stream from closing immediately after your Binance account was unlinked from Via.
* Fixed a bug that caused destroyed websocket connections to continue attempting to ping the server.
* You can now use tab and shift-tab to navigate in the add account modal.

## 0.9.0-alpha
### 30 Jul 2018

* Backend data rework.
* Updated alerts to conform to the new data system.
* Added IDEX charting, orderbook and alerts.

## 0.8.7-alpha

* Added an overlay for charts to display the current market bid and ask price.
* Added a menu item for the Symbol Explorer, Orders, Fills, Create Alert, Manage Alerts, and Accounts.
* Added an rectangle drawing tool for charts.
* Added an ellipse drawing tool for charts.
* Added a line drawing tool for charts.
* Added an fibonacci retracement drawing tool for charts.
* Fixed a couple of drawing bugs on the chart.
* Dramatically improved performance with the omnibar. The UI was lagging as a result of it.
* Current value line can now be toggled on and off on the chart settings page.
* Added an option under the "Developer" menu to clear cached data (in the event of issues).
* Dramatically improved the initial loading time when refreshing all markets from the server.
* Selecting a new market for a component has been improved substantially. You can now fuzzy-filter by the exchange name as well as the market name.
* Inactive and non-spot markets have been removed from the search results for standard components.
* Updated the look of the create alert button to match the Transmit button on the trade component.
* Fixed a bug where alerts were not being removed from the chart after being canceled.

## 0.8.6-alpha

* Fixed a bug dealing with the freshness of cached metadata that would prevent many markets from appearing.

## 0.8.5-alpha

* Cryptopia trading.

## 0.8.4-alpha

* The bug that caused some people to be stuck at "Launching Via" has now been fixed.
* Cryptocurrency subscription payments have been implemented along with free trials.
* Websockets package is now a core package.
* Status bar is now a core package.
* Console is now a core package.
* Console messages will now display in the status bar.
* The "Watchlist" menu item under View > Components will now open correctly.
* Default granularity was now added as a chart configuration option.
* Websocket connection status will now appear in the status bar.
* Tab close icons were made slightly smaller to match the size of the tabs.
* Fixed the market price and amount precision (i.e. rounding to decimal places) for many exchanges. More to come soon.

## 0.8.3-alpha

* HitBTC trading.
* Fixed some inconsistencies with stop orders triggering
* The trade form is now more compact.
* Some UI improvements have been made to input fields to correct for the new UI colors and fonts.
* Settings panel UI improvements.
* Fixed a bug in the symbol explorer.
* Fixed a NaN bug in the trade summary area.
* Fixed a bug with the deactivation of the orders package.
* Fixed a bug with the deactivation of the alerts package.
* Updated the login screen to match the new UI.

## 0.8.2-alpha

* Linked color does not disappear after you move your mouse from the tab.
* Tabs have been made slightly smaller in height.
* The default theme colors have been changed back to greyscale.
* The space between components has been reduced to make more room.
* Changed to Open Sans from Inconsolata for improved legibility at small font-sizes.
* The focused panel will now be highlighted to help locate the current target for hotkeys.
* Human-readable time measurements were added to the chart measure tool and date/value range tool.
* Fixed a bug where the number of trades / trading volume was not updating properly.
* Current value is now a default chart plugin and will appear automatically.

## 0.8.1-alpha

* Fixed a bug that caused websockets to fail to reconnect after your computer falls asleep.
* Fixed a bug that caused the orderbook to appear grey instead of its proper colors.
* The developer tools will no longer open automatically on random errors.

## 0.8.0-alpha

* Dozens of new exchanges are available for charting & L2 data.
* Added a new watchlist view for you to keep track of your favorite markets.
* Some issues were fixed where only a small number of candles could be loaded at once (e.g. GDAX).
* Exchanges and symbols are now cached locally to improve startup time.
* You will no longer have to manually activate exchanges.
* The order manager now includes a new column for the trading venue (exchange).
* You can now hide inactive markets from the symbol explorer and omnibar.
* Market depth crosshairs will now resize to fit the number of decimal places.
* Most widgets will now share data streams. This should dramatically improve performance.
* The trade volume chart indicator will now properly update in real-time.
* There is now a trade count indicator which charts the number of trades within a given time period.
* The order book is now a fixed height, so it should stay centered better.
* The order book / depth chart will now automatically refresh their state, should the sockets drop any messages.
* The alerts back-end server has been dramatically improved and should be much more reliable.
* You can now link the symbol explorer to other panels to change markets by clicking.
* The search results will now display the names of the coins in the description field.
* You will now see a greater number of search results at once when switching markets.
* Updated the account management panel to handle the new account architecture.
* Alerts will now talk to the updated alert back end server.
* Improved the accuracy of order fills and fees information.

## 0.7.9-alpha

* Your workspaces are now saved and restored when you quit and reopen the app.
* You can now unlock chart panels to scroll axes independently.
* Fixed the "undefined" message in alert emails and text messages.

## 0.7.8-alpha

* Added an alert line style user preference for open alerts.
* The chart y-axis width is now variable.
* The trade panel now properly remembers your market after you execute or cancel a trade.
* You can now retrieve closed orders, fills, alerts, accounts, and symbol explorer panels.
* You can now open multiple orders, fills, and alerts panels, in preparation for future features.
* Fixed the printed precision of chart titles (e.g. candlestick).
* Changed the style of the Transmit Order and Cancel Order buttons in the Orders panel.
* Fixed a bug with non-stop order types on Binance.

## 0.7.7-alpha

* Made another adjustment to the login QR code as some users were still having trouble scanning it.
* You can now right click on the chart to create an alert at that value. Alerts are created with your default settings.
* You can now right click on a pending alerts to transmit it.
* Crosshairs now hide when you hover over certain chart elements to allow you to see what you're doing.
* You can now send alerts from the chart by hovering over the blue price which will change to "Transmit".
* You can now send orders from the chart by hovering over the limit price which will change to "Transmit".
* A bug was fixed where Via would allow you to enter invalid stop prices for your orders.
* Fixed a bug where the fills & orders screens were not scrolling properly.
* Fixed a bug where the fill fees were not displaying correctly for GDAX.
* Added user customizable options to hide open or pending alerts on the chart.
* Fixed a GDAX bug that would incorrectly compute order status after an order was executed or canceled.
* Fill arrows will now appear on the chart for the relevant market.
* Add an option to show / hide fill arrows on the chart.
* Fixed a bug that caused GDAX fills to say the wrong trade side.
* You can now right click an alert in the manager to view it on a chart.
* GDAX and Binance will now handle stop orders much more effectively.

## 0.7.6-alpha

* Alert support
* Alert customization

## 0.7.5-alpha

* Bugfixes from 0.7.4-alpha.

## 0.7.4-alpha

* Properly remove accounts from the list when you delete them on the Settings panel.
* You will no longer see an option to add an account for an exchange that already has an account linked.
* Changed the 2FA QR code to black-on-white in an attempt to make it easier to scan.
* Added basic support for alerts
* Added chart alerts
* Added alert manager and creator
* Added hotkeys to change the chart granularity
* Added a white background to the QR code to try to help Authy users who were having trouble scanning it
* Added a configuration option to reset the chart when you change granularity
* Hotkeys to copy, paste, and select all should now work properly on the login page

## 0.7.3-alpha

* More Binance trading bug fixes.
* The value axis on the crosshairs will now round to the proper precision.

## 0.7.2-alpha

* Fixed several more bugs that prevented orders placed outside of Via from appearing properly.
* Order status and created time will now appear properly for orders created outside of Via.
* Via will now fetch orders from the exchange if they are placed from outside the platform.
* Date created will now update properly for newly created orders.
* Removed deprecated packages that may be confusing to users.
* Added options to hide pending, canceled, and filled orders from the orders pane.
* Added checks to prevent you from submitting an invalid order to an exchange that doesn't support the desired order type.
* Switched market orders to show the base currency instead of quote. Only GDAX supported quote.

## 0.7.1-alpha

* Fixed a bug that prevented orders placed outside of the system from appearing properly.

## 0.7.0-alpha

* Added chart trading as a core package
* Updated charts to include a date & time range tool
* Broke stop-market and stop-limit orders into two separate types
* Added support for the Binance user data stream
* Added support for the GDAX user data stream
* Market, Limit, Stop-Market, and Stop-Limit trading support for Binance and GDAX
* Chart trading interface for all current order types

## 0.6.0-alpha

* Added d3 v5.0.0 as a core dependency, exposed through the global via object

## 0.5.7-alpha

* Updated via-table to allow for the customization of table columns (in general)
* Updated the orders pane to work with the new table layout (so it can be customized)
* Fixed a bug where the trade history price column shows the base unit instead of the quote unit
* Updated the trade-history widget to allow for column customization
* Added a new optional column to trade-history to show order size in the quote instrument
* Added a new icon on tabs to group them with other tabs
* Added ability to group chart, orderbook, depth chart, trade history, and trade execution tabs
* Added hotkeys to switch market on trade history and trade execution tabs
* Fixed an issue where the "Add Account" modal was not clearing the form after adding confirming or canceling (note: this is not a security risk, just a UX error)
* Right click on the symbol explorer to view symbol chart, orderbook, trade history, market depth, or trade execution

## 0.5.6-alpha

* Added hotkeys to depth to change the market, zoom out, and zoom in.
* Increased the zoom limit on depth to get a wider view of the market.
* Measurement tool for the chart
* Quick-measure by holding shift and clicking on the chart

## 0.5.5-alpha

* Fixed a crosshair bug when you double-clicked to zoom
* Remove an empty chart panel when you remove its only layer
* Select a chart layer by clicking on it, or click on its name in the chart values area
* Delete and backspace will now remove the selected chart layer
* Added HitBTC charting, l2 orderbook, market depth chart, and trade history support
* Changed the Windows loading gif
* Added vertical and horizontal line widgets

## 0.5.4-alpha

* Added guides section to the website
* Fixed the default color of the buy orders in the orderbook
* You can now set your preferred default chart type
* Fixed a NaN bug when the chart was dragged too far to the left
* Restrict the granularity based on what the exchange allows
* Added new menu items for components
* Left and right arrow keys now move the chart
* Fixed a bug that caused the window the crash when you tried to move the symbol-explorer
* Close icon hover color has been fixed
* Tabs are slightly smaller to save vertical space
* Tooltips have been given a facelift
* Fixed a bug where the chart would jump if the window was resized while it was inactive
* Fixed a bug with the activation / deactivation of chart plugins
* Added new hot keys / commands to change the orderbook market, increase/decrease aggregation, and center the book
* Removed the keybindings link from the Settings package menu
* Fixed an issue with the units on the volume chart plugin
* Fixed a bug where the trade window would update the spot price incorrectly
* Fixed a bug where the order would allow you to set a non-number value for the amount
* Tooltips will no longer appear above the omnibar search results when they are first opened
* Graphical representation of size on the orderbook is now shared properly between bids and asks