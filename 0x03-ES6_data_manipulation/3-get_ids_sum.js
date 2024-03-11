/* Returns the sum of all the student ids. */

export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((accumulator, student) => accumulator + student.id, 0);
}
