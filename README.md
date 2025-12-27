# Paradise Nursery

**Paradise Nursery** is an online plant shop built as a React-based web application for academic purposes. The application allows users to browse houseplants, view details, add them to a shopping cart, and manage cart items dynamically. This project demonstrates skills in React, Redux Toolkit, React Router, and modern web design principles.

## Features

- **Landing Page:**  
  - Beautiful background with company name  
  - “Get Started” button to navigate to plant listings

- **Product Listing Page:**  
  - Displays plants grouped into multiple categories  
  - Each plant shows an image, name, price, and "Add to Cart" button  
  - Cart icon dynamically updates with total items  
  - Buttons disable after adding a plant to cart

- **Shopping Cart Page:**  
  - Shows all added plants with quantity controls  
  - Displays total cost per item and overall cart total  
  - Remove items or adjust quantities  
  - Checkout button displays “Coming Soon”  
  - Continue shopping button links back to the product listing

- **Navbar:**  
  - Present on all pages  
  - Links to Home, Plants, and Cart  
  - Shows dynamic cart item count

## Tech Stack

- React (Vite)  
- JavaScript (JSX)  
- React Router DOM  
- Redux Toolkit + React Redux  
- Plain CSS for styling

## Folder Structure
src/
│
├── main.jsx
├── App.jsx
├── App.css
│
├── components/
│ ├── Navbar.jsx
│ ├── AboutUs.jsx
│ ├── ProductList.jsx
│ └── CartItem.jsx
│
└── redux/
├── store.js
└── CartSlice.jsx

## How to Run Locally
Clone the repository:
git clone https://github.com/yourusername/paradise-nursery.git

Navigate to the project folder:
cd paradise-nursery


Install dependencies:
npm install


Run the development server:
npm run dev

Open your browser at http://localhost:5173