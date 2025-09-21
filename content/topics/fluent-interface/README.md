---
title: Fluent Interface
---

# Fluent Interface

It’s the concept of creating a more “Fluent” code that is easier to read by chaining methods. Here, methods on their own
don’t show their intent but chaining them shows a more declarative meaning.

The best examples are: LINQ queries in C#, Jest & jQuery in Javascript, and jMock in Java.

```dotnet
IEnumerable<string> query = translations
  .Where(t => t.Key.Contains("a"))
  .OrderBy(t => t.Value.Length)
  .Select(t => t.Value.ToUpper());
```

Read More:

- [Fluent Interface by Martin Fowler](https://martinfowler.com/bliki/FluentInterface.html)\
- [Fluent Interface on Wikipedia](https://en.wikipedia.org/wiki/Fluent_interface)
