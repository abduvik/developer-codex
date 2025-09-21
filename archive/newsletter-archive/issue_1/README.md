---
date: 2021-12-16
---

# Issue #1: Monorepos, Test-Doubles, Jest Mocks

Thanks for subscribing to my newsletter ❤️
Although I have promised to start it a while ago,
I now have more time to return back creating and posting content starting from today!
Every Thursday, there will be a new newsletter sent, so keep tuned and tell your friends 😊

## Technical Summaries

### Monorepos

Monorepo is a repository configuration to avoid having multiple repositories for your project. If you have multiple
packages or components that depend on each other, they usually have similar scripts, commands, and dependencies, then
having a single repository with everything will reduce the number of duplications, and make it easy to access and update
different modules and publish different versions at once. It will dramatically increase your team's productivity.

Here is a quick summary of what needs to be done to allow Monorepos for a Javascript/Typescript project and can work
with Nodejs too:

- Package Management: Enable [npm workspaces mode](https://docs.npmjs.com/cli/v7/using-npm/workspaces) by setting the
  main package.json file `private: true` and adding
  the `workspaces` to an array of available packages. You can use a wildcard `packages/*` to apply for all.

- Typescript: We need to create three tsconfig files; one which will be the main tsconfig file with all needed configs,
  the second one to import these configs inside each project and a third one is used to reference and build all projects
  with a single `tsc --build`. First, create the tsconfig at the top level, and then inside each project use the
  property `extends` and then pass a reference to the main JSON file with the full typescript configs needed. The build
  tsconfig file would be a separate file that has two properties; the
  property [`references`](https://www.typescriptlang.org/docs/handbook/project-references.html) set to point to every
  project and [`files: []`](https://www.typescriptlang.org/tsconfig#files) which is an empty array to avoid building the
  project twice.

- Babel: You can create a main .babelrc file and then reference it inside each projects’ .babelrc with the
  property `extends: <path>`

- ESLint: Same like Babel we create `.eslintrc` file but on the root directory as IDEs tend to prefer them on the root
  to enforce the rules and then for each project you can create an internal config `.eslintrc` file and use the `extend`
  property.

- Lerna: It provides good tooling for Monorepos like running a certain command across all repositories, and linking
  between packages

- Scripty: Tool to manage scripts inside package.json and unify all of them in shell file instead of having a long
  command in package.json file.

- commitlint: In a Monorepo where many teams work together, it’s a great idea to unify how commits are made and their
  format and also supports automatic changelog. Using Lerna with commitlint and husky will do the required things and
  setup is very easy. [Follow this link](https://github.com/conventional-changelog/commitlint).

### Test Doubles

@[youtube](https://www.youtube.com/watch?v=BNXPRIscfQ8)

We know tests contain E2E, Integration, and Unit tests. We use test doubles when we have indirect inputs (like queries),
indirect outputs (like sending events to events stream or when you call API), or slow tests (when you call the server or
the database or over the network). These mocks can have different types:

- Mocks: This is an object that you record what you do to it and record data and you can verify what has been done to
  the mock object. It’s more for testing behaviors.

- Stubs: Are simple and they provide indirect inputs for the system. It’s more for testing the state. Stubs never fail a
  test but mocks can (like out of order process). You assert against mocks but not against Stubs.

- Spies: They have a Call log, a Response list, and State Access. They are stubs but with a call log and they intercept
  real pieces of code.

- Dummies: Just values holder

- Fakes: replace real implementation with a fake implementation to simulate situations or for making tests faster. They

> Note: across the community, the naming might be different and not unified. It’s enough to get the idea about them and
> use the proper construct

### Jest mocks

For unit tests instead of including a module that has long nested children that we don’t care about, you can use
the `mock` function to mock these internal libraries

```js
jest.mock("../UserListContainer", () => () => "UserListContainer");
```

Just make sure that the path is relative to the testing file and not the component

## Useful Links

- [Javascript and Typescript Monorepos](https://frontendmasters.com/courses/monorepos/)
- [Open Source Alternatives](https://www.btw.so/open-source-alternatives/)
- [What's the difference between a mock & stub?](https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub)
- [Test Double](http://xunitpatterns.com/Test%20Double.html)
- [Jest Mock Modules](https://jestjs.io/docs/jest-object#mock-modules)

## Weekly YouTube Video

@[youtube](https://www.youtube.com/watch?v=clW97khzwEo)
