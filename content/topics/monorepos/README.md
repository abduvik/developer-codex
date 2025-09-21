---
title: Monorepos
---

# Monorepos

Monorepo is a repository configuration to avoid having multiple repositories for your project. If you have multiple
packages or components that depend on each other, they usually have similar scripts, commands, and dependencies, then
having a single repository with everything will reduce the number of duplications, and make it easy to access and update
different modules and publish different versions at once. It will dramatically increase your team's productivity.

Here is a quick summary of what needs to be done to allow Monorepos for a Javascript/Typescript project and can work
with Nodejs too:

- Package Management: Enable [npm workspaces mode](https://docs.npmjs.com/cli/v7/using-npm/workspaces) by setting the
  main package.json file `private: true` and adding the `workspaces` to an array of available packages. You can use a
  wildcard `packages/*` to apply for all.

- Typescript: We need to create three tsconfig files; one which will be the main tsconfig file with all needed configs,
  the second one to import these configs inside each project and a third one is used to reference and build all projects
  with a single `tsc --build`. First, create the tsconfig at the top level, and then inside each project use the
  property `extends` and then pass a reference to the main JSON file with the full typescript configs needed. The build
  tsconfig file would be a separate file that has two properties; the property
  [`references`](https://www.typescriptlang.org/docs/handbook/project-references.html) set to point to every project and
  [`files: []`](https://www.typescriptlang.org/tsconfig#files) which is an empty array to avoid building the project
  twice.

- Babel: You can create a main .babelrc file and then reference it inside each projects’ .babelrc with the property
  `extends: <path>`

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

Read more:

- [Javascript and Typescript Monorepos](https://frontendmasters.com/courses/monorepos/)
