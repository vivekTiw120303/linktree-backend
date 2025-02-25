# 🚀 Linktree Backend API  

A **Node.js backend** for a **Linktree-like platform** with **user authentication, referrals, and password reset**.  

---

## 📌 Features  
✅ User Registration & Login (JWT Authentication)  
✅ Password Hashing (bcrypt)  
✅ Referral System (Unique referral codes & tracking)  
✅ Password Reset (Email-based)  
✅ MongoDB Database (Mongoose)  
✅ Secure API (Rate limiting, Helmet, CORS)  
✅ Unit Testing (Jest & Supertest)  

---

## 📌 Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT (JSON Web Token)  
- **Security:** bcrypt, Helmet, CORS  
- **Email Service:** Nodemailer (Gmail SMTP)  
- **Testing:** Jest & Supertest  

---

📌 Installation & Setup
1️⃣ Clone the Repository
```sh
git clone https://github.com/vivekTiw120303/linktree-backend.git
cd linktree-backend
```

2️⃣ Install Dependencies
```
npm install
```

3️⃣ Create a .env File
Create a .env file in the root folder and add the following:

```
MONGO_URI=your-mongodb-uri
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
JWT_SECRET=your-secret-key
PORT=5000
```

📌 Running the Server
```
npm start
```

✅ API will be live on: http://localhost:5000

## 📌 API Endpoints  

### 🛠️ Authentication  
| Method | Endpoint              | Description             |
|--------|----------------------|-------------------------|
| POST   | `/api/auth/register` | Register a new user    |
| POST   | `/api/auth/login`    | User login (JWT Token) |

### 👥 Referral System  
| Method | Endpoint              | Description                          |
|--------|----------------------|--------------------------------------|
| GET    | `/api/referrals/stats` | Get user’s referral statistics |

### 🔐 Password Reset  
| Method | Endpoint                  | Description                     |
|--------|--------------------------|---------------------------------|
| POST   | `/api/auth/forgot-password` | Request password reset email  |
| POST   | `/api/auth/reset-password`  | Reset password using token    |


📌 Running Tests
To run Jest unit tests:
```
npm test
```

✅ Test cases cover user registration, login, and password reset.
