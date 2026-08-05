// Assignment -3 (Arrays/Datatypes/Operators)

let studentNames = ["Suresh", "Mahesh", "Naresh"];
let marks = [75, 80, 82];

let updatedMarks = [];
let totalMarks = 0;

for (let i = 0; i < marks.length; i++) {
    updatedMarks[i] = marks[i] + 10;
    totalMarks = totalMarks + updatedMarks[i];
}

let average = totalMarks / updatedMarks.length;

console.log("Updated Marks:");

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i] + ": " + updatedMarks[i]);
}

console.log("Average Marks: " + average);

// Outptut:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89