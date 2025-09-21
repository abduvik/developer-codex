---
date: 2021-12-23
---

# Issue #2: Git Rebase vs Merge, Software Release Cycle and Keycloak

Quick Update:
I am going to reduce the frequency of the newsletter to be bi-weekly every Thursday so you could receive it consistently
and I would be able to commit to it.

## Technical Summaries

### Git Rebase vs Git merge

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

More
Reading: [When do you use git rebase instead of git merge](https://stackoverflow.com/questions/804115/when-do-you-use-git-rebase-instead-of-git-merge)

### Software Release Life Cycle

By no means this is something official and should be taken with a grain of salt and every company have its own adapted
process and some do all of these steps in a matter of days or even hours especially for web applications

- Alpha: Planning, analysis, development, unit testing, quality testing, and value assurance. Still might be unstable
  and have serious bugs. Software is still inside the organization and it may not contain all features planned for the
  final release. The phase ends with a feature freeze when all is done and ready for thorough beta testing.

- Beta: Can be available publically. Usability testing is done at this stage and more bugs are closed. Closing major
  bugs or blockers.

- Release Candidate: All features are completed and no more features need to be added for the stable release.
  Documentation is done.

- Stable Release: Production release and marks the latest release candidate as done.

- Support: Includes patches and service packs for version maintenance, enhancements, and fixes

- End-of-life: When it’s deprecated and no longer supported but might still be used by customers

More Reading: [Software Release Life Cycle](https://en.wikipedia.org/wiki/Software_release_life_cycle)

### Keycloak

A complete solution to manage user authentication and authorization and it’s very easy to customize. This is really good
for apps that need quick prototyping and don’t have time to create such solutions and at the same time, they need their
data to be away from using cloud authentication services on AWS or GCP.

The only reason you might not use it is if you want to stay away from Java or you don’t have Java experience. Otherwise,
go for it!

More Reading: [Keycloak Main Website](https://www.keycloak.org/)

@[youtube](https://www.youtube.com/watch?v=duawSV69LDI)

## Weekly YouTube Video

Starting a new job, whether it’s the first one or switching companies, it’s always exciting at first but without
preparation and having a target with a defined plan, you might find yourself searching for a new one sooner and trying
to escape it.

We will discuss in this episode from **"Skilled Engineer"** a structured way to control and conquer your new job with
less anxiety and they have helped me with my new position and it will surely help you too.

@[youtube](https://www.youtube.com/watch?v=s7RKvGT6ZJo)
