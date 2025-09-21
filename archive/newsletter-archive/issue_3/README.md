---
date: 2022-01-06
---

# Issue #3: JS Imports, TabIndex and NFTs

## Technical Summaries

### Default Import vs Alias Import

For example, it’s the difference between

```js
import react from "React";

// vs

import * as react from "React";
```

The first one will only import the default exports but the second one will import all exports.

The correct one to use is the latter one per what Dan said and is also mentioned in the React Docs

[Dan Abramov Tweet](https://twitter.com/dan_abramov/status/1308739731551858689?lang=en)

### Tabindex=-1

A negative value (usually tabindex="-1") means that the element is not reachable via sequential keyboard navigation, but
could be focused with JavaScript or visually by clicking with the mouse. It's mostly useful to create accessible widgets
with JavaScript.

It helped me when a modal opened and I wanted to close it when keydown Esc but at the same time I didn't want to attach
the event to the body as it's not its concern and divs can’t listen on keydown events. So if you add the negative
tabindex, it can now listen and you can focus it without affecting the normal tab sequence follow in the browser.

### What are NFTs?

I am sure you have heard this word like a thousand times and still wonder what it is. In the very short term, you
basically own a hash that represents a certain art like images for example and everyone agrees that you own that hash
code. But the art itself is something that can be copied or used by anyone.

But then why it’s being sold very expensive you may ask? Imagine if I told you I will sell you some sand, you will say
no thank you but if I told you this sand was in the hands of let’s say Queen Elizabeth or Elon Musk, probably you would
assign some value to it, let’s say $10 and then you go to sell it to someone else to make a difference and so on.

That’s why it’s just another type of speculative asset. The bread you bake is worth to you a hundred times over the one
you buy from the bakery because it has a story to you.

You can watch this video to get more details if you are interested

@[youtube](https://www.youtube.com/watch?v=Oz9zw7-_vhM)

### How to Maintain Focus at Work for Software Developers

Instant notifications, ad-hoc calls, slack messages, emails... an overwhelming load on our human brain to stay focused
during a typical workday as software developers.

With all of these distractions, we will try to abstract some processes to lower their effects and how to live with them
as they won't disappear any time soon.

Check out the new video from "Skilled Engineer" series

@[youtube](https://www.youtube.com/watch?v=j6uNhhoyTLY)

or [read the full article](https://abduvik.medium.com/how-to-maintain-focus-at-work-for-software-developers-1248a084ea64).

Summary:

- Balanced-life in Sport, Nutrition, and Sleep
- Have 2 golden hours
- Snooze with Pomodoro
- Work with intention
- Have discipline by tracking progress
