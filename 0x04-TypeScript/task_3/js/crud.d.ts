// Import RowID and RowElement from the interface.ts file
import { RowID, RowElement } from './interface';

// Declare module for the crud.js functions
declare module 'crud' {
  // Declaring the types for the crud functions

  // insertRow function accepts a RowElement object and returns a RowID (number)
  export function insertRow(row: RowElement): RowID;

  // deleteRow function accepts a RowID and returns void
  export function deleteRow(rowId: RowID): void;

  // updateRow function accepts a RowID and a RowElement, and returns a RowID (number)
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
