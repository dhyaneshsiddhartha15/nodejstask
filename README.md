

## Description
**Project Description:**

This project focuses on developing a user authentication system with RESTful APIs for user registration, login, and password reset functionalities. The APIs are designed to be secure, efficient, and user-friendly, allowing users to easily create accounts, log in securely, and recover their passwords if forgotten.

1. **User Registration API (`POST /api/register`):**
   - **Description:** Allows users to register with their email, password, and username.
   - **Request Body:** `{ "email": "user@example.com", "password": "password123", "username": "username123" }`
   - **Response:** `{ "message": "User registered successfully" }`

2. **User Login API (`POST /api/login`):**
   - **Description:** Enables users to log in using their username and password.
   - **Request Body:** `{ "username": "username123", "password": "password123" }`
   - **Response:** `{ "message": "Login successful" }`

3. **Forget User Password API (`POST /api/forgot-password`):**
   - **Description:** Allows users to request a password reset OTP sent to their email.
   - **Request Body:** `{ "email": "user@example.com" }`
   - **Response:** `{ "message": "Password reset OTP sent successfully" }`

**Technologies Used:**
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** bcrypt for password hashing
- **Email Services:** Nodemailer for sending password reset OTPs
- **API Testing:** Postman or any API testing tool

**Security Measures:**
- Passwords are securely hashed before storing them in the database.
- OTPs are used for password reset requests, enhancing security.
- Data validation and error handling are implemented to ensure smooth user experience.

**Future Enhancements:**
- Implementing JWT-based authentication for secure API access.
- Adding more user profile features and settings.
- Improving API documentation for developers.

Overall, this project aims to provide a robust and secure user authentication system with essential features for user management in web applications..

## Features
- User Registration using Email, Password, and Username
- User Login using Username and Password
- Forget User Password API for resetting passwords using email verification

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- nodemailer
- otp-generator

## Installation
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up your environment variables in a `.env` file (see `.env.example`).
4. Start the server with `npm start`.

## Usage
1. Register a new user using the `/register` endpoint with a POST request.
2. Log in with the `/login` endpoint using a POST request.
3. Use the `/forgot-password` endpoint to request a password reset OTP via email.

## project-root/
│
├── config/
│   └── database.js         // Database connection configuration
│
├── controllers/
│   ├── userController.js   // Controller for user-related API logi
│
├── models/
│   ├── User.js             // User model schema
│   └── OTP.js              // OTP model schema
│

├── utils/
│   └── mailSender.js       // Utility function for sending emails
│
├── .env                    // Environment variables (ignored in git)
├── .gitignore              // Git ignore file
├── package.json            // Node.js package file
├── server.js               // Express server file
└── README.md               // Project documentation


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
