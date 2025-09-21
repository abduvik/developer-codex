---
date: 2022-11-28
---

# Issue #5: Fluent Interface, getComputedStyle, NPM Dependency configs

Hey Friends,

It has been a while since I was able to send newsletters but I managed to adjust my schedule now and it hopefully would
work this time.

This week I am going to do a lot of traveling. To Passau, Munich, and Dresden and get my React free course ready, and
publish it on my channel. It will include a bonus section about SSR in a new unique way not found on other tutorials and
courses.

A long week is coming up but hopefully will be productive and I wish you as well a productive nice start to the week :)

## Technical Summaries

### Fluent Interface

It’s the concept of creating a more “Fluent” code that is easier to read by chaining methods. Here, methods on their own
don’t show their intent but chaining them shows a more declarative meaning.

The best examples are: LINQ queries in C#, Jest & jQuery in Javascript, and jMock in Java.

```dotnet
IEnumerable<string> query = translations
  .Where(t => t.Key.Contains("a"))
  .OrderBy(t => t.Value.Length)
  .Select(t => t.Value.ToUpper());
```

Read More:

- [Fluent Interface by Martin Fowler](https://martinfowler.com/bliki/FluentInterface.html)\
- [Fluent Interface on Wikipedia](https://en.wikipedia.org/wiki/Fluent_interface)

### `getComputedStyle`

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

### `dependency` vs `devDependencies` vs `peerDependencies`

They are how we define dependencies in Javascript-based projects

"dependencies": Packages required by your application in production.

"devDependencies": Packages that are only needed for local development and testing. NPM won’t install them when someone
installs our dependency.

"peerDependencies": When someone installs our package, our package expects theirs to have these dependencies. If they
don’t have it, NPM will still install them

Watch the video for more explanation

@[youtube](https://www.youtube.com/watch?v=PxJ5wzFPTFU)

## Interesting Video

The Many Meanings of Event-Driven Architecture by Martin Fowler @ GOTO 2017

@[youtube](https://www.youtube.com/watch?v=STKCRSUsyP0)
