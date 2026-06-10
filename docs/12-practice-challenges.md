# Practice Challenges

These challenges help you practice the skills from the repository without showing the full answer beside the exercise. Try the challenge first, then compare your work with the examples in the `solutions/` folder when you are ready.

## TypeScript Practice

## Create A Username Variable

### Difficulty
Beginner

### Goal
Create a variable that stores a username.

### What You Will Practice
- `const`
- Strings
- Console output

### Steps
1. Create a new TypeScript file.
2. Create a `const` named `username`.
3. Store the value `standard_user`.
4. Print the username.

### Suggested File Location
`examples/typescript-basics/practice-username.ts`

### Hint
Use quotes for text values.

### How to Run It
```bash
npx tsx examples/typescript-basics/practice-username.ts
```

### Expected Result
The terminal prints the username.

## Store Products In An Array

### Difficulty
Beginner

### Goal
Store multiple product names in one variable.

### What You Will Practice
- Arrays
- Strings
- Accessing array items

### Steps
1. Create an array named `products`.
2. Add three product names.
3. Print the first product.

### Suggested File Location
`examples/typescript-basics/practice-products.ts`

### Hint
Array positions start at `0`.

### How to Run It
```bash
npx tsx examples/typescript-basics/practice-products.ts
```

### Expected Result
The terminal prints the first product name.

## Loop Through Products

### Difficulty
Beginner

### Goal
Print each product from an array.

### What You Will Practice
- Arrays
- `for...of` loops

### Steps
1. Create an array of products.
2. Use a loop to read each product.
3. Print each product.

### Suggested File Location
`examples/typescript-basics/practice-loop.ts`

### Hint
`for (const product of products)` is a readable loop for beginners.

### How to Run It
```bash
npx tsx examples/typescript-basics/practice-loop.ts
```

### Expected Result
Each product appears on its own line.

## Create A User Object

### Difficulty
Beginner

### Goal
Create an object that stores user details.

### What You Will Practice
- Objects
- Properties
- Basic types

### Steps
1. Create an object named `user`.
2. Add `username`, `password`, and `isLockedOut`.
3. Print the username.

### Suggested File Location
`examples/typescript-basics/practice-user-object.ts`

### Hint
Use `user.username` to read the username property.

### How to Run It
```bash
npx tsx examples/typescript-basics/practice-user-object.ts
```

### Expected Result
The terminal prints the username from the object.

## Write A Reusable Function

### Difficulty
Beginner

### Goal
Create a function that returns a full name.

### What You Will Practice
- Functions
- Parameters
- Return values

### Steps
1. Create a function named `getFullName`.
2. Add `firstName` and `lastName` parameters.
3. Return the full name.
4. Call the function and print the result.

### Suggested File Location
`examples/typescript-basics/practice-function.ts`

### Hint
Template strings use backticks.

### How to Run It
```bash
npx tsx examples/typescript-basics/practice-function.ts
```

### Expected Result
The terminal prints the full name.

## Write An Async Function

### Difficulty
Intermediate

### Goal
Create an async function that returns a message.

### What You Will Practice
- `async`
- `await`
- Promises

### Steps
1. Create an async function named `getMessage`.
2. Return a short string.
3. Use `await` when calling the function.
4. Print the message.

### Suggested File Location
`examples/typescript-basics/practice-async.ts`

### Hint
Playwright actions use `await` because browser actions take time.

### How to Run It
```bash
npx tsx examples/typescript-basics/practice-async.ts
```

### Expected Result
The terminal prints the message.

## Import And Export A Helper Function

### Difficulty
Intermediate

### Goal
Move a helper function into one file and import it into another file.

### What You Will Practice
- `export`
- `import`
- Reusable helpers

### Steps
1. Create a helper file.
2. Export a function from it.
3. Import that function in another file.
4. Call the function.

### Suggested File Location
`examples/typescript-basics/practice-helper.ts` and `examples/typescript-basics/practice-import.ts`

### Hint
Use a relative import path such as `./practice-helper`.

### How to Run It
```bash
npx tsx examples/typescript-basics/practice-import.ts
```

### Expected Result
The imported helper runs successfully.

## Beginner UI Testing

## Open A Webpage And Validate The Title

### Difficulty
Beginner

### Goal
Open SauceDemo and check the page title.

### What You Will Practice
- `page.goto`
- `expect(page).toHaveTitle`

### Steps
1. Create a new test file.
2. Open `https://www.saucedemo.com/`.
3. Assert that the title contains `Swag Labs`.

### Suggested File Location
`tests/ui/beginner/practice-title.spec.ts`

### Hint
Use a regular expression if you only want to match part of the title.

### How to Run It
```bash
npx playwright test tests/ui/beginner/practice-title.spec.ts --project=chromium
```

### Expected Result
The test passes when the title matches.

## Enter Text Into An Input Field

### Difficulty
Beginner

### Goal
Enter a username into the username field.

### What You Will Practice
- Locators
- `fill`
- `toHaveValue`

### Steps
1. Open SauceDemo.
2. Find the username input.
3. Fill it with `standard_user`.
4. Assert the input value.

### Suggested File Location
`tests/ui/beginner/practice-enter-text.spec.ts`

### Hint
The username field has the placeholder `Username`.

### How to Run It
```bash
npx playwright test tests/ui/beginner/practice-enter-text.spec.ts --project=chromium
```

### Expected Result
The username field contains `standard_user`.

## Click A Button

### Difficulty
Beginner

### Goal
Click the Login button.

### What You Will Practice
- Role locators
- Button clicks
- Error validation

### Steps
1. Open SauceDemo.
2. Click the Login button without entering data.
3. Validate that an error message appears.

### Suggested File Location
`tests/ui/beginner/practice-click-button.spec.ts`

### Hint
Clicking Login with empty fields should show `Username is required`.

### How to Run It
```bash
npx playwright test tests/ui/beginner/practice-click-button.spec.ts --project=chromium
```

