# 🚀 Frontend Projects for Logic Building & Real-World Applications

This repository contains multiple **frontend projects** built using **HTML, CSS, and JavaScript** to strengthen core logic, problem-solving skills, and real-world application development.

---

## 📌 Project 1: Todo App

A simple and interactive **Todo List Application** that allows users to manage their daily tasks efficiently.

### ✨ Features

- ➕ Add new tasks  
- ❌ Delete tasks  
- ✅ Mark tasks as completed  
- 🚫 Prevent adding empty tasks  
- 🎯 Clean and responsive UI  

### 🛠️ Tech Stack

- HTML  
- CSS (Flexbox)  
- JavaScript (DOM Manipulation)  

### 🧠 Concepts Used

- DOM Selection (`getElementById`)  
- Event Handling (`addEventListener`)  
- Dynamic Element Creation (`createElement`)  
- Class Manipulation (`classList`)  
- Input Validation (`trim()`)  

### 📂 Folder Structure

```bash
/todo-app
   ├── index.html
   ├── style.css
   └── script.js
```

---

## 📌 Project 2: Quiz App

An interactive **Quiz Application** that dynamically loads questions and evaluates user performance in real-time.

### ✨ Features

- ▶️ Start Quiz functionality  
- ❓ Dynamic question rendering from JSON  
- 🔘 Multiple choice options  
- 🎯 Option selection with highlight  
- ✅ Answer validation (Correct/Wrong feedback)  
- ⏭️ Next Question navigation  
- 🛑 End Quiz option  
- 📊 Live score tracking  
- 🧾 Final result screen display  

### 🛠️ Tech Stack

- HTML  
- CSS (Flexbox + Grid)  
- JavaScript (DOM Manipulation + Fetch API)  

### 🧠 Concepts Used

- Fetch API (`fetch()`)  
- JSON Data Handling  
- Dynamic DOM Rendering  
- Event Handling  
- State Management  
- Conditional Logic  

### 📂 Folder Structure

```bash
/quiz-app
   ├── index.html
   ├── style.css
   ├── script.js
   └── questions.json
```

---

## 📌 Project 3: Typing Speed Test App

An interactive **Typing Speed Test Application** that measures typing speed and accuracy using real-time input and timer logic.

### ✨ Features

- ▶️ Start Test button  
- 📄 Paragraph display for typing  
- ⌨️ User input area (textarea)  
- ⏱️ 60-second countdown timer  
- 🚀 Timer starts automatically on first keystroke  
- 🛑 Typing disabled when time ends  
- 📊 Words Per Minute (WPM) calculation  
- 🎯 Accuracy calculation  
- ⚠️ Handles empty input case  

> ❗ Note: Advanced features like live error highlighting and random paragraph generation will be added in future updates.

---

### 🛠️ Tech Stack

- HTML  
- CSS (Flexbox + Gradient UI)  
- JavaScript (DOM Manipulation + Timer Logic)  

---

### 🧠 Concepts Used

- DOM Selection & Manipulation  
- Event Handling (`click`, `input`)  
- Timer Functions (`setInterval`, `clearInterval`)  
- State Management (`timeLeft`, `isTyping`)  
- String Comparison Logic  
- Performance Calculation (WPM & Accuracy)  
- Dynamic UI Updates  

---

### 📂 Folder Structure

```bash
/typing-speed-test
   ├── index.html
   ├── style.css
   └── script.js
```

---

## 📌 Project 4: Weather App 🌦️

A real-time **Weather Application** that fetches live weather data from an external API and displays it dynamically.

### ✨ Features

- 🔍 Search weather by city name  
- 🌡️ Displays temperature (°C)  
- 🌥️ Weather description  
- 🤒 Feels like temperature  
- ⬇️⬆️ Min & Max temperature  
- 💧 Humidity  
- 🔵 Pressure  
- ⚠️ Error handling (invalid city)  
- 🎯 Dynamic UI update without reload  

---

### 🛠️ Tech Stack

- HTML  
- CSS (Modern UI + Gradient Design)  
- JavaScript (Fetch API + DOM Manipulation)  

---

### 🧠 Concepts Used

- Fetch API (`fetch()`)  
- API Integration  
- JSON Handling  
- Event Handling (`click`)  
- Conditional Rendering  
- Error Handling  
- Dynamic DOM Updates  

---

### 📂 Folder Structure

```bash
/weather-app
   ├── index.html
   ├── style.css
   └── app.js
```

