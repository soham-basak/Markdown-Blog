# Blog Web App with EJS, MongoDB, Node, and Express

The Blog Web App is a simple and elegant blogging platform that allows users to create, read, update, and delete blog posts. This application is built using the EJS templating engine, MongoDB for database management, Node.js for the server-side logic, and Express as the web application framework.


## Features

- User-friendly interface for seamless blog browsing and post management.
- Create new blog posts with a title, content.
- Edit existing blog posts to update the content or make improvements.
- Delete blog posts that are no longer required.
- View blog posts individually with their details.
- Responsive design for optimal user experience on various devices.

## Prerequisites

Before running the Blog Web App, ensure you have the following installed:

- Node.js (at least version)
- MongoDB (at least version 5.7.0)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/VIRUS-XDD/Markdown-Blog.git
cd Markdown-Blog
npm install
npm start
```

- Open your web browser and visit http://localhost:3000 to access the Blog Web App.

## Project Structure

1. The project's file structure is organized as follows:

```bash
blog-web-app/
  ├── server.js              # Entry point of the application
  ├── models/             # Defines the database schema and models
  ├── routes/             # Express routes for different features
  ├── views/              # EJS templates for rendering pages
  ├── .gitignore          # Git ignore file
  ├── package.json        # Node.js dependencies and scripts
  └── README.md           # Project documentation (this file)


