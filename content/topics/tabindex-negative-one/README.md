---
title: Tabindex=-1
---

# Tabindex=-1

A negative value (usually tabindex="-1") means that the element is not reachable via sequential keyboard navigation, but
could be focused with JavaScript or visually by clicking with the mouse. It's mostly useful to create accessible widgets
with JavaScript.

It helped me when a modal opened and I wanted to close it when keydown Esc but at the same time I didn't want to attach
the event to the body as it's not its concern and divs can’t listen on keydown events. So if you add the negative
tabindex, it can now listen and you can focus it without affecting the normal tab sequence follow in the browser.
