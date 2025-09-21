---
title: Default Import vs Alias Import
---

# Default Import vs Alias Import

For example, it’s the difference between

```js
import react from "React";

// vs

import * as react from "React";
```

The first one will only import the default exports but the second one will import all exports.

The correct one to use is the latter one per what Dan said and is also mentioned in the React Docs

[Dan Abramov Tweet](https://twitter.com/dan_abramov/status/1308739731551858689?lang=en)
