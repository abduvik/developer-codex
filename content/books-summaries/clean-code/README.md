---
title: Clean Code
---

# Clean Code

## YouTube Video

## Summary

### The Why

Messy code exists for many reasons, maybe you wanted to go fast or the promised features are late. This leads to a mess
which can slow you on the long run.

Creating a new team to re-write the project again won't solve it as both the new and current team will be in a race to
keep the changes which may take forever. That's why keeping the codebase clean is important for project survival.

Programmers should improve their sense to spot bad code and improve it.

Clean code should be easy to read and extend and help other developers to understand the code. It should be like a
well-written prose.

### Meaningful names

- We name everything and well-named because if things are named badly it will be hard to find and understand.
- Use meaningful names that reveals the intent meaning of the code.
- Use short meaningful names.
- Avoid using abbreviations.
- Don't use data structure names unless they really are, so for example don't call a list of accounts `accountList`
  unless it is actually a List struct.
- If two variables are similar don't call them `a1` and `a2` but rather try to find a meaningful distinction between
  them. This is called "Word Noise".
- Avoid naming that is too similar like `getActiveAccount()`,`getActiveAccounts()` and `getActiveAccountInfo()`.
- Make the names pronounceable so people and developers can use it clearly while in meetings and not something like
  `genymdhms(generation date, year, month, day, hour, minutes and seconds)`.
- Use letters/short names only for local and global names should be easy to search and not find many instances of it.
- Classes should be names and methods should be verbs for example `account->getActiveAccount()`.
- Use one word per concept, like don't have `fetch`, `retrieve`and `get`.

### Functions

- Function need to be small and follow SRP (Single Responsibility Principle) which means that a function should as much
  as possible to do only one thin and do it well. Simple way to know as well if it's small enough is if extracting more
  internal code would mean restatement of this implementation.
- Reading a function should be like reading a narrative and everything is on the same abstraction level.
- It is better to change switch statements with polymorphism as every class would have its own implementation rather
  than always changing the function when a new child class is presented. So we pass an abstract class to the function
  and each child class would have its own implementation.
- Max arguments should be three and more than that use classes arguments instead.
- Flag (boolean) arguments imply that the function is doing more than one thing.
- Side effects inside functions should be avoided unless it's the actual intent of a function. This is to reduce the
  cognitive load of the developer and increase predictability of the code.
- Output argument should be avoided. For example passing by reference instead of returning a value.
- Separate functions that is doing something from the ones that are getting something, basically Command-Query
  separation.
- Throw exceptions instead of returning errors so that happy path is separated from error handling.
- Avoid duplication and don't repeat yourself.
- Functions are the verbs and classes are the nouns.

### Comments

- Helpful comments are good, old and unmaintained comments are super misleading.
- Comments are only there to compensate the failure to express the meaning through good code.
- Inaccurate comments are far worse than no comment at all.
- Always think if you can express the comment meaning into the code instead.
- Comments for: TODOs, Legal, Warnings, 3rd party library clarifications, public api description are justified.
- Commenting out code is bad as other developers might think it's there for a reason while it isn't. Delete it if not
  needed and use version control to get it back if needed.

### Formatting

- Code formatting is about communicating the right message correctly something like Developer experience.
- Use extra line to separate between concepts, just like spacing in UX.
- All rules are great if they are consistent along the project, so it's better to automate it using tools. Use linting
  tools to enforce the rules.
- Concepts related to each should be under the same directory to avoid hopping between files in different directories.
- Functions calling each other should be close too.
- Shorter lines is better, with a max of 120 characters.
- Indentation is important to understand the hierarchy of the code.
- If you have a function that has a simple `return` method, don't write it on a single line and rather use proper form
  of the code.
- Team rules are above all other rules.

### Objects and Data Structure

