# MERN Book CRUD Web App

## Overview

This project is a full-stack MERN (MongoDB, Express.js, React, Node.js) application built with **TypeScript**. It allows users to create, read, update, and delete book entries. The frontend is styled using **Material UI**, while form handling is managed with **Formik**. Data fetching is done using **RTK Query** for seamless state management and server-side interactions.

## Features

- **Create**: Add new books with details like title, author, and description.
- **Read**: View a list of all books with detailed information.
- **Update**: Edit existing book entries.
- **Delete**: Remove books from the database.
- **Responsive Design**: Built with **Material UI** for a modern, user-friendly interface.
- **Efficient Data Handling**: Uses **RTK Query** for efficient API communication and state management.
- **Form Handling**: Utilizes **Formik** for smooth and robust form handling.

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Material UI, Formik, RTK Query
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Screenshots

Below are some screenshots of the application:

#### Home Page


#### Add Book Detail Page


#### Update Book Detail Page


## Installation

### Prerequisites

- **Node.js** (with npm or yarn)
- **MongoDB** (either locally or using a cloud provider like MongoDB Atlas)

### Clone the Repository

```bash
git clone https://github.com/srikriydv/mern-book-crud.git
cd mern-book-crud
```

#### Install Dependencies

##### Server

Navigate to the backend directory and install the necessary dependencies:
```
cd backend
npm install
```
##### Client

Navigate to the frontend directory and install the necessary dependencies:
```
cd frontend
npm install
```
##### Environment Variables

Create a .env file in the backend directory and add the following configuration:
```
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
PORT=port_address
```
Make sure to replace your_mongodb_connection_string and your_database_name with your actual MongoDB connection details.

##### Run the Application

###### 1.Start the Backend Server:
Navigate to the backend folder and run the server:
```
cd backend
npm run dev
```
###### 2.Start the Frontend Client:
In a separate terminal, navigate to the frontend folder and run the client:
```
cd frontend
npm run dev
```
The application should now be running at http://localhost:5173.

Usage

• Navigate to http://localhost:5173 in your browser to access the application.
• Use the navigation menu to create, view, update, or delete books.
• The application supports CRUD operations, and changes are reflected in real-time thanks to RTK Query.
