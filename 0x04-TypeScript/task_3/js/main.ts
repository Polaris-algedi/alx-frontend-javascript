/// <reference path="./crud.d.ts" />  <!-- Triple-slash directive to include the crud.d.ts file -->

import { RowID, RowElement } from './interface';  // Importing RowID and RowElement from interface.ts
import * as CRUD from './crud';  // Import everything from crud.js as CRUD

// Create the row object with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Create a const variable `newRowID` with the type RowID and assign the value from insertRow
const newRowID: RowID = CRUD.insertRow(row);  // The insertRow function is invoked

console.log(`Inserted new row with ID: ${newRowID}`);

// Create the updatedRow object with the type RowElement and add the age field
const updatedRow: RowElement = {
  ...row,  // Spread the existing row
  age: 23, // Add or update the age field
};

// Call the updateRow function
const updatedRowID = CRUD.updateRow(newRowID, updatedRow);  // Update the row with the new age
console.log(`Updated row with ID: ${updatedRowID}`);

// Call the deleteRow function
CRUD.deleteRow(newRowID);  // Delete the row by its ID
console.log(`Deleted row with ID: ${newRowID}`);