### Expected Result
The test passes when the error message is visible.

## Validate Visible Text

### Difficulty
Beginner

### Goal
Check that expected text is visible on the page.

### What You Will Practice
- Text locators
- Visibility assertions

### Steps
1. Open SauceDemo.
2. Locate the text `Swag Labs`.
3. Assert that it is visible.

### Suggested File Location
`tests/ui/beginner/practice-visible-text.spec.ts`

### Hint
Use `page.getByText`.

### How to Run It
```bash
npx playwright test tests/ui/beginner/practice-visible-text.spec.ts --project=chromium
```

### Expected Result
The visible text assertion passes.

## Validate Whether An Element Is Visible

### Difficulty
Beginner

### Goal
Check that the Login button is visible.

### What You Will Practice
- Locators
- `toBeVisible`

### Steps
1. Open SauceDemo.
2. Locate the Login button.
3. Assert that it is visible.

### Suggested File Location
`tests/ui/beginner/practice-button-visible.spec.ts`

### Hint
Prefer `getByRole` for buttons.

### How to Run It
```bash
npx playwright test tests/ui/beginner/practice-button-visible.spec.ts --project=chromium
```

### Expected Result
The button is found and visible.

## Select An Option From A Dropdown

### Difficulty
Beginner

### Goal
Log in and select a product sorting option.

### What You Will Practice
- Login setup
- Dropdowns
- `selectOption`

### Steps
1. Log in to SauceDemo.
2. Locate the product sort dropdown.
3. Select name Z to A.
4. Assert the selected value.

### Suggested File Location
`tests/ui/beginner/practice-dropdown.spec.ts`

### Hint
The dropdown uses the value `za`.

### How to Run It
```bash
npx playwright test tests/ui/beginner/practice-dropdown.spec.ts --project=chromium
```

### Expected Result
The dropdown value is `za`.

## Check A Checkbox

### Difficulty
Beginner

### Goal
Check a checkbox on a stable demo form page.

### What You Will Practice
- Checkbox locators
- `check`
- `toBeChecked`

### Steps
1. Open a public checkbox demo page.
2. Locate one checkbox.
3. Check it.
4. Assert that it is checked.

### Suggested File Location
`tests/ui/beginner/practice-checkbox.spec.ts`

### Hint
Use the same public checkbox page already used by the beginner UI examples.

### How to Run It
```bash
npx playwright test tests/ui/beginner/practice-checkbox.spec.ts --project=chromium
```

### Expected Result
The checkbox is checked.

## Take A Screenshot

### Difficulty
Beginner

### Goal
Capture a screenshot from a test.

### What You Will Practice
- Screenshots
- File paths

### Steps
1. Open SauceDemo.
2. Take a screenshot.
3. Save it inside `test-results/`.

### Suggested File Location
`tests/ui/beginner/practice-screenshot.spec.ts`

### Hint
Generated screenshots should not be committed.

### How to Run It
```bash
npx playwright test tests/ui/beginner/practice-screenshot.spec.ts --project=chromium
```

### Expected Result
A screenshot file is created.

## Intermediate UI Testing

## Validate Successful Login

### Difficulty
Intermediate

### Goal
Verify that a valid user can log in.

### What You Will Practice
- Positive tests
- URL assertions
- Reusable setup

### Steps
1. Open SauceDemo.
2. Enter valid credentials.
3. Click Login.
4. Assert that the inventory page opens.

### Suggested File Location
`tests/ui/intermediate/practice-successful-login.spec.ts`

### Hint
Valid credentials are stored in `fixtures/users.json`.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-successful-login.spec.ts --project=chromium
```

### Expected Result
The Products page is visible.

## Validate Invalid Login

### Difficulty
Intermediate

### Goal
Verify that an invalid password shows an error.

### What You Will Practice
- Negative tests
- Error-message validation

### Steps
1. Open SauceDemo.
2. Enter a valid username and invalid password.
3. Click Login.
4. Assert the error message.

### Suggested File Location
`tests/ui/intermediate/practice-invalid-login.spec.ts`

### Hint
Keep this as a separate test from successful login.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-invalid-login.spec.ts --project=chromium
```

### Expected Result
The login error is visible.

## Validate A Locked-Out User Message

### Difficulty
Intermediate

### Goal
Verify that a locked-out user cannot log in.

### What You Will Practice
- Negative tests
- Fixture data

### Steps
1. Read the locked-out user from `fixtures/users.json`.
2. Attempt to log in.
3. Assert the locked-out error message.

### Suggested File Location
`tests/ui/intermediate/practice-locked-user.spec.ts`

### Hint
SauceDemo includes a `locked_out_user`.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-locked-user.spec.ts --project=chromium
```

### Expected Result
The locked-out user message is visible.

## Sort Products

### Difficulty
Intermediate

### Goal
Validate product sorting.

### What You Will Practice
- Dropdown validation
- Product lists

### Steps
1. Log in to SauceDemo.
2. Select a sorting option.
3. Assert that the dropdown value changed.
4. Assert the first product if the site data is stable.

### Suggested File Location
`tests/ui/intermediate/practice-sort-products.spec.ts`

### Hint
Start with checking the dropdown value before checking the product order.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-sort-products.spec.ts --project=chromium
```

### Expected Result
The selected sort option is applied.

## Add One Product To The Cart

### Difficulty
Intermediate

### Goal
Add one product and validate the cart badge.

### What You Will Practice
- Cart actions
- Badge assertions

### Steps
1. Log in.
2. Add the backpack to the cart.
3. Assert that the cart badge shows `1`.

### Suggested File Location
`tests/ui/intermediate/practice-add-one-product.spec.ts`

