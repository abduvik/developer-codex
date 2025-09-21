---
title: dependency vs devDependencies vs peerDependencies
---

# `dependency` vs `devDependencies` vs `peerDependencies`

They are how we define dependencies in Javascript-based projects

"dependencies": Packages required by your application in production.

"devDependencies": Packages that are only needed for local development and testing. NPM won’t install them when someone
installs our dependency.

"peerDependencies": When someone installs our package, our package expects theirs to have these dependencies. If they
don’t have it, NPM will still install them

Watch the video for more explanation

@[youtube](https://www.youtube.com/watch?v=PxJ5wzFPTFU)
