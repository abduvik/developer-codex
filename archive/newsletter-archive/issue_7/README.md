---
date: 2022-12-26
---

# Issue #7: requestAnimationFrame, Web Streams and CEO-less Companies

Hey Friends,

The past two weeks were relaxing so far, most of my work colleagues took long vacations like most Germans. So, it’s
going to be less stressful and it’s time to reflect on this year and plan for my goals for 2023 🚀

I have big plans for my career like getting into Machine Learning, Data Science, and Cyber Security, and my content
creation to make more videos consistently on my YouTube channel.

Wish you all a good time and prepare your amazing 2023 goals 🎯

## Technical Summaries

### `requestAnimationFrame`

It's part of the Web APIs and it runs a function depending on the refresh rate of the screen (60 Hz, 120 Hz or 144 Hz).
For example for a screen with refresh rate of 120 Hz, it will run the method for 120 time in a second.

The question that comes in mind is what is the difference between it and setInterval. and is that setInterval runs a a
function based on how many times you would like to run and it's inacurate. and if we have multiple setIntervals to do
two animations, they will be out of sync and consume too much GPU power

But requestAnimationFrame will batch those requests and do them all at once depending on the frequency.

Another important related method is cancelAnimationFrame which is like removeEventListner and it's used to cancel an
animation request when we want to stop animating when the DOM element is removed for example.

requestAnimationFrame callback will get the the current timestamp and a group of batched callbacks will get the same
timesatamp. If you also subtract the previous timestamp and current you will get the time period which is the inverse of
the screen frequency. This is important to make sure that your animation don't run faster than needed.

requestAnimationFrame() calls are paused in most browsers when running in background tabs or hidden `<iframe>`s in order
to improve performance and battery life.

More reads:

- [`Window.requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [Why is requestAnimationFrame better than setInterval or setTimeout](https://stackoverflow.com/questions/38709923/why-is-requestanimationframe-better-than-setinterval-or-settimeout)
- [The Hidden World of requestAnimationFrame](https://www.youtube.com/watch?v=zBRqnSiq_VM)

### Web Streams

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

### CEO-less Companies

Co-op companies, also known as cooperatives, are businesses that are owned and operated by a group of people who come
together to meet a common need or goal. These types of companies are typically formed to provide goods or services to
their members, who are also the owners of the business. Co-op companies are based on the principles of democracy,
equality, and solidarity, and profits are typically distributed among the members rather than going to external
shareholders.

Do you think the current dominant company model we have where a CEO holds most of the power is more like a dictatorship?

@[youtube](https://www.youtube.com/watch?v=4M6lrhuiPv0)

## Interesting Links

- [How to Build Software like an SRE](https://www.willett.io/posts/precepts/)
- [You don't (may not) need Lodash/Underscore](https://you-dont-need.github.io/You-Dont-Need-Lodash-Underscore/#/)
- [What is .NET?](https://www.codecademy.com/article/what-is-net)
