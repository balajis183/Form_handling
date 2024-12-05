Project Overview
This project is a simple user registration application built with Node.js, Express, and MongoDB. It allows users to submit their name and email through a web form, which is then stored in a MongoDB database. The application uses EJS as the templating engine to render the registration form.

index.js
The index.js file serves as the main entry point for the application. It contains the following key functionalities:

Dependencies: The file imports necessary modules, including express for creating the web server, mongoose for interacting with MongoDB, and body-parser for parsing incoming request bodies.

Database Connection: The connect function establishes a connection to a MongoDB database named FormRegistration. It logs a success message upon a successful connection or an error message if the connection fails.

Middleware Setup: The application sets up middleware to parse JSON and URL-encoded data from incoming requests.

View Engine Configuration: The file configures EJS as the templating engine and sets the views directory for rendering HTML templates.

User Schema: A Mongoose schema is defined for user data, which includes name and email fields. This schema is used to create a Mongoose model for interacting with the database.

Routes:

GET /test: A test route that returns a simple message to verify that the server is running.
POST /submit: This route handles form submissions. It extracts the user's name and email from the request body, creates a new user document, and saves it to the database. It sends a response indicating whether the user was successfully saved or if there was an error.
GET /register: This route renders the registration form using the form.ejs template.
Server Listening: The application listens on port 8000 and logs a message to the console when the server is running.

form.ejs
The form.ejs file is the HTML template that renders the user registration form. It includes the following features:

HTML Structure: The file defines a basic HTML structure with a DOCTYPE, html, head, and body elements.

Bootstrap Integration: It links to the Bootstrap CSS framework for styling, ensuring that the form is responsive and visually appealing.

Form Elements: The form includes:

A header (h1) that displays the title "User Registration Form" with Bootstrap styling.
Input fields for the user's name and email, each with associated labels for accessibility. The email input uses type="email" to enable built-in validation.
A submit button labeled "Register" that allows users to submit their information.
Message Area: A placeholder <div> is included to display success or error messages after form submission, enhancing user feedback.
