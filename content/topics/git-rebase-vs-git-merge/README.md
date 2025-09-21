---
title: Git Rebase vs Git merge
---

# Git Rebase vs Git merge

They are very similar when comes to adding commits from a branch into the current branch. But the difference is that
when you merge, you add the source branch to the top of the current branch, but with rebase, you will add the current
branch’s base on top of the source branch.

Merge will keep the history, but rebase will change it.

Merge will be good when collaborating with other developers so as not to break their local git histories but rebase is
good to keep the git history clean.

But in my opinion, realistically rebase will always become annoying if you work in a multi-developer branch which is the
most common case. And rebase’s value is not comparable to having a good developer experience.

If you are the sole developer for a branch or you still haven’t pushed your commits then it’s okay, otherwise, always
use merge.

Read more:

- [When do you use git rebase instead of git merge](https://stackoverflow.com/questions/804115/when-do-you-use-git-rebase-instead-of-git-merge)
