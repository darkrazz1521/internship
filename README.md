# CodeForge Internship/Volunteer Portal

A modern MERN stack web app for internship and volunteer applications, with admin management.

## Features

- Beautiful responsive landing page
- Registration form for applicants
- Admin login and dashboard
- Accept/Reject applications
- Secure admin session with logout

## How to Use

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd basti
cd server
npm install
cd ../client
npm install
```

### 2. Configure MongoDB

- Edit `server/.env` and set your MongoDB connection string:

  ```
  MONGODB_URL=your_mongodb_url
  ```

### 3. Start Backend

```bash
cd server
node server.js
```
Backend runs on `http://localhost:5000`

### 4. Start Frontend

```bash
cd client
npm run dev
```
Frontend runs on `http://localhost:5173` (default Vite port)

### 5. Usage

- **Home Page:** See welcome message and navigation.
- **Apply Now:** Fill out and submit the registration form.
- **Admin Login:**  
  - Username: `admin`  
  - Password: `123456`
- **Admin Dashboard:**  
  - View, search, accept, or reject applications.
  - Logout securely.

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Styling:** TailwindCSS

## Customization

- Change admin credentials in `App.jsx` if needed.
- Update MongoDB URL in `.env` for production.


