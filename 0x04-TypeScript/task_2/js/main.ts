// Define DirectorInterface with 3 methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define TeacherInterface with 3 methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create a function createEmployee to return either Director or Teacher instance based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}


// 6. Creating functions specific to employees


function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director
}

function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks())
  } else {
    console.log(employee.workTeacherTasks())
  }
}


// 7. String literal types


type Subjects = "Math" | "History"

function teachClass(todayClass: Subjects) {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History"
}
