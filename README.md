
# AJIO

**Description:**  
This project is an e-commerce frontend interface inspired by AJIO. It enables users to browse products, manage carts, and securely authenticate using Firebase. Users can browse products without the need for login/signup, but will be redirected to the authentication page when attempting to add items to the cart or visit the wishlist page. The project features efficient state management using Redux Toolkit and a fully responsive UI built with Tailwind CSS.

**Netlify Deployment:**  
[Live Demo](https://ajio-project.netlify.app/)

## Tech Stack

- **React.js** - Interactive, component-based UI
- **Redux Toolkit** - Efficient global state management
- **Firebase** - Authentication (Login, Signup, Session Persistence, Forget password)
- **Tailwind CSS** - Responsive and utility-first styling
- **React Router** - Seamless page navigation
- **React Icons** - For consistent and modern icon usage
- **React Slick & Slick Carousel** - Carousel for product showcasing
- **Git** - Version control and collaboration

## Key Features

- **AJIO-Inspired Frontend**: A sleek and modern UI with design elements inspired by AJIO.
- **User Authentication**: Secure login and signup using Firebase, with session persistence.
- **Cart Management**: Add, remove, and view items in the cart with smooth interaction and local persistence.
- **Product Browsing Without Login**: Browse products freely without an account.
- **Authentication Redirect**: Users are redirected to login/signup when attempting cart actions without authentication.
- **State Management**: Redux Toolkit ensures smooth state handling across the app.
- **Responsive Design**: Tailwind CSS ensures the app adapts to all device sizes.
- **Search Functionality**: Quickly find products with the integrated search bar.
  
## Setup and Access Instructions

### Prerequisites

- **Node.js** installed on your machine
- **npm** for managing dependencies
- **Firebase** account for authentication
- API from [Fake Store API](https://fakestoreapi.com/)

### Steps to Access the App:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yanil8068/ajio.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd ajio
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Configure environment variables**:  
   Create a `.env` file in the root directory and add the following:
    ```bash
    VITE_FIREBASE_API_KEY=your-firebase-api-key
    VITE_FIREBASE_AUTHDOMAIN=your-firebase-auth-domain
    VITE_FIREBASE_PROJECTID=your-firebase-project-id
    VITE_FIREBASE_STORAGEBUCKET=your-firebase-storagebucket
    VITE_FIREBASE_MESSAGING_SENDERID=your-firebase-messaging-senderid
    VITE_FIREBASE_APPID=your-firebase-appid
    VITE_API_BASE_URI=https://fakestoreapi.com
    ```

5. **Run the application**:
    ```bash
    npm run dev
    ```  
    Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

6. **Deployment**:
   You can deploy the app on platforms like [Netlify](https://www.netlify.com/).

## Development Process

### Planning & Design

- The project started with designing a modern UI inspired by AJIO, using React for a component-based architecture.
- Tailwind CSS was chosen for responsive, customizable components.
- Redux Toolkit was used to manage global states, like cart data and user authentication.
  
### Authentication Setup

- Integrated Firebase for secure user authentication.
- Implemented login and signup, with an automatic redirect to the login page when users attempt cart actions without being logged in.

### Cart & Product Management

- Users can browse products and manage the cart with add/remove functionality.
- Redux Toolkit ensures that the cart state is persistent across pages and sessions.

### Search Functionality

- A search component allows users to filter products in real-time as they type.

## Challenges Faced & Solutions

- **User Authentication Persistence Across Tabs**:  
  *Problem*: Users were logged out when switching between tabs.  
  *Solution*: Firebase session persistence was leveraged alongside the `onAuthStateChanged` function, which observes and maintains the authentication state across pages.

- **Maintaining a Responsive UI**:  
  *Problem*: Ensuring the UI remained consistent across various screen sizes.  
  *Solution*: Tailwind CSS was used to provide a utility-first, responsive design that adapts well to different devices.

- **Authentication Redirects**:  
  *Problem*: Users faced infinite redirects when adding items to the cart without authentication.  
  *Solution*: The issue was resolved by ensuring that the user state was only updated during login/signup and correctly managing session data with Redux.

## Key Learnings

This project provided valuable insights into full-stack development, particularly in:

- Managing complex state with Redux Toolkit
- Integrating Firebase for secure authentication
- Handling authentication persistence and UI responsiveness
- Collaborating efficiently within a team using GitHub for version control

## Authors

-  [@Anil Yadav](https://github.com/yanil8068)
- [@Yogesh Ginti](https://github.com/Yogesh-Ginti)
- [@Ajay Yadav](https://github.com/Ajaybipul)

