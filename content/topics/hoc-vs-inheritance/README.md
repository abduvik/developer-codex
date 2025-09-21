---
title: HoC vs Inheritance
---

# HoC vs Inheritance

Higher-Order Component or HoC is a way to add extra stuff over a function or an object. We basically “curry” it by
wrapping the original function with extra logic.

```js
function withLogging(component) {
  console.log("I am an HoC");
  return function () {
    return component;
  };
}

const button = () => document.createElement("button");

const buttonWithLogging = withLogging(button());
```

But you might ask what is the difference between it and inheritance then.

And it’s the idea of reusing the logic again with other components to create new components with the same logic.

Another thing I have noticed while playing with VueJs is that VueJs has mixins that do a very similar job to HoC

Except that mixins will overwrite the existing options aka. inheritance while HoC will isolate the original component
and wrap it with a new extra logic

It basically a form of the Adapter or Proxy design pattern.
