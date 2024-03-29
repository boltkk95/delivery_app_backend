# delivery_app_backend

# Project Setup and Database Configuration

This guide provides step-by-step instructions for setting up the project and configuring the database locally.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- PostgreSQL

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

   Replace `https://github.com/your-username/your-project.git` with the URL of your project repository.

2. **Navigate to the Project Directory**

   ```bash
   cd your-project
   ```

   Replace `your-project` with the name of your project directory.

3. **Install Dependencies**

   ```bash
   npm install
   ```

## Database Setup

### PostgreSQL Database Configuration

1. **Start PostgreSQL Service**

   ```bash
   sudo service postgresql start
   ```

2. **Access PostgreSQL Shell**

   ```bash
   psql -U postgres
   ```

3. **Create Database**

   ```sql
   CREATE DATABASE your_db_name;
   ```

   Replace `your_db_name` with the desired name for your database.

4. **Create User and Grant Privileges**

   ```sql
   CREATE USER your_db_user WITH ENCRYPTED PASSWORD 'your_db_password';
   ```

   Replace `your_db_user` and `your_db_password` with your desired database username and password.

   ```sql
   GRANT ALL PRIVILEGES ON DATABASE your_db_name TO your_db_user;
   ```

5. **Exit PostgreSQL Shell**

   ```sql
   \q
   ```

### Configure `.env` File

1. **Create `.env` File**

   ```bash
   touch .env
   ```

2. **Add Database and Application Configuration**

   Open the `.env` file and add the following configuration:

   ```env
   # PostgreSQL Database Configuration
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name

   # Express Application Configuration
   PORT=3000
   ```

   Replace `your_db_user`, `your_db_password`, and `your_db_name` with the database username, password, and name you configured earlier.

## Running the Application

1. **Start the Application**

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.