### Hint
Use the product button data-test attribute.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-add-one-product.spec.ts --project=chromium
```

### Expected Result
The cart count is `1`.

## Add Multiple Products To The Cart

### Difficulty
Intermediate

### Goal
Add more than one product and validate the cart badge.

### What You Will Practice
- Repeated actions
- Cart count validation

### Steps
1. Log in.
2. Add two or three products.
3. Assert the cart count.

### Suggested File Location
`tests/ui/intermediate/practice-add-multiple-products.spec.ts`

### Hint
Count the products you add and compare that number with the badge.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-add-multiple-products.spec.ts --project=chromium
```

### Expected Result
The cart badge matches the number of added products.

## Remove One Product From The Cart

### Difficulty
Intermediate

### Goal
Remove a product after adding it.

### What You Will Practice
- Cart page navigation
- Remove buttons
- Negative visibility assertions

### Steps
1. Log in.
2. Add two products.
3. Open the cart.
4. Remove one product.
5. Assert the removed product is not visible.

### Suggested File Location
`tests/ui/intermediate/practice-remove-product.spec.ts`

### Hint
Assert both the product name and the cart badge.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-remove-product.spec.ts --project=chromium
```

### Expected Result
Only the remaining product stays in the cart.

## Validate The Cart Count

### Difficulty
Intermediate

### Goal
Check that the cart count updates correctly.

### What You Will Practice
- Assertions
- Cart badge validation

### Steps
1. Add products one at a time.
2. Assert the cart count after each action.

### Suggested File Location
`tests/ui/intermediate/practice-cart-count.spec.ts`

### Hint
Small assertions after each action make failures easier to understand.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-cart-count.spec.ts --project=chromium
```

### Expected Result
The badge updates after each product is added.

## Complete A Checkout Flow

### Difficulty
Intermediate

### Goal
Fill out the checkout form and reach the overview page.

### What You Will Practice
- Forms
- Navigation
- Fixture data

### Steps
1. Log in.
2. Add one product.
3. Open the cart.
4. Start checkout.
5. Fill customer details from fixture data.
6. Continue to the overview page.

### Suggested File Location
`tests/ui/intermediate/practice-checkout.spec.ts`

### Hint
Customer details are stored in `fixtures/test-data.json`.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-checkout.spec.ts --project=chromium
```

### Expected Result
The Checkout Overview page is visible.

## Validate A Required-Field Message

### Difficulty
Intermediate

### Goal
Submit an incomplete checkout form and validate the error.

### What You Will Practice
- Negative form validation
- Error messages

### Steps
1. Reach the checkout information page.
2. Leave the first name empty.
3. Click Continue.
4. Assert the required-field message.

### Suggested File Location
`tests/ui/intermediate/practice-required-field.spec.ts`

### Hint
Keep this separate from the successful checkout test.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-required-field.spec.ts --project=chromium
```

### Expected Result
The first-name required error is visible.

## Read Login Data From A Fixture File

### Difficulty
Intermediate

### Goal
Use test data from `fixtures/users.json`.

### What You Will Practice
- Fixture data
- Imports
- Data separation

### Steps
1. Import `fixtures/users.json`.
2. Use the valid user credentials.
3. Assert successful login.

### Suggested File Location
`tests/ui/intermediate/practice-fixture-login.spec.ts`

### Hint
Use the existing intermediate UI tests as a pattern.

### How to Run It
```bash
npx playwright test tests/ui/intermediate/practice-fixture-login.spec.ts --project=chromium
```

### Expected Result
The login succeeds using fixture data.

## Advanced UI Testing

## Refactor A Login Test Using Page Object Model

### Difficulty
Advanced

### Goal
Move login locators and actions into `LoginPage`.

### What You Will Practice
- Page Object Model
- Reusable page methods
- Cleaner tests

### Steps
1. Import `LoginPage`.
2. Create a `LoginPage` object in the test.
3. Use `goto` and `login`.
4. Assert the inventory page.

### Suggested File Location
`tests/ui/advanced/practice-pom-login.spec.ts`

### Hint
Keep assertions in the test where possible.

### How to Run It
```bash
npx playwright test tests/ui/advanced/practice-pom-login.spec.ts --project=chromium
```

### Expected Result
The test is shorter and still easy to read.

## Create A Reusable Page Method

### Difficulty
Advanced

### Goal
Add a small page method only when it removes repeated steps.

### What You Will Practice
- Reuse
- Method naming
- Avoiding over-abstraction

### Steps
1. Find a repeated UI action.
2. Add one clear method to the related page object.
3. Use it in a test.

### Suggested File Location
`pages/inventory.page.ts` and `tests/ui/advanced/practice-reusable-method.spec.ts`

### Hint
A method should describe user behavior, not Playwright internals.

### How to Run It
```bash
npx playwright test tests/ui/advanced/practice-reusable-method.spec.ts --project=chromium
```

### Expected Result
The test is easier to read without hiding important assertions.

## Upload A File

### Difficulty
Advanced

### Goal
Upload a local file on a public demo page.

### What You Will Practice
- File inputs
- Test fixtures

### Steps
1. Open the upload demo page used in the advanced UI guide.
2. Set the input file to `fixtures/upload-example.txt`.
3. Submit the upload if the page supports it.
4. Validate the uploaded file name if the page displays it.

### Suggested File Location
`tests/ui/advanced/practice-file-upload.spec.ts`

### Hint
Public upload pages can change. Keep assertions focused on stable behavior.

### How to Run It
```bash
npx playwright test tests/ui/advanced/practice-file-upload.spec.ts --project=chromium
```

### Expected Result
The file input accepts the file.

## Validate A File Download

### Difficulty
Advanced

### Goal
Practice the structure of a download test.

### What You Will Practice
- Download events
- Artifact paths

### Steps
1. Find a reliable download page.
2. Start waiting for the download before clicking.
3. Click the download link.
4. Assert the suggested filename.

### Suggested File Location
`tests/ui/advanced/practice-download.spec.ts`

### Hint
This repository does not include a running download test because public download pages are often unstable.

### How to Run It
```bash
npx playwright test tests/ui/advanced/practice-download.spec.ts --project=chromium
```

### Expected Result
If the demo page is stable, Playwright captures the download.

