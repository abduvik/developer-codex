---
title: "Trusted Events: The Anti-bot web solution"
---

# Trusted Events: The Anti-bot web solution

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
