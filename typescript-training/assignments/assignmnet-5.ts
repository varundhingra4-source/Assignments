//Assignment-5 (Conditional Statements & Loops)

// Function
function calculateHike(
    employeeName: string,
    salary: number,
    experience: number,
    rating: number
): void {

    let variablePay = 0;
    let bonus = 0;
    let reward = 0;

    if (rating >= 4) {
        variablePay = 15;
        bonus = 1500;
    } else if (rating >= 3) {
        variablePay = 10;
        bonus = 1200;
    } else {
        variablePay = 3;
        bonus = 300;
    }

    if (experience >= 5) {
        reward = 5000;
    }

    let hike = (salary * variablePay / 100) + bonus + reward;
    let hikePercentage = (hike / salary) * 100;

    console.log(employeeName + " : " + hikePercentage.toFixed(2) + "%");
}

// Function Calls
calculateHike("Alice Johnson", 75000, 5.1, 4.2);
calculateHike("Bob Smith", 68000, 3.2, 3.8);
calculateHike("Carol Davis", 82000, 7.1, 4.5);
calculateHike("David Brown", 90000, 10.2, 2.5);
calculateHike("Eva Green", 60000, 2.4, 3.5);


// output:
// Alice Johnson : 23.67%
// Bob Smith : 11.76%
// Carol Davis : 22.93%
// David Brown : 8.89%
// Eva Green : 12.00%