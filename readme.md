# **Blog Portal Application**

### **Introduction to the Project**

This Blog Portal application is a full-stack web platform designed to facilitate content creation, publication, and management. It provides comprehensive functionalities for users to create, edit, and manage blog posts, as well as for administrators to oversee content and user activities. The project emphasizes scalability, maintainability, and a user-friendly interface.

---

### **Project Overview**

The project is structured into two main parts:
1. **Client**: The frontend built using React.js.
2. **Server**: The backend powered by Node.js and Express.

Both parts work together to deliver a seamless blogging experience, with functionalities like role-based access, dynamic content rendering, and secure user authentication.

---

### **Tech Stack Used**

#### **Frontend (Client)**
- **Framework**: React.js
- **State Management**: Recoil
- **Styling**: CSS(Responsive)
- **Routing**: React Router
- **HTTP Client**: Axios

#### **Backend (Server)**
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **ORM**: Mongoose

#### **Additional Tools**
- **Version Control**: Git
- **Build Tools**: NPM
- **Deployment**: Render, Vercel

---

### **Roles and Responsibilities**

- **Admin**:
   - Oversee all blog content.
   - Manage users and permissions.
   - Approve or reject blog posts.

- **Publisher**:
   - Review submitted blog posts.
   - Approve and publish verified posts.
   - Edit published content if necessary.

- **Creator**:
   - Create and edit blog posts.
   - Submit posts for review.

- **Verifier**:
   - Review and verify blog posts.
   - Request revisions or approve for publishing.

- **Viewer**:
   - Browse published blogs.

---

### **Key Features**

1. **User Authentication**:
   - Secure login and registration using JWT.
   - Role-based access control (RBAC) for different user types.
   - Mobile number verification for enhanced security.

2. **Password Management**:
   - Reset password functionality with email  verification.
   - Secure password handling with encryption.

3. **Blog Management**:
   - Create, edit, and delete blog posts.
   - Drafting and publishing workflows.
   - Blog verification process by verifiers and publishers.

4. **Admin Dashboard**:
   - User management (add, edit, remove users).
   - Review and approve/reject blog posts.
   - Monitor user activity.

5. **Dynamic Content**:
   - Fetch and display blogs from the server.
   - Support for images and rich text in blogs.

---

### **Project Structure**

```plaintext
blog-portal-main/
├── client/                      # Frontend source code
│   ├── public/                  # Static assets
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Admin.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── ResetPassword.js
│   │   │   ├── MobileVerification.js
│   │   │   └── ...              # Other components
│   │   ├── recoil/              # Recoil state management
│   │   │   ├── authState.js
│   │   │   
│   │   ├── styles/              # Component-specific CSS files
│   │   ├── data/                # Mock data or configurations
│   │   ├── images/              # Image assets
│   │   ├── App.js               # Main React component
│   │   └── index.js             # Entry point for React
│   ├── package.json             # Frontend dependencies
│   └── README.md                # Client-specific README
│
├── server/                      # Backend source code
│   ├── models/                  # Database schemas
│   │   ├── articleHTML.js
│   │   ├── user.js
│   │   └── data.js
│   ├── routes/                  # API routes
│   │   ├── auth.js
│   │   ├── blog.js
│   │   └── details.js
│   ├── middleware/              # Custom middleware (e.g., auth)
│   ├── app.js                   # Main server file
│   ├── package.json             # Backend dependencies
│   └── sampleData/              # Sample data for testing
│
├── .gitignore
└── readme.md                    # Project documentation
```

---

### **Setup Instructions**

#### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB installed locally or a cloud instance
- NPM or Yarn

#### **Installation Steps**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Chirag-Punia/blog-portal.git
   cd blog-portal-main
   ```

2. **Install Dependencies**
   - **Frontend**:
     ```bash
     cd client
     npm install
     ```

   - **Backend**:
     ```bash
     cd ../server
     npm install
     ```

3. **Environment Configuration**
   - Create a `.env` file in the `server` directory with:
     ```
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     PORT=5000
     ```

4. **Run the Application**
   - **Backend**:
     ```bash
     cd server
     node app.js
     ```

   - **Frontend**:
     ```bash
     cd ../client
     npm start
     ```

---

### **Evaluation Criteria**

1. **Code Quality**: Clean, well-documented, and modular code.
2. **Functionality**: Proper implementation of core features.
3. **User Experience**: Intuitive and responsive UI.
4. **Security Practices**: Basic validation and authentication checks.
5. **Documentation**: Comprehensive and clear documentation.

---

### **Future Improvements**
- **Enhanced Security**: Implement OAuth for social logins.
- **Comment System**: Allow users to comment on blog posts.

Below is an outline of what the collection includes:

1. **Authentication**
   - POST `/login`
   - POST `/signup`
   - POST `/user/forgot`
   - POST `/user/forgot/verify`
   - POST `/user/forgot/change`

2. **User Management**
   - GET `/all`
   - DELETE `/user/del`

3. **Blog Management**
   - POST `/create`
   - POST `/create/article`
   - POST `/data`
   - POST `/data/me`
   - PATCH `/verify`
   - PATCH `/edit`
   - PATCH `/publish`
   - DELETE `/del`

4. **Utility Endpoints**
   - POST `/sendOTP`
   - POST `/subscribe`

- [Postman Collection for Blog Portal API](https://s3.ap-south-1.amazonaws.com/awsccpv2.0/blog.postman_collection.json)