# Test Cases: SauceDemo E-Commerce Application

## 1. Authentication Module

### TC-01: Successful login with valid credentials

- **Pre-conditions:** The login page is open (`https://www.saucedemo.com/`)
- **Steps:**
  1. Enter a valid username (`standard_user`) into the `Username` field.
  2. Enter a valid password (`secret_sauce`) into the `Password` field.
  3. Click the `Login` button.
- **Expected Result:** The user is successfully authenticated, redirected to the inventory page (`/inventory.html`), and the "Products" header along with the shopping cart icon is displayed.

### TC-02: Unsuccessful login with an invalid password

- **Pre-conditions:** The login page is open.
- **Steps:**
  1. Enter a valid username (`standard_user`).
  2. Enter an invalid password (`wrong_password`).
  3. Click the `Login` button.
- **Expected Result:** Authorization fails. An error message appears: "Epic sadface: Username and password do not match any user in this service".
