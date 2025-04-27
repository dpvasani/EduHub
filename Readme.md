# 🎓 Full Stack LMS Platform

Welcome to the **Full Stack Learning Management System (LMS)** — an industrial-grade, scalable, and feature-rich platform designed using cutting-edge technologies like **TypeScript**, **Node.js**, **Next.js 13**, **MongoDB**, **Redis**, **RTK Query**, **Socket.IO**, and more.

This platform implements best practices in modern web development, ensuring robust **authentication**, **caching**, **real-time communication**, and **responsive UI/UX** for seamless learning experiences.

---

## 🚀 Tech Stack Overview

- **Frontend**: Next.js 13, Tailwind CSS, RTK Query  
- **Backend**: Node.js, Express.js, TypeScript  
- **Database**: MongoDB  
- **Caching**: Redis  
- **Authentication**: JWT, OAuth (Google & GitHub)  
- **Cloud & Media**: Cloudinary, VdoCipher  
- **Payments**: Stripe  
- **Real-Time**: Socket.IO  
- **Utilities**: Nodemailer, Cron Jobs  

---

## 🗂️ Project Structure

```
├── client/       # Frontend (Next.js 13)
├── server/       # Backend (Express.js)
├── README.md     # Project Documentation
```

---

## 🔐 Authentication & Authorization

- Email-based registration with activation link  
- Login/Logout flow with refresh token handling  
- OAuth login via Google & GitHub  
- Role-based access (User, Admin)  
- Middleware-based route protection  

---

## 👤 User Functionality

- Register, activate account, login/logout  
- Edit profile, update password, upload avatar  
- Access and track purchased courses  
- View personalized dashboard  
- Post and reply to course questions  
- Submit and interact with course reviews  
- Get real-time interaction notifications  

---

## 📚 Course Management

- Complete course CRUD with video lessons  
- Admin controls for adding/editing/removing courses  
- Filtered course listings (public/private)  
- Detailed course previews & progress tracking  
- Questions & answers per course  
- Reviews and reply threads  
- Access restricted to enrolled users  

---

## 💳 Orders & Payments

- Stripe integration for secure payments  
- Complete checkout flow  
- Automatic course access post-payment  
- Admin panel to monitor and manage orders  

---

## 🔔 Notification System

- Real-time alerts using Socket.IO  
- Notification API and model  
- Mark notifications as read/unread  
- Scheduled cleanup of old notifications via cron jobs  

---

## 🛠️ Admin Dashboard

- Full access to manage users, courses, and orders  
- Add/remove team members  
- Delete users and outdated courses  
- Visual analytics (last 28 days & yearly trends)  
- UI control for layout, FAQs, banners, categories  

---

## 🎨 UI & UX

- Fully responsive layout with Tailwind CSS  
- Dynamic hero sections, banners, and FAQs  
- Clean dashboard for both users and admins  
- Integrated course search and category filters  
- Modular components for maintainability  

---

## ⚙️ DevOps & Deployment

- Separate `.env` setup for client/server  
- Redis & MongoDB configured for production  
- SMTP configuration for email services  
- Cloudinary setup for image/media hosting  
- Deployment-ready with pre-checks and fixes  

---

## 🔧 Environment Variables

### `client/.env`
```env
NEXT_PUBLIC_SERVER_URI=http://localhost:8000/api/v1/
NEXT_PUBLIC_SOCKET_SERVER_URI=http://localhost:8000/
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
SECRET=ELearning
```

### `server/.env`
```env
PORT=8000
ORIGIN=['http://localhost:3000/']
NODE_ENV=development
DB_URL=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_SECRET_KEY=
REDIS_URL=
ACTIVATION_SECRET=838388387666
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SERVICE=gmail
SMTP_MAIL=
SMTP_PASSWORD=
VDOCIPHER_API_SECRET=
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
ACCESS_TOKEN='your_access_token'
REFRESH_TOKEN='your_refresh_token'
ACCESS_TOKEN_EXPIRE=5
REFRESH_TOKEN_EXPIRE=3
```

---

## ✅ Feature Highlights

- 🔐 Secure JWT + OAuth Authentication  
- 🎓 Complete Course Lifecycle & User Access  
- 💬 Real-Time Q&A and Reviews  
- 💳 Stripe-Powered Payment System  
- 🔔 Instant Notifications with Socket.IO  
- 📊 Admin Dashboard with Analytics  
- ☁️ Cloud & Media Integration  
- 🚀 Production-Ready, Scalable Infrastructure  

---

