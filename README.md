# InvestNet Admin Panel

## Project Overview
The InvestNet Admin Panel is a powerful and modern web application designed to manage the core functionalities of the InvestNet platform. It provides administrators with a centralized interface to oversee user activity, business verifications, content moderation, analytics, and system settings. Built with React.js for the frontend and Node.js/Express for the backend, it offers a robust and scalable solution for administrative tasks.

![1](https://github.com/user-attachments/assets/8b42ab3f-495a-4435-b612-8c3ad382420a)
![2](https://github.com/user-attachments/assets/b0a7ad8a-a89d-4d01-bf29-5fd16831b676)
![3](https://github.com/user-attachments/assets/4d25ba8d-68fb-452a-9183-71a47b1ad7c8)
![4](https://github.com/user-attachments/assets/ad5c202c-92a9-4c3d-8875-c3db6e8878d9)
![5](https://github.com/user-attachments/assets/fa675d3e-b3a2-4218-8e42-9d9dd19c10f8)

## Features
### Admin Dashboard
*   **Overview**: A centralized hub providing quick insights into key metrics, user growth, and system status.
*   **Modern UI**: Enhanced with Material-UI components for a sleek and professional aesthetic.

### User Management
*   **User Listing**: View all registered users with their roles, statuses, and contact information.
*   **Search & Filter**: Efficiently find users by name or email.
*   **Pagination**: Navigate through large user datasets with ease.
*   **Status Tracking**: Visually distinguish user statuses (Active, Pending, Inactive) with color-coded chips.
*   **Actions**: Edit and delete user profiles.
*   **Avatars**: Display user avatars for better visual identification.

### Business Verification
*   **Request Management**: Oversee and process business verification requests.
*   **Search & Filter**: Quickly locate requests by business name or submitter.
*   **Pagination**: Efficiently manage a large volume of verification requests.
*   **Status Indicators**: Clearly see the status of each request (Approved, Waiting, Rejected) with corresponding icons and colors.
*   **Actions**: View details, approve, or reject business verification requests.
*   **Avatars**: Display business avatars for better visual identification.

### Flagged Content Management
*   **Content Review**: Identify and manage content flagged for review due to policy violations.
*   **Search & Filter**: Search and filter flagged content by title, reporter, or reason.
*   **Pagination**: Navigate through flagged content efficiently.
*   **Status Tracking**: Monitor the status of flagged items (Pending, Reviewed, Resolved) with clear visual cues.
*   **Actions**: Review and resolve flagged content issues.

### Analytics
*   **Key Metrics**: Display important platform metrics such as total users, active businesses, pending verifications, and flagged content.
*   **User Growth Chart**: Visualize user growth and new signups over time with an interactive line chart.
*   **Data Table**: A comprehensive table of key metrics for detailed analysis.

### Settings
*   **Profile Management**: Update administrative profile information (name, email).
*   **Security Settings**: Manage two-factor authentication and change passwords.
*   **Notification Preferences**: Configure push notifications and marketing email subscriptions.

### Help Center
*   **FAQs**: Browse frequently asked questions with collapsible answer sections.
*   **Quick Actions**: Direct links to chat support, documentation, and phone support.
*   **Contact Information**: Easy access to support contacts.

### Investor & Business Posts
*   **Post Display**: View a curated list of posts from investors and businesses.
*   **Interactive Elements**: Like, comment on, and share posts.
*   **Professional Design**: Each post is presented in a clean, card-like format with author details and relevant statistics.

### Notifications Page
*   **Categorized Notifications**: View different types of notifications (new user, flagged content, business verification, resolved issues).
*   **Visual Cues**: Notifications are color-coded and include relevant icons based on their type.
*   **Actionable Notifications**: Click on a notification to navigate to the relevant section of the admin panel.

## Technologies and Skills

### Frontend (AdminUIAli)
*   **React.js**: A JavaScript library for building user interfaces.
*   **Material-UI (MUI)**: A comprehensive React UI framework implementing Google's Material Design. Used extensively for all UI components, styling, and responsiveness.
*   **React Router DOM**: For declarative routing in React applications.
*   **Lucide React**: For a modern and consistent icon set.
*   **Material Icons**: Used for additional specific icons.
*   **Chart.js & React Chart.js 2**: For creating interactive data visualizations in the Analytics section.
*   **Axios**: For making HTTP requests to the backend API.
*   **ESLint**: For maintaining code quality and consistency.

### Backend (AdminBackendAli)
*   **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
*   **MongoDB**: A NoSQL document database for storing application data.
*   **Mongoose**: An elegant MongoDB object modeling for Node.js.
*   **Bcrypt.js**: For hashing passwords securely.
*   **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
*   **Dotenv**: For loading environment variables from a `.env` file.

## Setup and Installation

### Prerequisites
*   Node.js (LTS version recommended)
*   npm (comes with Node.js)
*   MongoDB Atlas account (or a local MongoDB instance)

### Backend Setup (`AdminBackendAli`)

1.  **Navigate to the backend directory**:
    ```bash
    cd AdminBackendAli
    ```
2.  **Initialize npm (if `package.json` is missing)**:
    ```bash
    npm init -y
    ```
3.  **Install dependencies**:
    ```bash
    npm install express mongoose bcryptjs cors dotenv
    ```
4.  **Create a `.env` file**: In the `AdminBackendAli` directory, create a file named `.env` and add your MongoDB Atlas connection URL:
    ```
    MONGO_URI=your_mongodb_atlas_connection_string
    ```
    (Replace `your_mongodb_atlas_connection_string` with your actual MongoDB Atlas connection string.)
5.  **Start the backend server**:
    ```bash
    node index.js
    ```
    The server should start on `http://localhost:5000` (or your configured port).

### Frontend Setup (`AdminUIAli`)

1.  **Navigate to the frontend directory**:
    ```bash
    cd AdminUIAli
    ```
2.  **Install dependencies**:
    ```bash
    npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom lucide-react chart.js react-chartjs-2 @react-oauth/google axios
    ```
3.  **Start the frontend development server**:
    ```bash
    npm start
    ```
    The application should open in your browser at `http://localhost:3000` (or another available port).

    **Note**: If you encounter issues with `useNavigate()` or similar routing errors, ensure your browser cache is cleared and the development server is restarted after installing all dependencies and making changes.

## Usage
Once both the backend and frontend servers are running:
*   The Admin Panel frontend should automatically redirect to the dashboard due to the login bypass implemented for demonstration purposes.
*   You can navigate through the different sections using the sidebar to explore User Management, Business Verification, Flagged Content, Analytics, Settings, Help Center, Investor & Business Posts, and Notifications.

## Contribution
If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