---

## 📌 Project 5: Calculator App 🧮

A modern and responsive **Calculator Application** built using HTML, CSS, and JavaScript that performs real-time mathematical operations with interactive UI and dynamic input handling.

### ✨ Features

- ➕ Addition
- ➖ Subtraction
- ✖️ Multiplication
- ➗ Division
- 🧹 Clear Display Functionality
- ⚠️ Error Handling
- 🎨 Modern Responsive UI
- 🖱️ Button Click Interaction
- 📱 Mobile Friendly Design

### 🛠️ Tech Stack

- HTML
- CSS
- JavaScript

### 🧠 Concepts Used

- DOM Manipulation
- Event Listeners
- Array Methods (`Array.from`)
- Expression Evaluation (`eval()`)
- Conditional Logic
- Dynamic UI Updates
- Responsive Grid Layout

### 📂 Folder Structure

```bash
/calculator-app
   ├── index.html
   ├── style.css
   └── script.js
```

---

# 📌 Project 6: Password Generator 🔐

A modern and secure **Password Generator Application** built using HTML, CSS, and JavaScript that generates strong random passwords based on user-selected criteria with a beautiful glassmorphism UI.

## ✨ Features

- 🔢 Custom Password Length
- 🔠 Include Uppercase Letters
- 🔡 Include Lowercase Letters
- 🔢 Include Numbers
- ✨ Include Special Characters
- 📋 Copy Password to Clipboard
- ⚡ Instant Password Generation
- 🎨 Modern Glassmorphism UI
- 📱 Fully Responsive Design
- 🖱️ Interactive Hover Effects

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript

## 🧠 Concepts Used

- DOM Manipulation
- Event Handling (`addEventListener`)
- Random Password Generation Logic
- String Manipulation
- Conditional Logic
- Clipboard API (`navigator.clipboard.writeText`)
- Responsive Design
- Glassmorphism UI Design
- Dynamic UI Updates

## 📂 Folder Structure

```bash
/password-generator
   ├── index.html
   ├── style.css
   └── script.js
```

## 🔐 Password Generation Logic

The application dynamically creates a character pool based on selected options:

- Uppercase Characters (`A-Z`)
- Lowercase Characters (`a-z`)
- Numbers (`0-9`)
- Symbols (`!@#$%^&*`)

Random characters are selected using:

```js
Math.random()
Math.floor()
```

to generate a secure password.

---

## 📊 Performance Metrics

### WPM Formula

```bash
WPM = (Total Words Typed) / Time (in minutes)
```

### Accuracy Formula

```bash
Accuracy = (Correct Characters / Total Typed Characters) × 100
```

---

## 🚀 How to Run

1. Clone the repository  
2. Open the project folder  
3. Run `index.html` in your browser  
4. (For Weather App) Add your API key inside `app.js`

---

## 🎯 Learning Goals

These projects are built to:

- Strengthen JavaScript fundamentals  
- Master DOM manipulation  
- Learn API integration  
- Improve problem-solving skills  
- Understand frontend state management  
- Build real-world interactive UI projects  

---

## 🔥 Future Improvements

- ⏱️ Timer-based quiz enhancement  
- 💾 Local Storage integration  
- 📊 Score history & leaderboard  
- 🎨 UI/UX improvements  
- 📱 Fully responsive design  
- 🔤 Typing error highlighting (Typing App)  
- 🔄 Restart button (Typing App)  
- 📍 Current location weather (Weather App)  
- 🌤️ Weather icons & background change  
- 🔐 Password strength indicator (Password Generator)  
- 👁️ Show/Hide password toggle  
- 🎲 Random theme generator  

---

## 📂 Complete Repository Structure

```bash
frontend-projects/
│
├── todo-app/
├── quiz-app/
├── typing-speed-test/
├── weather-app/
├── calculator-app/
├── password-generator/
│
└── README.md
```

---

## 🚀 Skills Covered

- HTML5
- CSS3
- Flexbox
- Grid Layout
- JavaScript ES6
- DOM Manipulation
- API Integration
- Event Handling
- Responsive Design
- State Management
- Dynamic Rendering
- Timer Functions
- Clipboard API
- UI/UX Design

---

## 👨‍💻 Author

**Hitesh Saini**  
Frontend & Full Stack Developer  
Passionate about JavaScript, AI, and Web Development 🚀

---

⭐ If you like this project, consider giving it a star! 🚀