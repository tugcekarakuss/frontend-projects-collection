# React Shopping List App

Smart Shopping List is a **frontend-focused React project** built to practice component-based architecture, state management, and user interaction handling.

The primary goal of this project was to create a **clean, interactive, and maintainable shopping list application** while improving React fundamentals and data flow management.

![Project Preview](../project-preview-images/shopping-list-preview.png)

---

## Project Links

* **Live Demo:** https://shopping-list-component.netlify.app/
* **Türkçe README:** [README_TR.md](./README_TR.md)

---

## Project Purpose

This project focuses on the implementation of a **shopping list management interface**.

Users can add products, mark them as completed, remove individual items, and clear the entire list when needed.

The challenge was centered on **state management, component communication, and dynamic UI updates using React hooks**.

---

## What I Practiced & Learned

* **React Component Architecture**
  Breaking the application into reusable and maintainable components.

* **State Management with Hooks**
  Managing shopping items using `useState` and updating the UI reactively.

* **Props & Data Flow**
  Passing data and callback functions between parent and child components.

* **Array State Manipulation**
  Adding, deleting, updating, and filtering items using immutable state updates.

* **Conditional Rendering**
  Dynamically displaying summaries and list information based on application state.

---

## Tech Stack

| Technology        | Description                            |
| ----------------- | -------------------------------------- |
| React             | Component-based UI development         |
| JavaScript (ES6+) | Application logic                      |
| CSS3              | Styling and responsive layout          |
| Vite              | Development environment and build tool |

---

## Features

* Add new shopping items
* Mark items as completed
* Delete individual items
* Clear the entire shopping list
* Real-time shopping summary updates
* Responsive and simple user interface

---

## Project Structure

```text
src
├── components
│   ├── Header.jsx
│   ├── Form.jsx
│   ├── List.jsx
│   └── Summary.jsx
├── data.js
├── App.jsx
└── main.jsx
```

---

## Local Setup

```bash
git clone https://github.com/yourusername/shopping-list-app.git
cd shopping-list-app
npm install
npm run dev
```

---

## Credits

* Tutorial and project guidance: **Sadık Turan**
* Frontend implementation completed as part of the tutorial by **Tuğçe Karakuş**
