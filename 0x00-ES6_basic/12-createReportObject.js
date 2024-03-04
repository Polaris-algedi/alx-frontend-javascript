/* Let's create a report object */
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
