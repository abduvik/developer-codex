---
title: Async Iterators and Async Generators
---

# Async Iterators and Async Generators

Every Array and Object in Javascript has the `Symbol.iterator` property that looping methods use to loop over items in
them. The `Symbol.iterator` is just a function that returns an Iterator which has a method `next` that when called it
either returns an item `{value: <item>, done: false}` or `{done: true}`.

For example, this is a simplified logic for it

```ts
const array = [1, 2, 3];
let index = 0;

const iterator = {
  next: () => {
    if (index >= array.length) return { done: true };
    return {
      value: array[index++],
      done: false,
    };
  },
};
```

and this is how it actually exists

```ts
const array = [1, 2, 3, 4];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

but there is also an async iterator with `Symbol.asyncIterator` which is exactly the same but returns the object
encapsulated in a Promise

```ts
const array = [1, 2, 3];
let index = 0;

const asyncIterator = {
  next: () => {
    if (index >= array.length) return Promise.resolve({ done: true });
    return Promise.resolve({ value: array[index++], done: false });
  },
};

const asyncIterable = {
  [Symbol.asyncIterator]: () => asyncIterator,
};
```

We can then loop over it using the `for await`, for example below is a `AsyncArray` that we will use `for await` to loop
over it

```ts
class AsyncArray {
  constructor(items, delayMs = 200) {
    this.items = items;
    this.delayMs = delayMs;
  }

  [Symbol.asyncIterator]() {
    let index = 0;
    const items = this.items;
    const delay = this.delayMs;

    return {
      async next() {
        if (index >= items.length) {
          return { done: true };
        }

        // Simulate async work (e.g., fetch, read, compute)
        await new Promise((resolve) => setTimeout(resolve, delay));

        return {
          value: items[index++],
          done: false,
        };
      },
    };
  }
}

// Usage
(async () => {
  const asyncItems = new AsyncArray(["alpha", "beta", "gamma"], 300);

  for await (const item of asyncItems) {
    console.log(`→ ${item}`);
  }

  console.log("Finished");
})();
```

This structure now looks a lot like using generators which can then be mixed together to make Async Generators

```ts
// Async generator yielding values with simulated delay
async function* createAsyncIterable(items) {
  for (const item of items) {
    // Simulate async work (e.g., API call, file read, database query)
    await new Promise((resolve) => setTimeout(resolve, 300));
    yield item;
  }
}

// Usage with for await...of
async function processItems() {
  const data = ["apple", "banana", "cherry", "date"];
  const asyncIterable = createAsyncIterable(data);

  console.log("Starting async iteration...\n");

  for await (const item of asyncIterable) {
    console.log(`Received: ${item} at ${new Date().toLocaleTimeString()}`);
  }

  console.log("\nDone!");
}

// Run it
processItems().catch(console.error);
```

Generators when creates something like this

```ts
async function* myGenerator() {
  yield 1;
  yield 2;
}

const gen = myGenerator();

// The generator object IS its own async iterator
console.log(gen[Symbol.asyncIterator]() === gen); // true
```

Read more:

- [The async iterator and async iterable protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)
- [AsyncIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator)
- [Understanding Async Iterators in JavaScript ](https://dev.to/_staticvoid/understanding-async-iterators-in-javascript-aog)
