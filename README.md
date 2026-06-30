# 🧠 Quiz App

An interactive multiple-choice quiz website built with pure HTML, CSS, and JavaScript.
Built as part of the OJT (On Job Training) project for Semester 2.

---

## 📋 About the Project

The Quiz App is a browser-based interactive quiz website that allows users to
select from multiple question categories and attempt a timed quiz. The user
enters their name, selects a category, and answers 10 multiple choice questions
with a countdown timer. At the end, a result screen shows the final score
with a performance message.

No backend. No API. Pure JavaScript logic and state management.

---

## 📁 Repository

🔗 https://github.com/chetanprasadofficial/Quiz-App

---

## ✨ Features

- 4 quiz categories — General Knowledge, Computer Science, Geography, Sports
- 10 questions per category (40 questions total)
- 15 second countdown timer per question
- Timer turns red and pulses when 5 seconds remain
- Green highlight for correct answer, red for wrong
- All options disabled after answering
- Live score counter during the quiz
- Progress bar showing quiz completion
- Final result screen with score, percentage and performance message
- High score saved per user using localStorage
- Fully responsive — works on mobile and desktop
- 2 column option layout on desktop, 1 column on mobile

---

## 🚀 How to Run

1. Click the green **Code** button on this repository
2. Click **Download ZIP**
3. Extract the ZIP file on your computer
4. Open the **Quiz-App** folder
5. Double click **index.html**
6. It opens in your browser — no installation needed

---

## 📁 File Structure

Quiz-App/
├── index.html       → All 4 screens of the app
├── style.css        → Full design and responsive layout
├── script.js        → Quiz logic, timer, score, localStorage
└── questions.js     → All 40 questions across 4 categories

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure and layout of all 4 screens |
| CSS3 | Styling, animations, responsive design |
| JavaScript | Quiz logic, state management, timer |
| localStorage | Saving high score per user |

---

## 📚 Concepts Used

- Arrays of objects for question data
- State management with JavaScript variables
- DOM manipulation for dynamic rendering
- Event listeners for user interaction
- setInterval for countdown timer
- localStorage for data persistence
- CSS Grid for responsive layout
- CSS classes for conditional styling

---

## 🎯 Project Requirements Met

| Requirement | Status |
|---|---|
| One question at a time with progress indicator | ✅ |
| Visual feedback — green correct, red wrong | ✅ |
| Disable options after answering | ✅ |
| Running score counter | ✅ |
| Final score with percentage | ✅ |
| Restart button | ✅ |
| Mobile responsive with min 44px buttons | ✅ |
| 2 column grid on wider screens | ✅ |
| No horizontal scroll at 320px | ✅ |
| Countdown timer (stretch goal) | ✅ |
| Category selection (stretch goal) | ✅ |
| High score in localStorage (stretch goal) | ✅ |

---

## 👥 Team Members & Responsibilities

| # | Name | Role |
|---|---|---|
| 1 | **Chetan Prasad** (Team Leader) | Project setup, Home & Category Screen, team coordination, final merging and testing |
| 2 | **Ashutosh Kumar** | Question Screen UI — question display, progress bar, timer, options layout |
| 3 | **Prince Chaudhary** | Quiz Logic (JavaScript) — screen switching, answer checking, scoring, timer logic |
| 4 | **Sonu Vishwakarma** | Result Screen — final score display, performance message, restart options |
| 5 | **Khushal Agarwal** | Questions Data — wrote all 40 questions across 4 categories in questions.js |
| 6 | **Aarav Bhati** | CSS Styling & Responsive Design — full visual design and mobile responsiveness |

---

## 👨‍💻 Team Leader

**Chetan Prasad**
OJT Project — School of Technology
Semester 2 — 2025
