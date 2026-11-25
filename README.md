# 🛍️ TechNova — Electronics E-Commerce Store

<p align="center">
  A modern, responsive electronics shopping experience built with React.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

<p align="center">
  <b>Explore technology. Shop smarter. Experience TechNova.</b>
</p>

---

## 📌 Overview

**TechNova** is a modern electronics e-commerce web application designed to provide a smooth and user-friendly online shopping experience.

Built with React.js, React Router, and Tailwind CSS, the application features a clean dark-themed interface, dynamic product browsing, category filtering, shopping cart management, and a validated checkout process.

The project focuses on component-based architecture, reusable UI components, React Context API, and client-side state management.

## ✨ Key Features

- **Modern UI:** Clean, responsive, dark-themed shopping interface.
- **Product Listing:** Browse a collection of electronics products.
- **Product Search:** Find products by name or description.
- **Category Filtering:** Filter products by category.
- **Product Details:** View individual product information.
- **Shopping Cart:** Add, remove, and manage cart items.
- **Quantity Management:** Increase or decrease product quantities.
- **Cart Persistence:** Cart data is saved using LocalStorage.
- **Checkout System:** Customer information form with input validation.
- **Payment Method Selection:** Cash on Delivery, UPI, and Card options in the checkout interface.
- **Order Confirmation:** Display order details after successful form submission.
- **Responsive Layout:** Designed for different screen sizes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js 19 | Frontend library |
| Vite 8 | Development server and build tool |
| Tailwind CSS 4 | Styling and responsive UI |
| React Router 7 | Client-side navigation |
| Context API | Global cart state management |
| LocalStorage | Persistent shopping cart data |
| Lucide React | Icons |
| JavaScript ES6+ | Application logic |
| HTML5 | Application structure |
| CSS3 | Custom styling |

## 📂 Project Structure

```text
TechNova/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │
│   ├── Context/
│   │   └── CartContext.jsx
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartItem.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── SearchFilter.jsx
│   │   └── Loding.jsx
│   │
│   ├── data/
│   │   └── product.js
│   │
│   ├── pages/
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderConfirmation.jsx
│   │
│   ├── Utils/
│   │   └── formatPrice.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

Follow these steps to run TechNova locally.

### 1. Clone the Repository

```bash
git clone https://github.com/codebyrupam/TechNova-Store.git
```

### 2. Navigate to the Project Directory

```bash
cd TechNova-Store
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

```text
http://localhost:5173
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build application for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

## 🛒 Application Routes

| Route | Description |
|---|---|
| `/` | Home / Product Listing |
| `/product/:id` | Product Details |
| `/cart` | Shopping Cart |
| `/checkout` | Checkout Page |
| `/order-confirmation` | Order Confirmation |

## 🧠 Key Concepts Implemented

This project demonstrates practical frontend development concepts:

- Component-based architecture
- React Hooks (`useState`, `useEffect`, `useMemo`)
- React Context API
- React Router navigation
- Reusable components
- Conditional rendering
- Dynamic product filtering
- Array methods (`map`, `filter`, `reduce`, `find`)
- LocalStorage integration
- Form handling and validation
- Responsive web design

## ⚠️ Project Scope

TechNova is currently a frontend demonstration project.

- Product information is maintained in a local JavaScript data file.
- Cart information is persisted in browser LocalStorage.
- Checkout and order confirmation are simulated on the client side.
- UPI and Card are interface options only; no real payment gateway is connected.
- No backend API or database integration is currently included.

## 🔮 Future Improvements

- Backend integration with Node.js and Express.js.
- MongoDB database integration.
- User registration and authentication.
- Admin dashboard for product management.
- Real payment gateway integration.
- Order history and tracking.
- Wishlist functionality.
- Product reviews and ratings.

## 👨‍💻 Developer

**Rupam Ghosh**

Aspiring MERN Stack Developer | Frontend Developer

- GitHub: [@codebyrupam](https://github.com/codebyrupam)
- Project Repository: [TechNova-Store](https://github.com/codebyrupam/TechNova-Store)

---

<p align="center">
  <b>Built with ❤️ using React.js</b>
  <br/>
  <i>TechNova — Making Online Shopping Smarter.</i>
</p>