## Handle A New Tab

### Difficulty
Advanced

### Goal
Click a link that opens a new tab and validate the new page.

### What You Will Practice
- Browser context events
- Multiple pages

### Steps
1. Open a demo page with a new-tab link.
2. Wait for the `page` event.
3. Click the link.
4. Assert text or title on the new tab.

### Suggested File Location
`tests/ui/advanced/practice-new-tab.spec.ts`

### Hint
Start waiting for the new page before clicking.

### How to Run It
```bash
npx playwright test tests/ui/advanced/practice-new-tab.spec.ts --project=chromium
```

### Expected Result
The test controls and validates the new tab.

## Interact With An Iframe

### Difficulty
Advanced

### Goal
Find content inside an iframe.

### What You Will Practice
- Frame locators
- Nested page content

### Steps
1. Open a stable iframe demo page.
2. Use `frameLocator`.
3. Assert content inside the iframe.

### Suggested File Location
`tests/ui/advanced/practice-iframe.spec.ts`

### Hint
Iframe content is not part of the main page DOM.

### How to Run It
```bash
npx playwright test tests/ui/advanced/practice-iframe.spec.ts --project=chromium
```

### Expected Result
The iframe content is found and validated.

## Intercept A Network Request

### Difficulty
Advanced

### Goal
Watch a network request made by the page.

### What You Will Practice
- Network events
- Request inspection

### Steps
1. Open a page that makes network calls.
2. Wait for a response matching a URL pattern.
3. Assert the response status.

### Suggested File Location
`tests/ui/advanced/practice-network-intercept.spec.ts`

### Hint
This is useful when UI behavior depends on API responses.

### How to Run It
```bash
npx playwright test tests/ui/advanced/practice-network-intercept.spec.ts --project=chromium
```

### Expected Result
The expected network response is captured.

## Mock An API Response

### Difficulty
Advanced

### Goal
Replace a network response with test-controlled data.

### What You Will Practice
- `page.route`
- Mocking
- Controlled test data

### Steps
1. Add a route before opening the page.
2. Fulfill the route with JSON.
3. Assert the UI or response behavior.

### Suggested File Location
`tests/ui/advanced/practice-mock-response.spec.ts`

### Hint
Mocking is powerful, but use it only when it makes the test more reliable.

### How to Run It
```bash
npx playwright test tests/ui/advanced/practice-mock-response.spec.ts --project=chromium
```

### Expected Result
The test uses your mocked data instead of the real response.

## Reuse Authenticated Browser State

### Difficulty
Advanced

### Goal
Save login state and reuse it in another test.

### What You Will Practice
- Storage state
- Setup steps
- Faster UI tests

### Steps
1. Log in once.
2. Save storage state.
3. Create a test context using that state.
4. Open a page that requires login.

### Suggested File Location
`tests/ui/advanced/practice-auth-state.spec.ts`

### Hint
Do not commit real user secrets or private session files.

### How to Run It
```bash
npx playwright test tests/ui/advanced/practice-auth-state.spec.ts --project=chromium
```

### Expected Result
The test opens an authenticated page without repeating login steps.

## Add A Playwright Tag

### Difficulty
Advanced

### Goal
Add a tag to a test and run only tagged tests.

### What You Will Practice
- Test tags
- Focused test runs

### Steps
1. Add `@smoke` to a test title.
2. Run tests using `--grep @smoke`.

### Suggested File Location
`tests/ui/advanced/practice-tagged.spec.ts`

### Hint
Tags are plain text inside test titles.

### How to Run It
```bash
npx playwright test tests/ui/advanced --grep @smoke --project=chromium
```

### Expected Result
Only tagged tests run.

## Run Tests In Multiple Browsers

### Difficulty
Advanced

### Goal
Run the same tests in Chromium, Firefox, and WebKit.

### What You Will Practice
- Playwright projects
- Cross-browser testing

### Steps
1. Confirm browsers are installed.
2. Run the browser project script.
3. Review results per browser.

### Suggested File Location
No new file required.

### Hint
Some local machines may need extra operating system dependencies for Firefox or WebKit.

### How to Run It
```bash
npm run test:browsers
```

### Expected Result
Tests run across configured browser projects if the machine supports them.

## Beginner API Testing

## Send A GET Request

### Difficulty
Beginner

### Goal
Send a simple GET request to JSONPlaceholder.

### What You Will Practice
- `request.get`
- API endpoints

### Steps
1. Create a new API test file.
2. Send a GET request to `/posts`.
3. Assert the response is OK.

### Suggested File Location
`tests/api/beginner/practice-get.spec.ts`

### Hint
Use `https://jsonplaceholder.typicode.com/posts`.

### How to Run It
```bash
npx playwright test tests/api/beginner/practice-get.spec.ts --project=chromium
```

### Expected Result
The request returns a successful response.

## Validate A Successful Status Code

### Difficulty
Beginner

### Goal
Check that an API response returns status `200`.

### What You Will Practice
- Status codes
- Assertions

### Steps
1. Request `/posts/1`.
2. Assert the status is `200`.

### Suggested File Location
`tests/api/beginner/practice-status.spec.ts`

### Hint
Use `response.status()`.

### How to Run It
```bash
npx playwright test tests/api/beginner/practice-status.spec.ts --project=chromium
```

### Expected Result
The status assertion passes.

## Validate One Response Field

### Difficulty
Beginner

### Goal
Validate a field in the response body.

### What You Will Practice
- JSON parsing
- Field assertions

### Steps
1. Request `/posts/1`.
2. Convert the response to JSON.
3. Assert that `id` is `1`.

### Suggested File Location
`tests/api/beginner/practice-field.spec.ts`

### Hint
Use `await response.json()`.

### How to Run It
```bash
npx playwright test tests/api/beginner/practice-field.spec.ts --project=chromium
```

### Expected Result
The response body has the expected ID.

## Validate An Array

### Difficulty
Beginner

### Goal
Confirm that a response body is an array.

