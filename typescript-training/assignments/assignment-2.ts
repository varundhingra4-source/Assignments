// Assignment-2 (Conditional Statements)

function checkLoanEligibility(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {

    if (creditScore > 750) {
        console.log(customerName + " is eligible for the loan.");
    } else if (creditScore >= 650) {

        if (income >= 50000) {
            if (isEmployed) {
                if (debtToIncomeRatio < 40) {
                    console.log(customerName + " is eligible for the loan.");
                } else {
                    console.log(customerName + " is not eligible. DTI is too high.");
                }
            } else {
                console.log(customerName + " is not eligible. Customer is unemployed.");
            }
        } else {
            console.log(customerName + " is not eligible. Income is below $50,000.");
        }

    } else {
        console.log(customerName + " is not eligible. Credit score is below 650.");
    }
}

// Function Calls
checkLoanEligibility("John Doe", 720, 55000, true, 35);

// Output: John Doe is eligible for the loan.