---
date: 2023-08-20
---

# Issue #14: UUID, SearXNG and Raspberry Pi

¡Hola!

You might have noticed that the newsletter is now under a new domain “[justenough.dev](justenough.dev)“. That’s because
I am launching my
knowledge base into a website instead of keeping it private 🚀

You can now visit it here and check out content for courses and backlog for this newsletter. Soon I will open also the
source code for everyone to contribute 👨‍💻

Let’s strengthen our Collective Knowledge 💪

## Technical Summaries

### UUID

It is a 128-bit identifier standardized by the Open Software Foundation (OSF) to create unique identifiers for digital
objects. UUIDs are commonly used in various information systems and are particularly useful in distributed systems where
unique identifiers are needed without central coordination.

UUIDs are generated using algorithms designed to ensure uniqueness across space and time, even in distributed systems
where multiple UUIDs might be generated concurrently. The structure of a UUID is standardized, consisting of 32
hexadecimal digits displayed in five groups separated by hyphens, like this: 8-4-4-4-12, where each digit represents
four bits.

There are several versions of UUIDs, each generated using different algorithms, and they have different properties and
intended uses:

- **Version 1 (UUID based on timestamp and MAC address)**: This version uses the current timestamp and the MAC address
  of the computer generating the UUID to create a unique identifier. It is primarily used in scenarios where uniqueness
  and time-based sorting are essential.
- **Version 2 (DCE security version)**: Similar to version 1 but with modifications to include POSIX UID/GID.
- **Version 3 (MD5 hash of a namespace and name)**: This version generates UUIDs based on a namespace identifier and a
  name. It uses the MD5 hashing algorithm to produce the UUID. This version is deterministic; given the same namespace
  and name, it will always produce the same UUID.
- **Version 5 (SHA-1 hash of a namespace and name)**: Similar to version 3 but uses the SHA-1 hashing algorithm instead
  of MD5. Like version 3, it is deterministic.
- **Version 4 (Randomly generated UUID**): This version generates UUIDs using random or pseudo-random numbers. It
  provides a high probability of uniqueness. It is widely used in various applications where uniqueness is the primary
  concern.

The differences between these versions primarily lie in the algorithms used for generation, the sources of randomness,
and the properties of the resulting UUIDs, such as determinism and uniqueness guarantees. Each version is suitable for
different use cases depending on the requirements for uniqueness, determinism, and collision resistance.

Read more:

- [Universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- [The effect of Random UUID on database performance](https://www.youtube.com/watch?v=OAOQ7U0XAi0)
- [How Shopify’s engineering improved database writes by 50% with ULID](https://www.youtube.com/watch?v=f53-Iw_5ucA)

### SearXNG

Did you know that each search entry you make on Google is stored and used to build a profile about you? and that Google
is using this to sell your data to advertisers or even to governments intelligence agencies?

That's why SearXNG is here to help you. SearXNG is a privacy-respecting search engine that doesn't track you. It is
an open source meta-search engine that aggregates results from more than 70 search services. It is a great alternative
to Google and other search engines. Also, it's much better to bypass results censorship and manipulation by these big
tech companies.

You can use one of the [public instances](https://searx.space/) or host your own instance.

Let's De-Googlify our lives!

Read more:

- [SearXNG on GitHub](https://github.com/searxng/searxng)

## Videos of the Week

### Blue Light Glasses: A Waste of Money? Explained by an MD

@[youtube](https://www.youtube.com/watch?v=h8feWf7X750)

### Why Corporate America Is Obsessed With "Company Culture"

@[youtube](https://www.youtube.com/watch?v=88SGfykwt8g)