### What You Will Practice
- Arrays
- API response validation

### Steps
1. Request `/posts`.
2. Convert the response to JSON.
3. Assert that the body is an array.

### Suggested File Location
`tests/api/beginner/practice-array.spec.ts`

### Hint
Use `Array.isArray`.

### How to Run It
```bash
npx playwright test tests/api/beginner/practice-array.spec.ts --project=chromium
```

### Expected Result
The response body is an array with items.

## Send A POST Request

### Difficulty
Beginner

### Goal
Send data in a request body.

### What You Will Practice
- POST
- Request body
- Status `201`

### Steps
1. Create a post object.
2. Send it to `/posts`.
3. Assert status `201`.
4. Assert the response title.

### Suggested File Location
`tests/api/beginner/practice-post.spec.ts`

### Hint
JSONPlaceholder returns created data but does not permanently save it.

### How to Run It
```bash
npx playwright test tests/api/beginner/practice-post.spec.ts --project=chromium
```

### Expected Result
The response includes the sent title.

## Validate Response Headers

### Difficulty
Beginner

### Goal
Check the response content type.

### What You Will Practice
- Headers
- Content type

### Steps
1. Request `/posts/1`.
2. Read the response headers.
3. Assert that `content-type` includes `application/json`.

### Suggested File Location
`tests/api/beginner/practice-headers.spec.ts`

### Hint
Header names are often lowercase in Playwright's `headers()` object.

### How to Run It
```bash
npx playwright test tests/api/beginner/practice-headers.spec.ts --project=chromium
```

### Expected Result
The response header confirms JSON content.

## Use A Path Parameter

### Difficulty
Beginner

### Goal
Request one specific post by ID.

### What You Will Practice
- Path parameters
- URL building

### Steps
1. Store `postId` in a variable.
2. Request `/posts/${postId}`.
3. Assert the returned ID.

### Suggested File Location
`tests/api/beginner/practice-path-parameter.spec.ts`

### Hint
Template strings make path parameters easy to read.

### How to Run It
```bash
npx playwright test tests/api/beginner/practice-path-parameter.spec.ts --project=chromium
```

### Expected Result
The response contains the requested post ID.

## Use A Query Parameter

### Difficulty
Beginner

### Goal
Filter posts by user ID.

### What You Will Practice
- Query parameters
- Filtered API responses

### Steps
1. Request `/posts`.
2. Pass `userId` as a query parameter.
3. Assert the returned posts match the user ID.

### Suggested File Location
`tests/api/beginner/practice-query-parameter.spec.ts`

### Hint
Use the `params` option.

### How to Run It
```bash
npx playwright test tests/api/beginner/practice-query-parameter.spec.ts --project=chromium
```

### Expected Result
The returned posts belong to the requested user.

## Intermediate API Testing

## Send A PUT Request

### Difficulty
Intermediate

### Goal
Replace an existing resource.

### What You Will Practice
- PUT
- Full update requests

### Steps
1. Create a full post body.
2. Send a PUT request to `/posts/1`.
3. Assert the updated title.

### Suggested File Location
`tests/api/intermediate/practice-put.spec.ts`

### Hint
JSONPlaceholder simulates the update but does not persist it.

### How to Run It
```bash
npx playwright test tests/api/intermediate/practice-put.spec.ts --project=chromium
```

### Expected Result
The response contains the replacement data.

## Send A PATCH Request

### Difficulty
Intermediate

### Goal
Partially update a resource.

### What You Will Practice
- PATCH
- Partial updates

### Steps
1. Create a partial body with only `title`.
2. Send a PATCH request to `/posts/1`.
3. Assert the title changed.

### Suggested File Location
`tests/api/intermediate/practice-patch.spec.ts`

### Hint
PATCH usually sends only the fields you want to change.

### How to Run It
```bash
npx playwright test tests/api/intermediate/practice-patch.spec.ts --project=chromium
```

### Expected Result
The response includes the patched title.

## Send A DELETE Request

### Difficulty
Intermediate

### Goal
Delete a resource in the demo API.

### What You Will Practice
- DELETE
- Empty response bodies

### Steps
1. Send DELETE to `/posts/1`.
2. Assert the status code.
3. Assert the response body if the API returns one.

### Suggested File Location
`tests/api/intermediate/practice-delete.spec.ts`

### Hint
JSONPlaceholder simulates delete and returns an empty object.

### How to Run It
```bash
npx playwright test tests/api/intermediate/practice-delete.spec.ts --project=chromium
```

### Expected Result
The delete request succeeds.

## Validate Nested Response Fields

### Difficulty
Intermediate

### Goal
Validate data inside a nested object.

### What You Will Practice
- Nested JSON
- Object properties

### Steps
1. Request `/users/1`.
2. Convert the response to JSON.
3. Assert a nested field such as `address.city`.

### Suggested File Location
`tests/api/intermediate/practice-nested-fields.spec.ts`

### Hint
Use dot notation to read nested values.

### How to Run It
```bash
npx playwright test tests/api/intermediate/practice-nested-fields.spec.ts --project=chromium
```

### Expected Result
The nested value matches the expected user data.

## Read Request Data From A Fixture File

### Difficulty
Intermediate

### Goal
Use request data from `fixtures/api-test-data.json`.

### What You Will Practice
- Fixture data
- Request bodies

### Steps
1. Import the API fixture file.
2. Use `newPost` as the POST body.
3. Assert the returned title.

### Suggested File Location
`tests/api/intermediate/practice-fixture-post.spec.ts`

### Hint
Keep data outside the test when it may be reused.

### How to Run It
```bash
npx playwright test tests/api/intermediate/practice-fixture-post.spec.ts --project=chromium
```

### Expected Result
The POST request uses fixture data successfully.

## Add A Negative Test For An Invalid Endpoint

### Difficulty
Intermediate

### Goal
Verify that a missing endpoint returns an error status.

### What You Will Practice
- Negative API testing
- Status `404`

