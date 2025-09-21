---
title: Test Doubles
---

# Test Doubles

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

Read more:

- [Test Double](http://xunitpatterns.com/Test%20Double.html)
- [What's the difference between a mock & stub?](https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub)
