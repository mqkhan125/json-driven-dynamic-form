# JSON-Driven Dynamic Form (React)

A fully dynamic form builder built with React that generates UI based on a JSON configuration.  
This project demonstrates advanced form rendering techniques including conditional rendering, nested fields, and dynamic state management.

---

## 🚀 Live Repository

👉 https://github.com/mqkhan125/json-driven-dynamic-form

---

## 📸 UI Preview
<img width="668" height="599" alt="download (2)" src="https://github.com/user-attachments/assets/be2adae0-26be-4974-8b0c-3cd2a4703d01" />
<img width="670" height="577" alt="download (1)" src="https://github.com/user-attachments/assets/99ecea74-0feb-4652-9da7-04a2072b5ca1" />
<img width="671" height="356" alt="download" src="https://github.com/user-attachments/assets/e1beda31-3bc3-4c3b-8d9b-9cf4fd416d8b" />
---

## ✨ Features

- Dynamic form generation from JSON structure
- Conditional rendering of input fields
- Supported field types:
  - Text input
  - Textarea
  - Checkbox
  - Dropdown (lookup)
- Nested dynamic fields based on dropdown selection
- Controlled components using React state
- Clean and responsive UI with Tailwind CSS

---

## 🧠 Key Concepts Demonstrated

- React Hooks (`useState`, `useEffect`)
- Conditional Rendering
- Derived State
- Dynamic Component Rendering
- JSON-driven UI architecture
- Form state management

---

## 📂 Project Structure
src/
│
├── components/
│ ├── FetchData.jsx # Handles command selection
│ ├── InputData.jsx # Renders dynamic form fields
│
├── JsonData/
│ └── jsonData.json # JSON configuration for forms

---


---

## ⚙️ How It Works

1. User selects a command from dropdown
2. Selected command loads its JSON structure
3. Fields are rendered dynamically based on field type
4. Lookup fields load nested sub-fields dynamically
5. Form state updates in real-time using controlled inputs

---

## 🛠 Tech Stack

- React (Functional Components)
- JavaScript (ES6+)
- Tailwind CSS

---

## 📌 Future Improvements

- Form validation (required fields, error messages)
- API integration for form submission
- Support for deeply nested recursive forms
- Reusable field components (architecture improvement)
- Better state optimization for large JSON structures

---

## 👨‍💻 Author

**M Qasim Khan**  
Frontend Developer  

---

## 📌 Note

This project was built as part of an interview assignment to demonstrate understanding of:

- Dynamic UI rendering
- Conditional rendering logic
- State management in React
- JSON-driven application architecture
