---
title: DOMParser
---

# DOMParser

`DOMParser` is used for converting strings into DOM elements aka. parsing HTML string into a structured document using
the `parseFromString` method and it will return a Document object which we can then use `adoptNode` to transfer a node
from one document to another or use `cloneNode` to create a copy of a node within a document.

It’s similar to `innerHTML` but it’s safer as it doesn’t run the JS Code inline of the string which allows also to do
transformations before `appendChild` it to the current Document.

```js
// Create an HTML string
const htmlString = "<div><p>Hello, DOMParser!</p></div>";

// Create a new DOMParser
const parser = new DOMParser();

// Use the parseFromString method to parse the HTML string
const parsedDocument = parser.parseFromString(htmlString, "text/html");

// Get the first element from the parsed document
const parsedNode = parsedDocument.body.firstChild;

// Get the parent element in the current document where the parsed node will be appended
const parentElement = document.getElementById("parent");

// Adopt the parsed node to the current document
const adoptedNode = document.adoptNode(parsedNode);

// Append the adopted node to the parent element
parentElement.appendChild(adoptedNode);
```

Read more:

- [`DOMParser` by mdn](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
- [`document.adoptNode` by mdn](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode)
- [`document.cloneNode` by mdn](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
