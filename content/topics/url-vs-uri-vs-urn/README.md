---
title: URL vs URI vs URN
---

# URL vs URI vs URN

This topic might be very technical but it explains the different names and what are the different parts used to find a
resource on the internet.

Let's take the following:

```text
https://john.doe@www.example.com:123/form/questions/?tag=networking&order=news#top
```

It consists of:

- `https`: Scheme. This can be HTTP, HTTPS, FTP, MAILTO, IRC, FILE, etc
- `john.doe`: Userinfo
- `www.example.com`: host
- `123`: Port
- `john.doe@www.example.com:123`: Authority
- `/form/questions`: Path
- `?tag=networking&order=news`: Query
- `#top`: fragment

This full thing is called a Universal Resource Locator (URL). It's used to locate exactly where is the resource.

Meanwhile, Universal Resource Identifier (URI) is used to uniquely identify a resource but not necessarily how to locate
it. So, URL is just a URN + Scheme (how to locate a resource)

Uniform Resource Name (URN) are names like URI but they should be unique across space and time. They are more regulated
and they usually start with the prefix `urn:`.

Read more:

- [The Real Difference Between a URL and a URI](https://danielmiessler.com/p/difference-between-uri-url/)
- [What is the difference between a URI, a URL, and a URN?](https://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn)
- [Why is URN one of more popular formats used to uniquely identify the resource?](https://stackoverflow.com/questions/2135450/why-is-urn-one-of-more-popular-formats-used-to-uniquely-identify-the-resource)
