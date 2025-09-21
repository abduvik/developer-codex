---
title: MutationObserver
---

# MutationObserver

It’s a native JavaScript interface that provides the ability to watch changes that happens to the DOM. It’s like the
reverse of what UI libraries do. So instead of React or Vue for example changing the DOM, you can create a listener on
the DOM to listen to these manipulations and apply a certain method or effect when this happens.

I encountered it while I was trying to search for a way to listen to CSS changes and this was a supported method to
apply it

[You can read more about it in the official documentation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)

Example code from the documentation

```js
// Select the node that will be observed for mutations
const targetNode = document.getElementById("some-id");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();
```
