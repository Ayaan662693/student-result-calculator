# Student Result & Grade Calculator

A simple and interactive web application that calculates a student's academic result based on marks entered for 5 subjects. Built for the 1st Year Web Development Continuous Assessment (CA) project.

---

## Features

- **Student Details & Input**: Takes the student's name and marks for 5 individual subjects.
- **Input Validation**: Ensures valid numbers between 0 and 100 are entered, and alerts if any fields are left empty.
- **Automatic Calculations**: Computes Total Marks (out of 500), Average Marks, and Percentage (rounded to 2 decimal places).
- **Grading & Pass/Fail Rules**:
  - Requires a minimum of 35 marks in each subject to pass.
  - Overall percentage must be at least 40% to pass.
  - Clear grading scale from **A+** to **F**.
- **Result Card**: Displays a summary of the results with color-coded status (Green for Pass, Red for Fail).
- **Reset Function**: Clears all inputs, error messages, and hides the result card with a single click.
- **Responsive Layout**: Clean layout that works well on both mobile phones and desktop browsers.

---

## Grading System

| Percentage Range | Grade | Status |
| ---------------- | ----- | ------ |
| 90% - 100%       | A+    | Pass   |
| 80% - 89%        | A     | Pass   |
| 70% - 79%        | B     | Pass   |
| 60% - 69%        | C     | Pass   |
| 50% - 59%        | D     | Pass   |
| 40% - 49%        | E     | Pass   |
| Below 40%        | F     | Fail   |

> *Note: If a student scores less than 35 marks in any individual subject, the final status will be **Fail** (Grade F).*

---

## Technologies Used

- **HTML5**: Page structure and semantic form controls.
- **CSS3**: Layout, styling, card designs, and responsive design.
- **JavaScript (Vanilla)**: DOM manipulation, event handling, input validation, and result calculation.

---

## Project Structure

```
GRADER/
├── index.html       # Main HTML file with form and result card
├── style.css        # CSS styles and layout
├── script.js        # JavaScript logic for calculations and validation
└── README.md        # Project documentation
```

---

## How to Run Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/Ayaan662693/student-result-calculator.git
   ```
2. Navigate into the project folder:
   ```bash
   cd student-result-calculator
   ```
3. Open `index.html` in any web browser (Chrome, Safari, Edge, Firefox).

---

## Live Demo

- **Live URL**: https://ayaan662693.github.io/student-result-calculator/
