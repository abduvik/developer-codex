---
title: requestAnimationFrame
---

# `requestAnimationFrame`

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