### Steps
1. Request an endpoint that does not exist.
2. Assert status `404`.

### Suggested File Location
`tests/api/intermediate/practice-invalid-endpoint.spec.ts`

### Hint
Use a clearly fake endpoint path.

### How to Run It
```bash
npx playwright test tests/api/intermediate/practice-invalid-endpoint.spec.ts --project=chromium
```

### Expected Result
The response status is `404`.

## Add A Negative Test For A Missing Field

### Difficulty
Intermediate

### Goal
Practice thinking about validation errors.

### What You Will Practice
- Negative request bodies
- Public API limitations

### Steps
1. Send a POST body missing a field.
2. Observe the public API behavior.
3. Add an honest assertion based on the real behavior.
4. Add a comment explaining the limitation.

### Suggested File Location
`tests/api/intermediate/practice-missing-field.spec.ts`

### Hint
JSONPlaceholder does not enforce realistic validation errors.

### How to Run It
```bash
npx playwright test tests/api/intermediate/practice-missing-field.spec.ts --project=chromium
```

### Expected Result
The test documents the limitation instead of pretending validation exists.

## Add Data-Driven API Tests

### Difficulty
Intermediate

### Goal
Run the same test with multiple IDs.

### What You Will Practice
- Loops
- Fixture data
- Repeated API assertions

### Steps
1. Import multiple post IDs from the fixture file.
2. Loop through each ID.
3. Create one test per ID.
4. Assert each response ID.

### Suggested File Location
`tests/api/intermediate/practice-data-driven.spec.ts`

### Hint
Create test titles that include the ID.

### How to Run It
```bash
npx playwright test tests/api/intermediate/practice-data-driven.spec.ts --project=chromium
```

### Expected Result
One test runs for each fixture value.

## Advanced API Testing

## Create And Reuse An API Helper

### Difficulty
Advanced

### Goal
Move repeated API calls into a helper.

### What You Will Practice
- Reusable helper methods
- API request context

### Steps
1. Add a small helper in `utils/api-helper.ts`.
2. Use it in a test.
3. Keep assertions in the test.

### Suggested File Location
`utils/api-helper.ts` and `tests/api/advanced/practice-helper.spec.ts`

### Hint
Helpers should remove repetition, not hide test intent.

### How to Run It
```bash
npx playwright test tests/api/advanced/practice-helper.spec.ts --project=chromium
```

### Expected Result
The helper makes the test easier to read.

## Generate Unique Test Data

### Difficulty
Advanced

### Goal
Create data that changes for each test run.

### What You Will Practice
- Dynamic data
- Utility functions

### Steps
1. Use `createUniqueTitle`.
2. Send the generated title in a POST request.
3. Assert the response title.

### Suggested File Location
`tests/api/advanced/practice-dynamic-data.spec.ts`

### Hint
Dynamic data helps identify test-created records.

### How to Run It
```bash
npx playwright test tests/api/advanced/practice-dynamic-data.spec.ts --project=chromium
```

### Expected Result
The API response includes the generated value.

## Chain API Calls

### Difficulty
Advanced

### Goal
Use data from one response in the next request.

### What You Will Practice
- Chained requests
- Response body values

### Steps
1. Request a user.
2. Use the user ID to request posts.
3. Use a post ID to request comments.
4. Assert each response.

### Suggested File Location
`tests/api/advanced/practice-chained-calls.spec.ts`

### Hint
Write the test in the same order a real user flow would happen.

### How to Run It
```bash
npx playwright test tests/api/advanced/practice-chained-calls.spec.ts --project=chromium
```

### Expected Result
Each request uses data from the previous response.

## Create Data And Clean It Up

### Difficulty
Advanced

### Goal
Practice setup and cleanup with API calls.

### What You Will Practice
- Create requests
- Delete requests
- Cleanup thinking

### Steps
1. Create a post.
2. Store the returned ID.
3. Delete the returned ID.
4. Assert both responses.

### Suggested File Location
`tests/api/advanced/practice-create-cleanup.spec.ts`

### Hint
JSONPlaceholder simulates create and delete but does not persist created data.

### How to Run It
```bash
npx playwright test tests/api/advanced/practice-create-cleanup.spec.ts --project=chromium
```

### Expected Result
The test shows the cleanup pattern.

## Load A Token From An Environment Variable

### Difficulty
Advanced

### Goal
Read a token without committing it to Git.

### What You Will Practice
- `.env`
- Secret placeholders
- Headers

### Steps
1. Read the placeholder token in `.env.example`.
2. Create a local `.env` file if you are practicing with a real API.
3. Get a test token from the API provider, developer portal, login endpoint, or QA team.
4. Read `API_TOKEN` in a test or helper.
5. Build an Authorization header.
6. Skip the test if no real API supports auth.

### Suggested File Location
`tests/api/advanced/practice-token-placeholder.spec.ts`

### Hint
Do not commit real credentials.

### How to Run It
```bash
npx playwright test tests/api/advanced/practice-token-placeholder.spec.ts --project=chromium
```

### Expected Result
The example teaches the pattern without fake passing authentication.

## Send Custom Headers

### Difficulty
Advanced

### Goal
Send an API request with custom headers.

### What You Will Practice
- Headers
- Helper methods

### Steps
1. Create custom headers.
2. Send a POST request.
3. Assert the response.

### Suggested File Location
`tests/api/advanced/practice-custom-headers.spec.ts`

### Hint
Custom headers are often used for auth, tracing, or client information.

### How to Run It
```bash
npx playwright test tests/api/advanced/practice-custom-headers.spec.ts --project=chromium
```

### Expected Result
The request succeeds with custom headers.

## Add JSON Schema Validation

### Difficulty
Advanced

### Goal
Validate the shape of an API response.

### What You Will Practice
- JSON schemas
- `Ajv`
- Contract-style checks

### Steps
1. Import an existing schema from `fixtures/api-schema`.
2. Request matching data.
3. Validate the response with `validateJsonSchema`.

