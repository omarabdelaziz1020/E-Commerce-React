# E-Commerce App

A simple e-commerce application built with **React**, **Redux Toolkit**, and **SCSS**. This app fetches product data from the DummyJSON API and allows users to view and manage a shopping cart.

---

## Features

- **Product Listing**: Displays products with image, name, price, and description.
- **Shopping Cart**: Add and remove products, view total price, and persist cart state.
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile.

---

## Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/omarabdelaziz1020/E-Commerce-React.git
cd your-repository-name
```

### 2. Install Dependencies

Ensure you have Node.js (LTS) installed, then run:

```bash
npm install
```

### 3. Start the Development Server

Run the following command to start the app:

```bash
npm start
```

The app will be available at http://localhost:3000.

### 4. Build for Production (Optional)

To create an optimized production build:

```bash
npm run build
```

Serve the production build:

```bash
npm install -g serve
serve -s build
```

## Assumptions and Notes

1. **Data Fetching**:

   - The app fetches product data from the DummyJSON API (`https://dummyjson.com/products`) using server-side rendering (SSR).

2. **State Management**:

   - The shopping cart state is managed using **Redux Toolkit** for simplicity and scalability.

3. **Styling**:
   - SCSS is used for styling.

```bash
src/
├── components/         # Reusable UI components (Header, ProductCard, etc.)
├── pages/              # Application pages (Home, Cart)
├── redux/              # Redux state management files (store, cartSlice)
```

## Author

- **Omar Abdulaziz**
- [GitHub Profile](https://github.com/omarabdelaziz1020)
