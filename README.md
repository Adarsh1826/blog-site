# Bridge

This is a **full-stack blog platform** called **Bridge**, where users can **sign up, sign in, create posts, and view other users' posts**. The project is divided into three main folders:

- **backend** → Cloudflare Workers with SQL database
- **common** → Shared NPM package for input validation (using TypeScript & Zod)
- **frontend** → Vite + TypeScript-based React app

## Features ✨
- **Authentication** (Sign in, Sign up, Token-based Auth)
- **Create posts** (Title, Content)
- **View other users' posts**
- **Fully typed with TypeScript**
- **Input validation with Zod**

---

## 📂 Project Structure

```
📦 Bridge
├── 📁 backend        # Backend (Cloudflare Workers + SQL)
├── 📁 common         # Shared package (NPM package for input validation)
├── 📁 frontend       # Frontend (Vite + React + TypeScript)
```

### 1️⃣ Backend (Cloudflare Workers + SQL)
- **Technology Stack:**
  - Cloudflare Workers (Serverless backend)
  - SQL database
  - JWT-based authentication
  - REST API for handling users & posts
- **Setup:**
  ```sh
  cd backend
  npm install
  wrangler dev
  ```

### 2️⃣ Common (NPM Package for Input Validation)
- **Technology Stack:**
  - TypeScript
  - Zod for schema validation
- **Setup & Publishing:**
  ```sh
  cd common
  npm install
  npm run build
  npm publish  # (if publishing to npm)
  ```
- **Example Usage in Backend & Frontend:**
  ```ts
  import { BlogInput } from "ads-blog-common";
  ```

### 3️⃣ Frontend (Vite + TypeScript + React)
- **Technology Stack:**
  - Vite (for fast development)
  - React + TypeScript
  - TailwindCSS (for styling)
  - React Router (for navigation)
  - Axios (for API calls)
- **Setup:**
  ```sh
  cd frontend
  npm install
  npm run dev
  ```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/bridge.git
cd bridge
```

### 2️⃣ Install Dependencies
```sh
cd backend && npm install
cd ../common && npm install
cd ../frontend && npm install
```

### 3️⃣ Start the Services
#### Backend
```sh
cd backend
wrangler dev
```
#### Frontend
```sh
cd frontend
npm run dev
```

---

## 📜 API Endpoints
### Authentication
| Method | Endpoint     | Description         |
|--------|-------------|---------------------|
| POST   | /signup     | Register new user  |
| POST   | /signin     | Login user         |

### Posts
| Method | Endpoint         | Description            |
|--------|-----------------|------------------------|
| GET    | /post/bulk      | Fetch all posts       |
| GET    | /post/:id       | Fetch single post     |
| POST   | /post/create    | Create a new post     |

---

## 🛠 Future Enhancements
- Add likes/comments feature
- Implement better UI for user interaction
- Deploy frontend and backend to production

---

## 🤝 Contributing
Feel free to contribute by submitting issues or pull requests! 🙌

---
## Live Link
https://blog-site-git-main-adarsh-kumar-singhs-projects-4ba8a946.vercel.app/

---
## 📜 License
MIT License

