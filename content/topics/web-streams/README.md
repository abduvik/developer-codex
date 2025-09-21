---
title: Web Streams
---

# Web Streams

Web streams are APIs that allow for the delivery of multiple values or parts of a larger value gradually over time. They
can be used to improve the speed of content delivery by handling and processing data bit by bit, allowing for the
rendering of some content before all of the data has been received. Streams offer benefits such as the ability to handle
errors and support cancellation, as well as flow control, which allows the stream to react to the speed of the reader.
The fetch API now includes support for streams, allowing developers to access the underlying stream of a response object
and read it in a variety of formats.

Combining Streams API + Service Workers can yield almost same or even better performance than SSR as we can cache the
App and then use Service workers to stream the content from the server and show it to the user.

Read more:

- [2016 - the year of web streams by Jake Archibald](https://jakearchibald.com/2016/streams-ftw)
