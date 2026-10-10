# Bug Reports

## BUG-01: Typo in test asset route pattern causing timeout failures

- **Status:** Open
- **Priority:** Medium
- **Severity:** Minor
- **Environment:** Google Chrome (v.122), Linux (Ubuntu), Resolution: 1920x1080.

### Description

During automated regression execution, assertion checks failing due to a typographical error inside the test path regular expression (an extra 'm' character introduced in the expected pattern `invemtory.html` instead of the standard `inventory.html`).

### Steps to Reproduce:

1. Open the browser and navigate to `https://www.saucedemo.com/`.
2. Input `standard_user` into the username field and `secret_sauce` into the password field.
3. Click the `Login` button.
4. Execute test assertion checking the resulting URL path.

### Expected Result:

The application URL matches the expected routing standard (`/inventory.html`).

### Actual Result:

The actual received URL is `https://www.saucedemo.com/inventory.html`, but the assertion test script fails due to a regex typo (`/.*invemtory.html/`).

### Attachments:

- Playwright execution logs showing timeout error.
