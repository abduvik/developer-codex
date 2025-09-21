---
title: BroadcastChannel API
---

# BroadcastChannel API

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
