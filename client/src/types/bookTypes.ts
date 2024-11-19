export interface Book {
  _id?: string; // Mongoose automatically generates an _id for each document
  title: string;
  subtitle: string;
  author: string;
  isbn: string;
  createdAt?: string; // Timestamp fields
  updatedAt?: string;
}