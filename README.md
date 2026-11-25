# TechNova Store 🛍️

### A Modern Electronics E-Commerce Experience

TechNova Store is a modern and responsive electronics e-commerce web application built with **React.js** and **Tailwind CSS**. It provides an intuitive shopping experience where users can explore products, search and filter items, view product details, manage their shopping cart, and proceed through a checkout flow.

The project focuses on reusable React components, client-side routing, state management, and responsive UI development.

---

## 🚀 Live Demo

**Live Preview:** [TechNova Store](https://d32s2562-5173.inc1.devtunnels.ms/)

> Note: This is a temporary developer tunnel URL and may not always be available.

## ✨ Features

- **Product Listing:** Browse available electronics products.
- **Product Details:** View individual product information.
- **Search Functionality:** Find products using the search feature.
- **Category Filtering:** Filter products by category.
- **Shopping Cart:** Add, view, and manage cart items.
- **Cart Management:** Update and remove products from the cart.
- **Price Formatting:** Display formatted product prices.
- **Checkout Page:** Proceed through the checkout interface.
- **Order Confirmation:** View the order confirmation page.
- **Client-Side Routing:** Navigate between pages without full page reloads.
- **Reusable Components:** Organized and reusable React components.
- **Responsive Interface:** Modern UI built with Tailwind CSS.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js 19 | Frontend library |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS 4 | Styling and responsive UI |
| Vite 8 | Development server and build tool |
| React Router DOM 7 | Client-side routing |
| Lucide React | Icons |
| Context API | Global cart state management |
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
│   ├── Utils/
│   │   └── formatPrice.js
│   │
│   ├── components/
│   │   ├── CartItem.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── Footer.jsx
│   │   ├── Loding.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── SearchFilter.jsx
│   │
│   ├── data/
│   │   └── product.js
│   │
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderConfirmation.jsx
│   │   ├── ProductDetail.jsx
│   │   └── ProductList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

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

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

## 🧭 Application Routes

| Route | Description |
|---|---|
| `/` | Product listing page |
| `/product/:id` | Product details |
| `/cart` | Shopping cart |
| `/checkout` | Checkout page |
| `/order-confirmation` | Order confirmation |

## 🎯 Learning Objectives

This project helped me practice and improve my understanding of:

- Building reusable UI components with React.
- Managing shared application state using Context API.
- Implementing navigation with React Router.
- Working with JavaScript ES6+ features.
- Creating search and category filtering functionality.
- Structuring a scalable frontend project.
- Designing modern interfaces using Tailwind CSS.
- Building multi-page e-commerce user experiences.

## 🔮 Future Improvements

- User authentication and authorization.
- Backend integration with Node.js and Express.js.
- MongoDB database integration.
- Real payment gateway integration.
- Product management dashboard.
- Order history and user profiles.
- Product reviews and ratings.

## 👨‍💻 Developer

**Rupam Ghosh**

Aspiring MERN Stack Developer | Frontend Developer | Data Analytics Enthusiast

- GitHub: [@codebyrupam](https://github.com/codebyrupam)
- LinkedIn: [Rupam Ghosh](https://linkedin.com/in/rupam-ghosh-7293a5279)

---

⭐ If you find this project interesting, consider giving it a star!

**Built with ❤️ using React.js**
