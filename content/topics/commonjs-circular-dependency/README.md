---
title: CommonJS Circular Dependency
---

# CommonJS Circular Dependency

This week I had an issue with Circular dependency. Basically I had the issue that Package A was importing Package B but
Package B was also importing Package C and then importing Package D. But suddenly I found this last one was importing
Package A.

So, it was like this: **A** -> B -> C -> **D -> A**

Of course, Webpack was importing A into D as an empty null and causing it to fail. The reason is not Webpack but rather
CommonJs’s behaviour to avoid going into infinite loops in Circular Dependencies. It defines them as empty objects first
and then adds the properties later. It works like this:

- It first Loads A
- It sees A requires B
- It goes to import B
- ….
- It then finds D needs A
- It sees it’s already there as an empty object
- It then returns to D an empty object

A solution would be to add the imports at the end of A so it exports first before importing it’s dependencies

Read more:

- [circular imports with webpack returning empty object](https://stackoverflow.com/questions/30378226/circular-imports-with-webpack-returning-empty-object)
