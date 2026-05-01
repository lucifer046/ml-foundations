# Machine Learning Foundations Handbook 🧠

> A high-fidelity, interactive pedagogical handbook covering the core mathematical and theoretical foundations of Machine Learning.

![Handbook Preview](book/logo.png)

## 📖 Overview

This handbook is designed as a sophisticated single-page application (SPA) to provide a seamless, textbook-quality learning experience. It bridges the gap between abstract mathematical theory and practical machine learning implementation, covering topics from Multivariable Calculus to Spectral Theory and Dimensionality Reduction.

## ✨ Key Features

- **Safe-Injection Rendering Pipeline**: A robust DOM-based processing engine that ensures complex LaTeX formulas and SVG visualizations render with zero corruption or backslash-stripping.
- **Interactive Technical Graphs**: Hand-crafted SVG visualizations for core concepts such as gradient descent, least squares regression, and derivatives.
- **High-Density Cyber-Minimalist UI**: An elegant, distraction-free interface optimized for reading technical content. Features a refined two-line sidebar navigation system for better topical hierarchy.
- **X-Ray Variable Tooltips**: Deep-dive into mathematical terms by hovering over variables to see their formal definitions.
- **Global Command Palette**: Instant, fuzzy-search navigation across the entire curriculum using `Ctrl + K`.
- **Keyboard-First Navigation**: Seamlessly toggle between topics using the `←` and `→` arrow keys.
- **Dual-Phase Scroll Logic**: Automated scroll-to-top resets ensure a consistent starting point for every new topic.

---

## 🛠️ Technology Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS
- **Mathematics**: [MathJax 3.0](https://www.mathjax.org/) (Configured for SVG output)
- **Content Engine**: [marked.js](https://marked.js.org/) with custom "Safe-Injection" extensions
- **Syntax Highlighting**: [Prism.js](https://prismjs.com/)
- **Visuals**: Hand-optimized SVG for lightweight, high-contrast technical diagrams
- **Icons**: [Lucide](https://lucide.dev/)

---

## 🚀 Getting Started

No build tools, compilers, or local servers are required. The handbook is a self-contained client-side application.

1. Clone this repository.
2. Open `index.html` in any modern web browser (Chrome, Firefox, or Safari recommended).

### Keyboard Shortcuts
- `←` / `→`: Next/Previous Topic
- `Ctrl + K`: Open Command Palette / Search
- `Esc`: Close Overlays / Reset Search

---

## 📂 Project Architecture

```text
├── index.html          # Main application shell and UI layout
├── book/               # Core application assets
│   ├── app.js          # SPA Logic & Safe-Injection Rendering Pipeline
│   ├── style.css       # Design System (Cyber-Minimalist Theme)
│   ├── book_data.js    # Compiled technical curriculum (Knowledge Base)
│   └── logo.png        # Handbook visual identity
├── WEEK 1 - 12/        # Source curriculum data and documentation
└── README.md           # Documentation
```

---

## ✍️ Author

**Divya Prakash** - *Primary Developer & Content Architect*

---

## 📄 License

This project is created for educational purposes. All rights reserved.
