---
title: Importmap
---

# Importmap

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
