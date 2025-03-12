// Write your solution in this file!
// Declare customerName in the global scope and initialize it with 'bob'
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // No `var`, `let`, or `const`, so it's global
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'some customer';

// Function that attempts to change leastFavoriteCustomer (will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // This will cause an error
}

