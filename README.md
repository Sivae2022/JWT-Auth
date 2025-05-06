


This project is a full-stack MERN application for user authentication. It includes: 

- **Backend API** with Express & Mongo DB 
- Routes for authentication (register, login, logout), user profile management (view, update)
- JWT authentication stored in an HTTP-only cookie
- Protected routes and endpoints to prevent unauthorized access
- Custom middleware to check JSON Web Token and store it in a cookies
- Error handling middleware
- **Frontend** built with React for user registration, login, logout, viewing and updating the profile
- React Bootstrap UI for design
- React Toastify for notifications

---

## Backend Setup

### Env Variables

1. Rename the `.env.example` file to `.env`.
2. Add the following environment variables to your `.env` file:

```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET='abc123'  # Replace with your own secret key for JWT
```

- **MONGO_URI**: Use your own MongoDB URI (e.g., `mongodb://localhost:27017/mern-auth`).
- **JWT_SECRET**: Change this to a strong secret key used to sign the JWT token.

### Install Backend Dependencies

Run the following command in the `backend` folder to install the required packages:

```bash
npm install
```

This will install the following key packages:
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling
- **jsonwebtoken**: Used for generating and verifying JWT tokens
- **bcryptjs**: Used for password hashing
- **cookie-parser**: Used to parse cookies (for JWT authentication)
- **express-async-handler**: Helper to handle asynchronous requests without try/catch blocks

### Backend Structure

- **server.js**: The entry point for the Express server.
- **models/userModel.js**: Defines the MongoDB schema for a user.
- **controllers/authController.js**: Contains logic for registering, logging in users, and JWT token generation.
- **controllers/userController.js**: Manages user profile functionalities (view and update).
- **middleware/authMiddleware.js**: Protects routes using JWT and ensures that only authorized users can access certain endpoints.
- **routes/authRoutes.js**: Contains routes for login, register, and logout.
- **routes/userRoutes.js**: Contains routes for viewing and updating the user profile.

### Running the Backend

To run the backend server, use the following command:

```bash
npm run server
```

This will start the server on port `5000`.

---

## Frontend Setup

### Install Frontend Dependencies

1. Navigate to the `frontend` folder.

```bash
cd frontend
```

2. Install the required frontend dependencies:

```bash
npm install
```

This will install the following key packages:
- **react**: React library for building the UI
- **react-router-dom**: For routing and navigation
- **react-bootstrap**: For styling components
- **react-toastify**: For displaying toast notifications
- **axios**: For making HTTP requests to the backend

### Frontend Structure

- **src/App.js**: The main entry point for the React app.
- **src/pages/Auth/Register.js**: The user registration form.
- **src/pages/Auth/Login.js**: The user login form.
- **src/pages/Profile/Profile.js**: Displays the user's profile and allows updates.
- **src/components/Navbar.js**: Navbar component with links to login, register, and profile.
- **src/utils/api.js**: Axios utility for making API requests.

### Running the Frontend

To run the frontend development server, use the following command:

```bash
npm run dev
```

This will start the frontend server on port `3000`, and it will automatically connect to the backend API running on port `5000`.

---

## Run Both Frontend & Backend Simultaneously

You can run both frontend and backend together by using the following command:

```bash
npm run dev
```

This will start the frontend on port `3000` and the backend on port `5000`. Both servers will be running simultaneously.

---

## Build & Deploy

### Create Production Build for Frontend

1. To create a production build of the frontend, run the following command:

```bash
cd frontend
npm run build
```

2. This will create an optimized production build inside the `frontend/build` folder.

### Deploying the Backend

For deploying your backend, you can use platforms like Heroku, DigitalOcean, or any other cloud service that supports Node.js.

Ensure that you add your MongoDB URI and JWT secret in the `.env` file on your server.

### Deploying the Frontend

After building the frontend, you can deploy the production build to platforms like Netlify, Vercel, or any static hosting service.

---

## Additional Information

- The project uses **JWT** for authentication and authorization. It is stored in an HTTP-only cookie to enhance security.
- You can protect any route by using the `protect` middleware that checks if a valid JWT is passed via cookies.
- React Toastify is used to show notifications for actions like successful login, registration, or errors.

