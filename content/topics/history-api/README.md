---
title: History API
---

# History API

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
  "/page1",
);

// Using the replaceState method to update the current history entry
history.replaceState(
  {
    page: 2,
  },
  "Page 2",
  "/page2",
);

// Listening for the popstate event to handle back/forward navigation
window.addEventListener("popstate", function (event) {
  console.log("Page:", event.state.page);
});
```

In this example, the pushState method is used to add a new history entry to the browser's history, with the state
`{ page: 1 }`, the title "Page 1", and the URL `/page1`. The replaceState method updates the current history entry with
the state `{ page: 2 }`, the title "Page 2", and the URL `/page2`.

Finally, the popstate event is listened for and logged to the console, which will be triggered when the user navigates
back or forward through the history.

Read More:

- [History API by mdn](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [Example code for internals in a router](https://github.com/abduvik/just-enough-series/blob/13f8dce7edfacb4b873021fdddeadcb4dc102839/courses/react/todo/_extras/code.tsx#L6)
