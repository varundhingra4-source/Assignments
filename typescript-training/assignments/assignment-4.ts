// Assignment -4 (Conditional Statements & Loops)

// Transactions Array
let transactions = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let credit = 0;
let debit = 0;
let creditAmount = 0;
let debitAmount = 0;
let suspicious = 0;
let balance = 0;

for (let i = 0; i < transactions.length; i++) {

    if (transactions[i] > 0) {
        credit++;
        creditAmount += transactions[i];

        if (transactions[i] > 10000) {
            console.log("Suspicious Credit Transaction: " + transactions[i]);
            suspicious++;
        }

    } else {
        debit++;
        debitAmount = debitAmount + (-transactions[i]); // Convert to positive

        if (transactions[i] < -10000) {
            console.log("Suspicious Debit Transaction: " + transactions[i]);
            suspicious++;
        }
    }

    balance += transactions[i];
}

console.log("Credit Transactions: " + credit);
console.log("Debit Transactions: " + debit);
console.log("Total Credit Amount: " + creditAmount);
console.log("Total Debit Amount: " + debitAmount);
console.log("Remaining Balance: " + balance);
console.log("Suspicious Transactions: " + suspicious);


// Output:
// Suspicious Debit Transaction: -15000
// Credit Transactions: 3
// Debit Transactions: 5
// Total Credit Amount: 57000
// Total Debit Amount: 20500
// Remaining Balance: 36500
// Suspicious Transactions: 2 