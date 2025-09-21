---
title: getComputedStyle
---

# `getComputedStyle`

One task I needed to deal with the past week is to find a way to set a child’s height based on the parent’s CSS
min-height.

Problem is that there is no DOM property to get this minHeight.

A quick search and I came across a DOM API called getComputedStyle and it returns the computed style of the component
based on the different classes and styles and CSS properties including the minHeight that I needed.

```js
getComputedStyle(element);
getComputedStyle(element, pseudoElt);
```

Read more:

- [MDN docs on getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