### Suggested File Location
`tests/api/advanced/practice-schema.spec.ts`

### Hint
Schema validation checks structure, not only one field.

### How to Run It
```bash
npx playwright test tests/api/advanced/practice-schema.spec.ts --project=chromium
```

### Expected Result
The schema validation passes.

## Validate Response Time

### Difficulty
Advanced

### Goal
Check that an API responds within a time limit.

### What You Will Practice
- Timing
- Performance expectations

### Steps
1. Use `measureResponseTime`.
2. Request `/posts/1`.
3. Assert the duration is below a clear threshold.

### Suggested File Location
`tests/api/advanced/practice-response-time.spec.ts`

### Hint
Use a generous threshold for public APIs.

### How to Run It
```bash
npx playwright test tests/api/advanced/practice-response-time.spec.ts --project=chromium
```

### Expected Result
The response finishes within the threshold.

## Add API Tags

### Difficulty
Advanced

### Goal
Run selected API tests by tag.

### What You Will Practice
- Tags
- `--grep`

### Steps
1. Add `@api-practice` to a test title.
2. Run only tests with that tag.

### Suggested File Location
`tests/api/advanced/practice-tagged-api.spec.ts`

### Hint
Tags are helpful in CI when you want focused runs.

### How to Run It
```bash
npx playwright test tests/api/advanced --grep @api-practice --project=chromium
```

### Expected Result
Only tests with `@api-practice` run.

## Run Selected API Tests Using Tags

### Difficulty
Advanced

### Goal
Practice running a subset of tests.

### What You Will Practice
- CLI filtering
- Test organization

### Steps
1. Pick an existing API tag.
2. Run Playwright with `--grep`.
3. Confirm only matching tests ran.

### Suggested File Location
No new file required.

### Hint
Existing advanced API tests use `@api-advanced`.

### How to Run It
```bash
npm run test:api:tag:advanced
```

### Expected Result
Only advanced tagged API tests run.

## Debugging Practice

## Run One Test File

### Difficulty
Beginner

### Goal
Run only one file while debugging.

### What You Will Practice
- Focused test execution

### Steps
1. Choose one test file.
2. Run Playwright with that file path.

### Suggested File Location
No new file required.

### Hint
Running one file is faster than running the full suite.

### How to Run It
```bash
npx playwright test tests/ui/beginner/01-open-webpage.spec.ts --project=chromium
```

### Expected Result
Only tests in that file run.

## Run One Test By Title

### Difficulty
Beginner

### Goal
Run one test using part of its title.

### What You Will Practice
- `--grep`
- Test names

### Steps
1. Copy a unique part of a test title.
2. Run Playwright with `-g`.

### Suggested File Location
No new file required.

### Hint
Use a phrase that appears in only one test title.

### How to Run It
```bash
npx playwright test -g "User can log in" --project=chromium
```

### Expected Result
Only matching tests run.

## Debug A Failing Locator

### Difficulty
Intermediate

### Goal
Practice fixing a locator failure.

### What You Will Practice
- Error reading
- Locators
- Debug mode

### Steps
1. Temporarily create a locator with incorrect text.
2. Run the test.
3. Read the error.
4. Fix the locator.

### Suggested File Location
Use a temporary practice file under `tests/ui/beginner`.

### Hint
Do not leave intentionally broken tests in the repository.

### How to Run It
```bash
npm run test:debug
```

### Expected Result
You can identify and fix the locator.

## Open A Trace File

### Difficulty
Intermediate

### Goal
Open a Playwright trace after a failed retry.

### What You Will Practice
- Trace viewer
- Failure investigation

### Steps
1. Run a failing test.
2. Find the trace zip in `test-results/`.
3. Open it with Playwright.

### Suggested File Location
No new file required.

### Hint
The config keeps traces for failed tests.

### How to Run It
```bash
npx playwright show-trace test-results/path-to-trace.zip
```

### Expected Result
The trace viewer opens the recorded test steps.

## Find A Screenshot For A Failed Test

### Difficulty
Beginner

### Goal
Locate failure screenshots.

### What You Will Practice
- Failure evidence
- `test-results/`

### Steps
1. Run a test that fails.
2. Open `test-results/`.
3. Find the `.png` screenshot.

### Suggested File Location
No new file required.

### Hint
Screenshots are configured as `only-on-failure`.

### How to Run It
```bash
npm test
```

### Expected Result
Screenshots appear only for failed tests.

## Find A Video For A Failed Test

### Difficulty
Intermediate

### Goal
Locate videos for failed tests.

### What You Will Practice
- Video evidence
- Failure review

### Steps
1. Run a failing test.
2. Open `test-results/`.
3. Find the `.webm` video.

### Suggested File Location
No new file required.

### Hint
Videos are configured as `retain-on-failure`.

### How to Run It
```bash
npm test
```

### Expected Result
Videos are retained for failed tests.

## Open The Playwright HTML Report

### Difficulty
Beginner

### Goal
Open the generated Playwright report.

### What You Will Practice
- Report viewing
- Test result review

### Steps
1. Run tests.
2. Open the report.
3. Review passed, failed, and skipped tests.

### Suggested File Location
No new file required.

### Hint
The report is generated in `playwright-report/`.

### How to Run It
```bash
npm test
npm run report:playwright
```

### Expected Result
The Playwright HTML report opens.

## Reporting Practice

## Generate The Playwright HTML Report

### Difficulty
Beginner

### Goal
Run tests and create the HTML report.

### What You Will Practice
- Playwright reporting

### Steps
1. Run the test suite.
2. Confirm `playwright-report/` exists.

### Suggested File Location
No new file required.

### Hint
The report is generated automatically after test runs.

### How to Run It
```bash
npm test
```

### Expected Result
`playwright-report/index.html` exists.

## Open The Playwright HTML Report

### Difficulty
Beginner

### Goal
View the Playwright report locally.

### What You Will Practice
- Report navigation

