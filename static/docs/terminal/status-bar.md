# The Status Bar

The status bar is the thin bar located at the bottom of every Via workspace. The bar provides many useful tools and indicators at a glance. Primarily, these tools help to display application metadata (as opposed to market information). Many components add their own special functionality to the status bar.

![alt text](/docs/terminal/images/status-bar.png "The Workspace Status Bar")

Here are some examples of what the status bar contains:

1. The console adds a status bar tile to indicate when there is a new console message from Via or a components. These messages can include important information, such as when your trades are executed, or when you lose connection to a data stream. Clicking on this tile will open up the console in the currently focused pane.
2. The [Alert Manager](/terminal/alert-manager) component adds a status icon that indicates the number of active alerts that you have opened across all markets. Clicking this icon will open the alert manager.
3. The [Orders](/terminal/orders-and-fills) component adds a status icon that indicates the number of working orders that you have across all markets. Clicking this icon will open the orders component.
4. The websockets component adds an icon which displays the number of open websocket connections, and changes color to let you know when one or more connections have been lost.