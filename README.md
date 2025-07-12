# Advanced MERN B2B Teams Project Management SaaS-Efficio-Client

## ✨ Project Overview

Advanced MERN B2B Teams Project Management SaaS is a robust, scalable, and feature-rich platform designed to streamline project and team management for B2B organizations.Client/frontend is Built with the latest technologies, it offers seamless collaboration, task tracking, workspace management, and advanced analytics to empower teams and boost productivity.

---

## 💻 Screenshots

> _Replace the image links below with actual screenshots when available._

### Dashboard

![Dashboard Screenshot](./screenshots/dashboard-placeholder.png)

### Project Management

![Project Management Screenshot](./screenshots/project-management-placeholder.png)

### Task Table

![Task Table Screenshot](./screenshots/task-table-placeholder.png)

---

## 📦 Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript, MongoDB
- **Authentication:** JWT, OAuth (Google)
- **State Management:** React Context API
- **API Communication:** Axios
- **Other:** Shadcn UI, PostCSS

---

## 📁 Folder Structure

```
client/
│
├── public/                # Static assets (images, icons, etc.)
├── src/
│   ├── assets/            # Static assets for React
│   ├── components/        # Reusable UI components
│   ├── constant/          # App-wide constants
│   ├── context/           # React context providers
│   ├── hoc/               # Higher-order components
│   ├── hooks/             # Custom React hooks
│   ├── layout/            # Layout components
│   ├── lib/               # API and utility libraries
│   ├── page/              # Page components (by route)
│   ├── routes/            # Route definitions
│   ├── store/             # State selectors and store
│   ├── types/             # TypeScript types
│   └── index.css          # Global styles
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.ts         # Vite configuration
```

---

## ⚙️ Installation and Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
```

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

---

## 🚀 How to Run the Project

### 1. Start the Backend Server

```bash
cd backend
npm run dev
```

- The backend will typically run on [http://localhost:5000](http://localhost:5000) (check your config).

### 2. Start the Frontend Development Server

```bash
cd client
npm run dev
```

- The frontend will typically run on [http://localhost:5173](http://localhost:5173) (check your config).

---

## 🔐 Required Environment Variables

### Backend (`backend/.env`)

| Variable Name          | Description                       |
| ---------------------- | --------------------------------- |
| `MONGO_URI`            | MongoDB connection string         |
| `JWT_SECRET`           | Secret key for JWT authentication |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID            |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret        |
| `BASE_URL`             | Base URL of the backend server    |
| `PORT`                 | Port number for backend server    |

### Frontend (`client/.env`)

| Variable Name           | Description                         |
| ----------------------- | ----------------------------------- |
| `VITE_API_URL`          | Base URL for backend API requests   |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth client ID for frontend |

> _Add any additional environment variables as required by your deployment._

---

## 🔧 Features and Functionality

- **User Authentication:** Secure login with JWT and Google OAuth.
- **Workspace Management:** Create, edit, and manage multiple workspaces.
- **Project Management:** Organize projects within workspaces, assign members, and track progress.
- **Task Management:** Create, assign, and update tasks with status tracking.
- **Role-Based Access Control:** Fine-grained permissions for users and members.
- **Team Collaboration:** Invite members, manage roles, and collaborate in real-time.
- **Analytics Dashboard:** Visualize workspace and project analytics.
- **Responsive UI:** Modern, mobile-friendly interface with reusable components.
- **Notifications & Toasts:** Real-time feedback for user actions.
- **Error Handling:** Robust error boundaries and user-friendly messages.

---

> For more details, refer to the codebase and inline documentation.
