---
date: 2023-02-13
---

# Issue #9: History API, BroadcastChannel API and Importmap

Hey Friends,

Missed the past week’s issue as I got pretty sick but I am better now and found out that in Germany you can book a video
call with a doctor which is pretty cool!

Anyways, enough rest and time to get back to discovering cool tech :D

Hope you all are healthy and having a productive week ❤️

## Technical Summaries

### History API

The History API allows to manage and manipulate the browser's history and gives the ability to update the URL displayed
in the browser's address bar without reloading the page, which results in a better user experience and is a core
component of routing libraries such as react-router and vue-router.

Here's an example of using the History API:

```js
// Using the pushState method to add a new history entry
history.pushState(
  {
    page: 1,
  },
  "Page 1",
  "/page1"
);

// Using the replaceState method to update the current history entry
history.replaceState(
  {
    page: 2,
  },
  "Page 2",
  "/page2"
);

// Listening for the popstate event to handle back/forward navigation
window.addEventListener("popstate", function (event) {
  console.log("Page:", event.state.page);
});
```

In this example, the pushState method is used to add a new history entry to the browser's history, with the
state `{ page: 1 }`, the title "Page 1", and the URL `/page1`. The replaceState method updates the current history entry
with the state `{ page: 2 }`, the title "Page 2", and the URL `/page2`.

Finally, the popstate event is listened for and logged to the console, which will be triggered when the user navigates
back or forward through the history.

Read More:

- [History API by mdn](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [Example code for internals in a router](https://github.com/abduvik/just-enough-series/blob/13f8dce7edfacb4b873021fdddeadcb4dc102839/courses/react/todo/_extras/code.tsx#L6)

### BroadcastChannel API

The BroadcastChannel API allows communication between different browsing contexts (e.g. windows, tabs, iframes) and
workers in the same origin. It provides a way to broadcast a message to all listening contexts.

Here is an example of using the BroadcastChannel API to send a message from a parent window to all of its child iframes:

```js
// In the parent window
const channel = new BroadcastChannel("channel-name");

channel.postMessage("Hello, world!");

// In the child iframe
const channel = new BroadcastChannel("channel-name");

channel.addEventListener("message", (event) => {
  console.log(event.data); // 'Hello, world!'
});
```

You can also use the BroadcastChannel API to communicate between different tabs or windows. In this case, you would need
to open the same channel in both tabs or windows and then use postMessage to send a message from one tab or window to
the other.

```js
// In one tab or window
const channel = new BroadcastChannel("channel-name");

channel.addEventListener("message", (event) => {
  console.log(event.data); // 'Hello, other tab or window!'
});

// In another tab or window
const channel = new BroadcastChannel("channel-name");

channel.postMessage("Hello, other tab or window!");
```

Note that the BroadcastChannel API is not intended for communication with servers, as it only works within the same
origin. If you need to communicate with a server, you can use other APIs such as WebSockets or the Fetch API.

Read more:

- [BroadcastChannel API by mdn](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)

### Importmap

Import maps are a way to specify custom module resolution for JavaScript projects natively in the browser without using
bundlers like Webpack or Vite. They allow you to map specific import statements to different locations, giving you more
control over how your code is organized and loaded.

You can use an import map to specify that all imports starting with @/components should be resolved to the
src/components folder, and all imports starting with @/utils should be resolved to the src/utils folder. Your import map
file would look like this:

```json
{
  "imports": {
    "@/components/_": "./src/components/_",
    "@/utils/_": "./src/utils/_"
  }
}
```

In your code, you can then use the following import statements:

```js
import Button from "@/components/button";
import { helper } from "@/utils/helper";
```

You can also use importmap to point to external libraries or CDN.

```json
{
  "imports": {
    "lodash": "https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js"
  }
}
```

In your code, you can then use the following import statements:

```js
import _ from "lodash";
```

It is important to note that import maps are not yet widely supported and require a browser with support for the '
import-maps' feature flag, or a tool like es-dev-server to work.

Read more:

- [Improtmap by mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)
