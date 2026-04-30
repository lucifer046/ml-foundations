# Machine Learning Foundations Handbook 🧠

> A high-fidelity, interactive pedagogical handbook covering the core mathematical and theoretical foundations of Machine Learning.

![Handbook Logo](book/logo.png)

## 📖 Overview

This handbook is designed as a single-page application (SPA) to provide a seamless learning experience for students and practitioners exploring the mathematical underpinnings of ML. It covers everything from Linear Algebra and Calculus to Spectral Theory and Optimization.

### Key Features
- **Cyber-Minimalist UI**: A clean, distraction-free interface focused on readability.
- **X-Ray Variable Tooltips**: Hover over key mathematical terms to see their definitions instantly.
- **Interactive TOC**: Smoothly navigate through complex topics with an animated table of contents.
- **Command Palette**: Quickly search for any topic or category using `Ctrl + K`.
- **LaTeX Support**: High-quality mathematical rendering via MathJax.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS3
- **Mathematics**: [MathJax](https://www.mathjax.org/)
- **Markdown Rendering**: [marked.js](https://marked.js.org/)
- **Syntax Highlighting**: [Prism.js](https://prismjs.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Animations**: Custom CSS transitions & Bezier curves

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser to begin. No build step or local server is strictly required as the application runs entirely on the client-side.

### Keyboard Shortcuts
- `←` / `→`: Navigate between topics
- `Ctrl + K`: Open Command Palette / Search
- `Esc`: Close overlays / Modals

---

## 📂 Project Structure

- `index.html`: The main entry point and UI shell.
- `book/`: Core application assets.
  - `app.js`: Application logic and dynamic content injection.
  - `style.css`: The "Cyber-Minimalist" design system.
  - `book_data.js`: The compiled knowledge base of the handbook.
  - `logo.png`: The handbook's visual identity.
- `01_Foundations_...` to `08_Revisions/`: Source Markdown files organized by topic.

---

## ✍️ Author

**Divya Prakash** - *Primary Developer & Content Architect*

---

## 📄 License

This project is for educational purposes. All rights reserved.
