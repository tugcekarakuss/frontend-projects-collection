# Cookie Monster 👀🍪

🌍 **Türkçe README:** [README.tr.md](./README.tr.md)

Cookie Monster is an interactive frontend project where the character’s eyes follow the user’s mouse movement in real time within a simple card-based layout.

This project was built to better understand mouse events, screen coordinates, and the relationship between DOM elements using JavaScript, while creating small but engaging UI interactions.

🔗 **Live Demo:** https://cookieemonster.netlify.app/

---

## 👀 Project Preview

![Cookie Monster Preview](./img/project-preview.gif)

---

## 🎯 Project Goal

The main goals of this project are:

- Capturing user interaction through mouse movement
- Relating mouse coordinates to DOM element positions
- Creating visual feedback using both CSS and JavaScript
- Understanding the fundamentals of interactive UI behavior through a simple idea

---

## ⚙️ How It Works

- The `mousemove` event is listened to on the page
- The mouse X and Y coordinates are captured
- The center point of each eye element is calculated
- The angle between the mouse position and the eye center is computed
- This angle is applied to the eyes using CSS `transform`

As a result, the eyes smoothly follow the mouse movement.

---

## 🚀 Features

- Clean and minimal card-based layout
- Eyes that track the mouse position in real time
- JavaScript-driven interaction
- Lightweight and dependency-free
- Responsive design

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 📚 What I Learned

- Using the `mousemove` event
- Working with mouse coordinates
- Calculating element positions with `getBoundingClientRect()`
- Applying dynamic motion with CSS `transform`
- Building visual interactions with JavaScript

---

## 📦 Installation

To run the project locally:

```bash
git clone https://github.com/username/cookie-monster.git
cd cookie-monster
