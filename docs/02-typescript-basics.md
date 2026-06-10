# TypeScript Basics For Playwright Beginners

This guide teaches only the TypeScript ideas you need before writing beginner Playwright tests. You do not need to memorize everything. Read each section, run the matching example, and come back when a Playwright test uses the same idea.

Run all examples with:

```bash
npm run examples:ts
```

## 1. Variables Using `const` And `let`

### What is it?

A variable stores a value so you can use it later. Use `const` when the value should not be reassigned. Use `let` when the value may change.

### Why do we use it?

Variables make code easier to read and reuse.

### Simple example

```ts
const pageTitle = 'Login';
let retryCount = 0;
retryCount = 1;
```

### Step-by-step explanation

`pageTitle` stores text that should stay the same. `retryCount` starts at `0`, then changes to `1`.

### How it is used in Playwright

You might store a URL, username, page title, or test value before using it in a test.

### Try it yourself

Open `examples/typescript-basics/01-variables.ts` and change the values.

### Common mistake

Trying to reassign a `const` value causes an error.

## 2. Strings

### What is it?

A string is text.

### Why do we use it?

Tests often use text for URLs, labels, buttons, messages, and input values.

### Simple example

```ts
const username = 'qa.user';
const message = `Welcome, ${username}`;
```

### Step-by-step explanation

`username` stores text. The backtick string creates a message that includes the username.

### How it is used in Playwright

You use strings when filling fields, finding text, or checking messages.

### Try it yourself

Open `examples/typescript-basics/02-strings.ts` and change the username.

### Common mistake

Forgetting quotes around text makes TypeScript think the text is a variable name.

## 3. Numbers

### What is it?

A number is a numeric value.

### Why do we use it?

Tests use numbers for counts, timeouts, prices, quantities, and status codes.

### Simple example

```ts
const itemCount = 3;
const total = itemCount + 2;
```

### Step-by-step explanation

`itemCount` stores `3`. `total` stores the result of `3 + 2`.

### How it is used in Playwright

You might check that a page has 3 search results or that an API returns status code 200.

### Try it yourself

Open `examples/typescript-basics/03-numbers.ts` and change the numbers.

### Common mistake

Putting quotes around a number turns it into text, not a number.

## 4. Booleans

### What is it?

A boolean is either `true` or `false`.

### Why do we use it?

Booleans help code make yes-or-no decisions.

### Simple example

```ts
const isLoggedIn = true;
```

### Step-by-step explanation

`isLoggedIn` stores one answer: yes (`true`) or no (`false`).

### How it is used in Playwright

You might check if a checkbox is selected or if an element is visible.

### Try it yourself

Open `examples/typescript-basics/04-booleans.ts` and switch `true` to `false`.

### Common mistake

Writing `'true'` with quotes creates a string, not a boolean.

## 5. Arrays

### What is it?

An array is a list of values.

### Why do we use it?

Arrays help store multiple related values together.

### Simple example

```ts
const browsers = ['chromium', 'firefox', 'webkit'];
```

### Step-by-step explanation

`browsers` stores three strings in one list.

### How it is used in Playwright

You might test several usernames, menu items, or expected messages.

### Try it yourself

Open `examples/typescript-basics/05-arrays.ts` and add another item.

### Common mistake

Array positions start at `0`, so the first item is `browsers[0]`.

## 6. Objects

### What is it?

An object stores related values using names called properties.

### Why do we use it?

Objects keep related test data organized.

### Simple example

```ts
const user = {
  username: 'qa.user',
  password: 'demo-password'
};
```

### Step-by-step explanation

`user.username` gets the username. `user.password` gets the password.

### How it is used in Playwright

You might store login data or expected API response data in an object.

### Try it yourself

Open `examples/typescript-basics/06-objects.ts` and add an `email` property.

### Common mistake

Using the wrong property name gives you the wrong value or `undefined`.

## 7. Functions

### What is it?

A function is a reusable block of code.

### Why do we use it?

Functions prevent repeating the same steps many times.

### Simple example

```ts
function createGreeting(name: string) {
  return `Hello, ${name}`;
}
```

### Step-by-step explanation

The function receives `name`, builds a greeting, and returns it.

### How it is used in Playwright

