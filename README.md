# [Job-Portal-Website](https://job-portal-website-zn3z.onrender.com)
# Job Portal Website

## Project Overview
The **Job Portal Website** is an online platform that connects job seekers and employers. It allows job seekers to browse job opportunities, apply for jobs, and manage their profiles. Employers can post new job listings, manage applications, and search for candidates. This project aims to simplify the job application process and make it more accessible for both job seekers and employers.

## Features

### Job Seekers
- **User Registration and Login**: Sign up, log in, and manage your profile securely.
- **Browse Jobs**: View job listings with search filters (e.g., location, salary range, job type, experience level).
- **Apply for Jobs**: Easily apply for jobs by submitting an online application.
- **Job Alerts**: Receive email notifications for new jobs that match your profile.
- **Profile Management**: Edit personal details, update resume, and track job applications.

### Employers
- **Employer Registration and Login**: Create an employer profile and manage company details.
- **Post Jobs**: Add new job openings with detailed descriptions, requirements, and qualifications.
- **Manage Job Listings**: Edit, delete, or close job listings.
- **View Applications**: Track applications for posted jobs and filter candidates based on qualifications.
- **Job Dashboard**: View and manage all your job listings and applications from a single dashboard.

### Admin
- **Admin Dashboard**: View all users (job seekers and employers), job listings, and applications.
- **User Management**: Approve, suspend, or delete user accounts.
- **Job Management**: Approve or remove job listings.
- **View Analytics**: Get statistics about job postings, applications, and user activity.

## Technologies Used

### Frontend
- **HTML5**: Provides the basic structure of the web pages.
- **CSS3**: For styling and layout of the web pages.
- **JavaScript**: Adds interactivity to the web pages.
- **Bootstrap**: For responsive design and pre-built UI components.
- **AJAX**: For asynchronous data loading without refreshing the page.
  
### Backend
- **Node.js**: JavaScript runtime environment to build server-side applications.
- **Express.js**: Web framework for Node.js to handle routing and server-side logic.
- **MongoDB**: NoSQL database for storing job listings, user profiles, applications, etc.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB to interact with the database.
  
### Authentication
- **Passport.js**: Middleware for handling authentication using local strategies (username/password), Google, or Facebook login.
- **JWT (JSON Web Tokens)**: For securing API routes and session management.

### Deployment
- **Heroku**: For hosting the application and running the backend server.
- **MongoDB Atlas**: Cloud database service for hosting MongoDB.

## Installation and Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/)
- **npm**: Node.js package manager (comes with Node.js)
- **MongoDB**: Local installation or MongoDB Atlas account.

### Steps to Run the Application Locally
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sachiinn05/Job-Portal-Website.git
2. **Navigate into the project directory**:
   cd Job-Portal-Website
3. **Install required dependencies**:
   npm install
4. **Set up your environment variables: Create a .env file in the root directory and set the following environment variables**:
   MONGO_URI=<your-mongo-db-uri> # MongoDB connection string
SESSION_SECRET=<your-session-secret> # Secret key for session management
JWT_SECRET=<your-jwt-secret> # Secret key for JWT authentication
MAILGUN_API_KEY=<your-mailgun-api-key> # For sending email notifications (optional)
MAILGUN_DOMAIN=<your-mailgun-domain> # For sending email notifications (optional)
5. **Run the application locally**:
  npm start

**License**
This project is licensed under the MIT License. See the LICENSE file for more information.
 
***Contact***
If you have any questions or suggestions, feel free to reach out to me at:

Email: sachinsingh6386@gmail.com