### Steps
1. Run tests.
2. Open the report command.
3. Review test details.

### Suggested File Location
No new file required.

### Hint
The command starts a local report viewer.

### How to Run It
```bash
npm run report:playwright
```

### Expected Result
The report opens in a browser.

## Confirm Allure Results Are Created

### Difficulty
Intermediate

### Goal
Confirm raw Allure results are created after a test run.

### What You Will Practice
- Allure raw results
- Generated folders

### Steps
1. Run tests.
2. Open `allure-results/`.
3. Confirm JSON files exist.

### Suggested File Location
No new file required.

### Hint
`allure-results/` is raw data, not the HTML dashboard.

### How to Run It
```bash
npm test
```

### Expected Result
`allure-results/` contains result files.

## Confirm Allure Raw Results

### Difficulty
Intermediate

### Goal
Confirm that Playwright writes raw Allure result files.

### What You Will Practice
- Allure raw results
- Generated report data

### Steps
1. Run tests.
2. Open `allure-results/`.
3. Confirm JSON or attachment files exist.

### Suggested File Location
No new file required.

### Hint
`allure-results/` is raw data, not a local HTML dashboard.

### How to Run It
```bash
npm test
```

### Expected Result
`allure-results/` contains result files.

## Explain Why This Project Does Not Use The Allure CLI

### Difficulty
Beginner

### Goal
Explain why the repository stores Allure raw results but does not generate Allure HTML locally.

### What You Will Practice
- Reporting vocabulary
- Tool dependencies

### Steps
1. Read `docs/11-reporting-guide.md`.
2. Explain what `allure-results/` contains.
3. Explain why Playwright does not require Java.
4. Explain why the local beginner workflow uses Playwright HTML for viewing.

### Suggested File Location
`docs/notes-reporting-practice.md`

### Hint
Raw results are data files. Playwright HTML is the viewable local report.

### How to Run It
No command required.

### Expected Result
You can describe the reporting setup clearly.

## Explain Playwright Report Versus Allure Raw Results

### Difficulty
Beginner

### Goal
Describe the difference between the local Playwright HTML report and raw Allure result files.

### What You Will Practice
- Reporting vocabulary

### Steps
1. Inspect `allure-results/`.
2. Open the Playwright HTML report.
3. Write one sentence explaining each report location.

### Suggested File Location
`docs/notes-reporting-practice.md`

### Hint
The Playwright report is for viewing. Allure raw results are for reporting data.

### How to Run It
```bash
npm test
npm run report:playwright
```

### Expected Result
You can explain both report locations clearly.

## Confirm Report Folders Are Ignored By Git

### Difficulty
Beginner

### Goal
Confirm generated report folders are not committed.

### What You Will Practice
- `.gitignore`
- Generated artifacts

### Steps
1. Open `.gitignore`.
2. Confirm report folders are listed.
3. Run `git status` if Git is available.

### Suggested File Location
No new file required.

### Hint
Generated folders should stay out of source control.

### How to Run It
```bash
git status --short
```

### Expected Result
Generated report folders are ignored.

## CI/CD Practice

## Explain Workflow Triggers

### Difficulty
Beginner

### Goal
Explain when the GitHub Actions workflow runs.

### What You Will Practice
- CI triggers
- YAML reading

### Steps
1. Open `.github/workflows/playwright-tests.yml`.
2. Find the `on` section.
3. Write when the workflow runs.

### Suggested File Location
`docs/notes-ci-practice.md`

### Hint
Look for `push`, `pull_request`, and `workflow_dispatch`.

### How to Run It
No command required.

### Expected Result
You can explain each trigger.

## Run The Workflow Manually

### Difficulty
Intermediate

### Goal
Start the workflow from GitHub.

### What You Will Practice
- Manual CI runs
- GitHub Actions UI

### Steps
1. Open the repository on GitHub.
2. Go to Actions.
3. Select the Playwright Tests workflow.
4. Click Run workflow.

### Suggested File Location
No new file required.

### Hint
This works after the repository is pushed to GitHub.

### How to Run It
Use the GitHub website.

### Expected Result
A new workflow run starts.

## Open A Workflow Run

### Difficulty
Beginner

### Goal
Review a CI run.

### What You Will Practice
- GitHub Actions navigation
- Reading job status

### Steps
1. Open GitHub Actions.
2. Click a workflow run.
3. Open the test job.

### Suggested File Location
No new file required.

### Hint
Failed steps are usually marked in red.

### How to Run It
Use the GitHub website.

### Expected Result
You can find the test job output.

## Find A Failed Test In Workflow Logs

### Difficulty
Intermediate

### Goal
Use CI logs to understand a failure.

### What You Will Practice
- Log reading
- Test failure review

### Steps
1. Open a failed workflow run.
2. Expand the test step.
3. Read the failed test name and error.

### Suggested File Location
No new file required.

### Hint
The list reporter prints useful output in the terminal logs.

### How to Run It
Use the GitHub website.

### Expected Result
You can identify the failing test.

## Download The Playwright HTML Artifact

### Difficulty
Beginner

### Goal
Download the Playwright report from CI.

### What You Will Practice
- CI artifacts
- Report review

### Steps
1. Open a workflow run.
2. Scroll to Artifacts.
3. Download `playwright-html-report`.

### Suggested File Location
No new file required.

### Hint
Artifacts are uploaded even when tests fail.

### How to Run It
Use the GitHub website.

### Expected Result
You can inspect the Playwright report from CI.

## Download The Allure Raw Results Artifact

### Difficulty
Intermediate

### Goal
Download raw Allure result files from CI.

### What You Will Practice
- Raw report data
- Troubleshooting report generation

### Steps
1. Open a workflow run.
2. Scroll to Artifacts.
3. Download `allure-raw-results`.

### Suggested File Location
No new file required.

### Hint
Raw results help troubleshoot Allure report generation.

### How to Run It
Use the GitHub website.

### Expected Result
The raw Allure result files are available.
