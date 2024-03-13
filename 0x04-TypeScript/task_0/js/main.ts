// Interface for Student data
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Abas",
  lastName: "Ali",
  age: 20,
  location: "US",
};

const student2: Student = {
  firstName: "Anas",
  lastName: "Ali",
  age: 21,
  location: "Indonesia",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render a table row
function renderTableRow(student: Student) {
  const tableBody = document.getElementById("tableBody");
  if (tableBody) {
    const tableRow = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    tableRow.appendChild(firstNameCell);
    tableRow.appendChild(locationCell);
    tableBody.appendChild(tableRow);
  } else {
    console.error("Table body element not found!");
  }
}

// Render table rows for each student
studentsList.forEach(renderTableRow);
