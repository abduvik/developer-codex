---
date: 2023-01-23
---

# Issue #8: Trusted Events, Consumer-Driven Contracts, Native Import and Technical Debt

Hey Friends,

Hope you all had a good time the past weeks and managed to start hitting those 2023 goals list. I missed issuing a
newsletter the past week but for a good reason as I gave all my energy to get my free Advanced React Course published on
YouTube, also tried out my Play Station 5 as I finally got it :D

Wish you all a nice and productive week ❤️

## Technical Summaries

### Trusted Events: The Anti-bot web solution

Trusted Events: The Anti-bot web solution Bots are automated software programs that are designed to perform tasks on the
internet. They can be used for a wide range of purposes, such as scraping websites for information, posting spam
comments, or simulating human behavior on social media. While bots can be useful in certain situations, they can also
cause problems by overwhelming websites with traffic, spreading misinformation, or stealing sensitive information.

Javascript Web APIs support isTrusted which is a read-only prop and can be used in combination with pageX and pageY to
enforce checking whether an event is user-generated or not. Here is a sample of this code

```js
function isTrustedEvent(event) {
  if (!event) {
    return false;
  }

  if (event.isTrusted === true) {
    return true;
  }

  return event.pageX !== 0 || event.pageY !== 0;
}
```

### Consumer-Driven Contracts

Consumer-driven contracts help ensure that the interactions between different components of a software system are
correct and consistent. This is particularly important in the context of microservices, where a single application may
be composed of many different services that communicate with each other through APIs.

In a consumer-driven contract, the consumer of an API defines the contract that specifies the expectations for the
provider of the API. This contract typically includes things like the input and output parameters of the API, as well as
any constraints or requirements on the behavior of the provider. The provider then implements the API in such a way that
it meets the contract defined by the consumer.

This approach has several benefits. First, it allows for more flexible and scalable testing, as the consumer can easily
switch between different providers without having to rewrite their tests. This is because the consumer's tests are based
on the contract, rather than the specific implementation of the provider. Second, it allows for more collaboration
between the consumer and the provider, as they can work together to define the contract and ensure that it accurately
reflects the needs of the consumer.

Overall, consumer-driven contracts help to ensure that the interactions between different software components are
correct and consistent, which is essential for the development of robust and scalable microservice-based systems.

Read more:

- [Consumer-Driven Contracts: A Service Evolution Pattern](https://martinfowler.com/articles/consumerDrivenContracts.html)

### Community Share: Technical Debt by [Ahmed Hassanein](https://ahmedhassanein87.medium.com/)

In his awesome blog post, Ahmed shares how we can approach solving technical debt as it should be taken seriously and
dealt with in a timely manner to avoid rooting the codebase and it is important to recognize when it is ok to leave some
technical debt and when it is necessary to take the time to address it.

A few tips are:

- Include the product owner early in the process and rally your team for support

- Have a meeting to discuss the pain points caused by technical debts and what are the logical approaches to solve them.

- Create sub-tasks to detail the technical debt so we have a tracked ticket to solve them. Don’t solve them on-spot to
  avoid consuming time.

- When the time for work planning arrives, vote to tackle them and hopefully you already have your team’s support

- Repeat the cycle as technical debt is a long-term commitment and won’t be solved in one day

Read the full article:

- [Technical debt: How to kill the weeds in your codebase garden!](https://medium.com/front-end-weekly/technical-debt-how-to-kill-the-weeds-in-your-codebase-garden-9238a47f750e)

::: tip Let's spread knowledge ❤️
Do you write tech articles? If you're interested in having your content shared with a wider audience, please send me
your links and I'll attach a summary for it here.
:::

### Use `import` natively

Browsers nowadays have native support for the import statement, which allows you to use JavaScript modules in your code
without the need for a build tool or transpiler. This means that you can directly use the import statement in your
JavaScript code and the browser will handle the loading and execution of the modules.

For example, In button.js

```js
export function sayHello() {
  console.log("Hello World");
}
```

We can import button directly to index.js without bundling at all

```js
import { sayHello } from "./src/components/button.js";

sayHello(); //"Hello World"
```

And we can include the above index.js in the index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Project</title>
  </head>
  <body>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

Note that we need to define the type of script tag as module to make sure the browser understands that we can use import
statements

This allows you to organize your code into reusable modules, making it easier to manage and maintain. It is important to
note that not all browsers support this feature, and you should check for browser compatibility before using it in
production.

Read more:

- [import statement by mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