- Hiding implementation is more about enforcing abstraction instead of allowing spaghetti concerns.
- Use API Interface and hide private variables.
- Separate your data from your methods, your data structures from your objects.
  - Data structures should represent the data and objects have methods to operate and change the data.
  - Objects hide their abstractions and expose methods to operate on this data.
  - Data Structures expose their data and have no meaningful methods.
  - In case it was a hybrid, it's hard to add new methods and new data structures without doing multiple changes and
    making the code harder to read.
  - Also read
    [Whats the difference between objects and data structures?](https://stackoverflow.com/questions/23406307/whats-the-difference-between-objects-and-data-structures)
  - Abstraction is about giving methods that manipulates the _essence_ of the data and not the data itself.
- Data Transfer Objects (DTO) is a class of data structure that has public variables. They are very useful when
  communicating between services like the code and databases.

### Error Handling

- Error handling is critical but shouldn't obscure the main code logic.
- Throw errors rather than returning error codes from the method.
- Write a good message in the error, so you can track and trace it easily.
- Avoid returning or passing nulls (its the reason for many applications halts), throw an exception or return a "Special
  Case Object" instead and the latter is better.
- Have a global error handler to catch all errors and handle them in a single place if needed.

### Boundaries

- If you are passing 3rd party data structures, it's better to encapsulate them with a class/interface so your code
  would be decoupled in case this library tries to change its behavior, including the API of the language like JS API.
- Writing learning tests when integrating the new library while learning it would also help when a new version is
  released we can test it with them.
- Mock interfaces could help unblock dependent teams.

### Unit tests

- Testing code should be as clean as production code and adhere to all software standards.
- The most important thing about tests is readability, it's even more important than in production code.
- Tests should follow the _Build-Operate-Check_ pattern.
- Build a set of functions that will help with the tests. It will be organically built, no need to plan it from the
  start. Basically we will build a testing DSL (Domain Specific Language).
- For efficiency, we can have dual standards for dev and prod environments since in dev environments we may have more
  resources than in production like when developing embedded systems for example.
- Test one concept per test.
- Tests need to be **Fast** so that you run them frequently, **Independent** of other tests, **Repeatable** to run in
  any environment, **Self-validating** with a final boolean output to determine if it failed or successes so no need to
  read in log files and compare them manually.
- Write the tests just before the production code to make sure you write easier to test production code (TDD).
- Don't let your tests rote, if they rot, your code with rot too.

### Classes

- Order inside classes should be: public static variables, private static variables, public instance variables (should
  rarely have it), then public methods and every public methods is followed by any private method used. This would make
  reading a class like a newspaper.
- Classes should also have limited responsibilities to avoid God-like class. Single Responsibility is the most important
  design pattern for classes, and it's also the most abused. The better SRP is the better usability and ease of control
  in the code, divide and conquer basically.
- The higher cohesion between variables and methods of a class the better it means it acts as a single logical unit
  which is better. The opposite means that there is a hidden class inside our main class.
- Designing classes should also be easy to change and modify, we don't need to check all methods of a class when we need
  to add a new method.
- Classes should depend on abstractions and not concrete implementation to allow ease of changing, polymorphism and
  passing them to other classes or when importing them from other libraries or packages.

### Systems

- We should separate the creation of objects from using them. Dependency Injection is the best way to do so as the
  dependencies are created on demand for objects in a separate container.
- Use Aspect-Oriented Programming to separate cross-cutting concerns from where they are used. In JS, it's done mainly
  by using decorators.
  - Aspect-Oriented Programming: An _aspect_ is a feature that cuts across multiple classes, like logging, security,
    transactions, etc. We need to separate these concerns from the main code to make it easier to read and manage.

// Continue here

### Emergence

Simple design rules

- Runs all the tests
- Contains no duplication
- Express the intent of the programmer
- Minimizes the number of classes and methods

### Concurrency

Concurrency separates the what and when for code execution which increases the throughput of the application. It's only
needed for high-traffic apps otherwise it's useless and maybe harmful. Writing clean concurrency is to avoid
unpredictable outcomes due to many many code execution paths. Apply SRP, limit data sharing, independent threads.
Another problem is that threads will compete on resources which require writing good algorithims to avoid deadlocks.
Models of concurrency are Producer-Consumer, Readers-Writers, Dining Philosophers.

Make concurrent code as small as possible, write graceful shutdown code for child threads.

When testing concurrent code, it's complex so try testing for failure and make it more configurable to change order,
setting, environment and treat weird failures as a potential bug not a mistake.

Don't ignore system failures as one-offs, the more it's used the high count it will happens, it's basic probablility.
Check first the code is running normally before trying threading. Test with more threads that processors to increase
switching and find bugs easier. Different OS run the code differently. Use jiggling strategies to find weird or
unexpected behaviour due to multi-threading.

Client routines shouldn't manage shared data/state

### Successive Refinement

Writing the code that just works is bad, there should multiple successive refinement to avoid it being rotten. (skipped
this chapter)

### Smells and Heuristics

This chapter contains many things to do or avoid and I believe should be read all of it. Some ideas are:
