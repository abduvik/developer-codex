---
title: Use import natively
---

# Use `import` natively

Browsers nowadays have native support for the import statement, which allows you to use JavaScript modules in your code
without the need for a build tool or transpiler. This means that you can directly use the import statement in your
JavaScript code and the browser will handle the loading and execution of the modules.

For example, In button.js

```js
export function sayHello() {
  console.log("Hello World");
}
```

We can import button directly to index.js without bundling at all

```js
import { sayHello } from "./src/components/button.js";

sayHello(); //"Hello World"
```

And we can include the above index.js in the index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Project</title>
  </head>
  <body>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

Note that we need to define the type of script tag as module to make sure the browser understands that we can use import
statements

This allows you to organize your code into reusable modules, making it easier to manage and maintain. It is important to
note that not all browsers support this feature, and you should check for browser compatibility before using it in
production.

Read more:

- [import statement by mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
