interface Teacher {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

console.log(printTeacher("John", "Doe")); // Output: J. Doe


// 4. Writing a class
/*
Write a Class named StudentClass:

The constructor accepts firstName(string) and lastName(string) arguments
The class has a method named workOnHomework that return the string Currently working
The class has a method named displayName. It returns the firstName of the student
The constructor of the class should be described through an Interface
The class should be described through an Interface
*/




interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass
}

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements Student {
  firstName: string
  lastName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
  
  workOnHomework(): string {
    return "Currently working"
  }
  
  displayName() {
    return this.firstName
  }
}
