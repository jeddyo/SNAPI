# Social Network API

## 📌 Description
Welcome to the **Social Network API**, a backend application designed for a dynamic social media platform where users can connect, share their thoughts, react to their friends' posts, and manage their friend list. Built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose ODM**, this API efficiently handles unstructured social data at scale.

## 🚀 Features
- **User Management**: Create, update, delete, and retrieve users.
- **Thoughts (Posts)**: Users can share their thoughts and view posts.
- **Reactions**: Add or remove reactions to thoughts (like comments or emoji reactions).
- **Friend List**: Users can add and remove friends.
- **NoSQL Database**: Uses MongoDB for flexible and scalable data storage.

## 📂 Technologies Used
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **Insomnia** – API testing
- **JavaScript Date Object** – For timestamp formatting

## 📌 Installation Instructions
### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-username/social-network-api.git
 cd social-network-api
```

### 2️⃣ Install Dependencies
```sh
 npm install
```

### 3️⃣ Start the Server
```sh
 npm start
```

The server will start on **http://localhost:3001** (default port) unless configured otherwise.

## 🔥 API Routes & Usage
Test these routes using **Insomnia** or **Postman**.

### 📌 Users
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a single user by ID |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update a user by ID |
| DELETE | `/api/users/:id` | Delete a user |

### 📌 Thoughts
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/thoughts` | Get all thoughts |
| GET | `/api/thoughts/:id` | Get a single thought by ID |
| POST | `/api/thoughts` | Create a new thought |
| PUT | `/api/thoughts/:id` | Update a thought by ID |
| DELETE | `/api/thoughts/:id` | Delete a thought |

### 📌 Reactions
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/thoughts/:thoughtId/reactions` | Add a reaction to a thought |
| DELETE | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove a reaction from a thought |

### 📌 Friends
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/users/:userId/friends/:friendId` | Add a friend |
| DELETE | `/api/users/:userId/friends/:friendId` | Remove a friend |

## 📽️ Video Walkthrough
A walkthrough video demonstrating the API's functionality can be found **[https://drive.google.com/file/d/1aQecHpCZs5emRzJsnekb-GollCTXFXJ_/view](#)** (Replace with actual link once recorded). !!My Mic someone didnt record!! Tried re recording but my mic might be broken...

## 📜 License
This project is licensed under the **MIT License**.



