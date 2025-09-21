---
title: Consumer-Driven Contracts
---

# Consumer-Driven Contracts

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
