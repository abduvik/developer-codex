---
title: Design by Contract using Typescript
---

# Design by Contract using Typescript

It is a software engineering approach where components (classes, modules, functions) define formal, binding contracts
that specify their mutual obligations and benefits. It was pioneered by Bertrand Meyer in the Eiffel programming
language. The core idea: a component's caller and the component itself have a contract, just like in business. If the
caller satisfies the preconditions, the component guarantees the postconditions. It consists of three parts:

- Precondition What must be true before the operation runs Entry
- Postcondition What must be true after the operation completes Exit
- Invariant What must always remain true for an object's lifetime After construction, before/after every public method

Following example uses Decorators and Typescript

```ts
type ContractPredicate<T, Args extends any[]> = (this: T, ...args: Args) => boolean;

// Precondition Decorator (@Requires)
export function Requires<T, Args extends any[]>(predicate: ContractPredicate<T, Args>, message?: string) {
  return function (originalMethod: (...args: Args) => any, context: ClassMethodDecoratorContext<T>) {
    return function (this: T, ...args: Args) {
      if (!predicate.apply(this, args)) {
        throw new Error(`Precondition violated in ${String(context.name)}: ${message || "Invalid arguments."}`);
      }
      return originalMethod.apply(this, args);
    };
  };
}

// Postcondition Decorator (@Ensures)
export function Ensures<T, Args extends any[], R>(
  predicate: (this: T, result: R, ...args: Args) => boolean,
  message?: string,
) {
  return function (originalMethod: (...args: Args) => R, context: ClassMethodDecoratorContext<T>) {
    return function (this: T, ...args: Args): R {
      const result = originalMethod.apply(this, args);
      if (!predicate.call(this, result, ...args)) {
        throw new Error(`Postcondition violated in ${String(context.name)}: ${message || "Invalid return state."}`);
      }
      return result;
    };
  };
}
```

and then it can be used as following

```ts
class BankAccount {
  public balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Precondition: Deposit amount must be positive
  // Postcondition: New balance must equal old balance + deposit amount
  @Requires<BankAccount, [number]>((_, amount) => amount > 0, "Deposit must be greater than zero")
  @Ensures<BankAccount, [number], void>(function (_, amount) {
    return this.balance > amount;
  })
  deposit(amount: number): void {
    this.balance += amount;
  }

  // Precondition: Withdraw amount must be positive and <= balance
  @Requires<BankAccount, [number]>(function (amount) {
    return amount > 0 && amount <= this.balance;
  }, "Insufficient funds or invalid amount")
  withdraw(amount: number): number {
    this.balance -= amount;
    return this.balance;
  }
}

// Execution test:
const account = new BankAccount(100);
account.deposit(50); // Works perfectly, balance becomes 150
account.withdraw(200); // Throws: "Precondition violated in withdraw: Insufficient funds..."
```
