---
date: 2022-05-05
---

# Issue #4: HoC vs Inheritance, MutationObserver and Webpack

Hey Friends!

I hope this week has been going great for you so far and everything is going well and you getting ready for the
weekend ^\_^

I apologize for not posting any newsletters over the past weeks but I am back again and stronger than ever and hopefully
we share our knowledge together!

Hope you will like this Newsletter Issue, Enjoy!

## Technical Summaries

### HoC vs Inheritance

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

### MutationObserver

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

### Monorepo

We spoke about Monorepos in a previous Issue and now I have created
a [Just Enough Monorepo video](https://www.youtube.com/watch?v=N5pjlJnzrSw) that should cover
everything you will need to understand the concepts behind Monorepos.

@[youtube](https://www.youtube.com/watch?v=N5pjlJnzrSw)

Monorepo is a repository set up to have different parts of your application microservices under a single repository to
improve productivity.

If you have multiple packages or components that depend on each other, they usually have similar scripts, commands, and
dependencies, then having a single repository with everything will reduce the number of duplications, and make it easy
to access and update different modules and publish different versions at once. It will dramatically increase your team's
productivity.

## Something Made Me Laugh :D

@[youtube](https://www.youtube.com/watch?v=Uo3cL4nrGOk)

## Interesting Links

- [Google’s Site Reliability Engineering](https://sre.google/resources/)
- [The Marvellous Suspender Chrome Plugin](https://chrome.google.com/webstore/detail/the-marvellous-suspender/noogafoofpebimajpfpamcfhoaifemoa?hl=en)
- [Patterns.dev by Lydia Hallie and Addy Osmani](https://patterns.dev/)