You might create helper functions for repeated actions like logging in.

### Try it yourself

Open `examples/typescript-basics/07-functions.ts` and call the function with your name.

### Common mistake

Forgetting to call the function means the code inside it will not run.

## 8. Arrow Functions

### What is it?

An arrow function is a shorter way to write a function.

### Why do we use it?

You will see arrow functions often in modern TypeScript and Playwright examples.

### Simple example

```ts
const createLabel = (text: string) => `Button: ${text}`;
```

### Step-by-step explanation

`createLabel` is a function. It receives `text` and returns a new string.

### How it is used in Playwright

Playwright tests commonly use arrow functions inside `test()`.

### Try it yourself

Open `examples/typescript-basics/08-arrow-functions.ts` and change the text.

### Common mistake

Forgetting `=>` means TypeScript will not understand the function.

## 9. Conditions Using `if` And `else`

### What is it?

Conditions let code choose between different paths.

### Why do we use it?

Tests sometimes need to react to a value.

### Simple example

```ts
const statusCode = 200;

if (statusCode === 200) {
  console.log('Request passed');
} else {
  console.log('Request failed');
}
```

### Step-by-step explanation

The code checks whether `statusCode` is exactly `200`. If it is, the first message prints. Otherwise, the second message prints.

### How it is used in Playwright

You may use conditions in setup code or examples, though Playwright assertions are often better inside tests.

### Try it yourself

Open `examples/typescript-basics/09-conditions.ts` and change the status code.

### Common mistake

Using `=` instead of `===` changes a value instead of comparing it.

## 10. Loops

### What is it?

A loop repeats code for each item in a list.

### Why do we use it?

Loops help avoid writing the same line many times.

### Simple example

```ts
const menuItems = ['Home', 'Products', 'Contact'];

for (const item of menuItems) {
  console.log(item);
}
```

### Step-by-step explanation

The loop takes one item at a time from `menuItems` and prints it.

### How it is used in Playwright

You might check several labels, links, or test data values.

### Try it yourself

Open `examples/typescript-basics/10-loops.ts` and add another menu item.

### Common mistake

Changing the array while looping over it can make results confusing.

## 11. Basic TypeScript Types

### What is it?

Types describe what kind of value a variable should hold.

### Why do we use it?

Types help catch mistakes before the code runs.

### Simple example

```ts
const username: string = 'qa.user';
const retryCount: number = 2;
const isActive: boolean = true;
```

### Step-by-step explanation

Each variable has a type after `:`. TypeScript checks that the value matches the type.

### How it is used in Playwright

Types help you understand what values Playwright methods expect and return.

### Try it yourself

Open `examples/typescript-basics/11-basic-types.ts` and change one value.

### Common mistake

Assigning the wrong kind of value, such as putting text into a `number`.

## 12. `async` And `await`

### What is it?

`async` and `await` help TypeScript wait for work that takes time.

### Why do we use it?

Browser actions and API requests do not finish instantly.

### Simple example

```ts
async function loadMessage() {
  return 'Page loaded';
}

async function main() {
  const message = await loadMessage();
  console.log(message);
}

main();
```

### Step-by-step explanation

The functions are marked `async`. `await` waits for the result before moving to the next line inside `main()`.

### How it is used in Playwright

Most Playwright actions use `await`, such as `await page.goto(...)` and `await page.click(...)`.

### Try it yourself

Open `examples/typescript-basics/12-async-await.ts` and change the returned message.

### Common mistake

Forgetting `await` can make code continue before the browser action finishes.

## 13. Imports And Exports

### What is it?

Exports let one file share code. Imports let another file use that code.

### Why do we use it?

Imports and exports keep projects organized as they grow.

### Simple example

```ts
export const appName = 'Demo App';
```

```ts
import { appName } from './shared-data';
```

### Step-by-step explanation

One file exports `appName`. Another file imports it by name.

### How it is used in Playwright

You might export test data, page helpers, or reusable functions from separate files.

### Try it yourself

Open `examples/typescript-basics/13-imports-exports.ts` and `examples/typescript-basics/shared-data.ts`.

### Common mistake

Importing from the wrong file path causes TypeScript to fail.

## What To Do Next

After you understand these basics, you are ready for beginner Playwright UI tests in a later phase.
