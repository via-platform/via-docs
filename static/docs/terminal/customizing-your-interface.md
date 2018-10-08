# Customizing Your Interface

The Via Terminal interface is allows for very powerful customization to suit your trading style and preferences. Since Via is a desktop application, it supports multiple windows across multiple monitors.

When your first open Via, you will be greeted by the welcome screen, which displays basic information about the application. This screen can be disabled in the future by un-checking `Show this page on startup` in the bottom-center of the pane.

## Application Workspace

Each Via Terminal window is a single workspace that can contain many individual components. Components are small windows with specific functionality, such as a chart or market orderbook. There is no limit to the number of components that you may have within your workspace, however opening too many at once may decrease performance.

![alt text](/docs/terminal/images/workspace.png "A Via Terminal Workspace")

Once you have opened one or more components, they may be grouped, closed, or rearranged at any time. The component with focus will be market with a blue outline. Which ever component is focused at the time will be the first to receive hot key events, or other commands. For example, pressing `Ctrl+W` on Windows or `⌘+W` on Mac will close the focused pane.

To close a pane, hover over its tab until you see an `×` symbol appear on the right side. Click the `×` icon to close the tab. If you are looking for more options, you may also right click a tab. If the tab is part of a tab group, you are also able to close the other tabs in the group (simultaneously), or close only the tabs to the left or right of the selected tab.

The final way to close panes is by by entering the command `Pane: Close` into the Omnibar. The other commands (e.g. close all tabs to the right) are also available in this manner. Learn more about the Omnibar and Via commands [in the associated document](/terminal/omnibar).

### Rearranging Components

To rearrange components, you can drag and drop their corresponding tab into the desired location. The drop location will be marked with a blue highlight. You can either drop a component directly on top of another one, which will form a tab group, or you can drag it slightly towards the top, left, bottom, or right to split the components into two new panes.

Similar to closing panes, you can also access this functionality through commands. For example, typing `Pane: Split Up` will split the current component into a new pane above the existing one.

## Default Components

Via Terminal is shipped with a variety of built-in components. You can install additional components through the use of [packages](/terminal/managing-packages). To add a component to your workspace, you can either:

* Search for the component by name in the Omnibar
* Search for the component in the `View > Components` menu

Additionally, components are sometimes added to your screen automatically when you take certain actions. For example, clicking on the `No Recent Messages` box in the [Status Bar](/terminal/status-bar) in the bottom left of the workspace will automatically open up the Via Console, which displays important system messages.

Some of the major components are detailed in the table below. Please note, this table is far from complete. You can read more about each of these components elsewhere in this guide.

| Component Name | Description |
|----------------|-------------|
| Chart          | Visualization tools for market analysis. |
| Orderbook      | A real-time level-2 orderbook for the selected market. |
| Trade History  | Time and sales data for the selected market. |
| Depth          | A visual representation of the level-2 orderbook. |
| Orders         | A list of your open orders across all markets and exchanges. |
| Fills          | A list of your fills across all markets and exchanges. |
| Alert Manager  | A list of your open alerts across all markets and exchanges. |

## Groups

Read more about [grouping tabs together](/terminal/linking-tabs) in the associated guide.