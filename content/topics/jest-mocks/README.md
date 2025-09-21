---
title: Jest mocks
---

# Jest mocks

For unit tests instead of including a module that has long nested children that we don’t care about, you can use the
`mock` function to mock these internal libraries

```js
jest.mock("../UserListContainer", () => () => "UserListContainer");
```

Just make sure that the path is relative to the testing file and not the component

Read more:

- [Jest Mock Modules](https://jestjs.io/docs/jest-object#mock-modules)
