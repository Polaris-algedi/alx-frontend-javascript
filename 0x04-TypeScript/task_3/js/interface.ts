// Define the RowID type as a number
export type RowID = number;

// Define the RowElement interface with three fields: firstName, lastName, and age (optional)
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // age is optional
}
