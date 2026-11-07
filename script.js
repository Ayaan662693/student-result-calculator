// Get button elements
const calcBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn");

// Get error message box and result card
const errorBox = document.getElementById("errorMessage");
const resultCard = document.getElementById("resultCard");

// Calculate Result function
function calculateResult() {
  // Clear previous error
  errorBox.style.display = "none";
  errorBox.innerText = "";

  // Get input values
  const name = document.getElementById("studentName").value.trim();
  const sub1Input = document.getElementById("sub1").value.trim();
  const sub2Input = document.getElementById("sub2").value.trim();
  const sub3Input = document.getElementById("sub3").value.trim();
  const sub4Input = document.getElementById("sub4").value.trim();
  const sub5Input = document.getElementById("sub5").value.trim();

  // Validate Name
  if (name === "") {
    showError("Please enter student name.");
    return;
  }

  // Check if any mark field is empty
  if (
    sub1Input === "" ||
    sub2Input === "" ||
    sub3Input === "" ||
    sub4Input === "" ||
    sub5Input === ""
  ) {
    showError("Please enter marks for all 5 subjects.");
    return;
  }

  // Convert inputs to numbers
  const m1 = parseFloat(sub1Input);
  const m2 = parseFloat(sub2Input);
  const m3 = parseFloat(sub3Input);
  const m4 = parseFloat(sub4Input);
  const m5 = parseFloat(sub5Input);

  const marks = [m1, m2, m3, m4, m5];

  // Validate marks range (0 to 100)
  for (let i = 0; i < marks.length; i++) {
    if (isNaN(marks[i]) || marks[i] < 0 || marks[i] > 100) {
      showError("Every subject mark must be a valid number between 0 and 100.");
      return;
    }
  }

  // Calculate Total, Average and Percentage
  const totalMarks = m1 + m2 + m3 + m4 + m5;
  const averageMarks = totalMarks / 5;
  const percentage = (totalMarks / 500) * 100;

  // Determine Grade and Pass/Fail status
  let grade = "";
  let status = "";

  // Check if student failed in any individual subject (less than 35)
  let hasFailedSubject = false;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
      hasFailedSubject = true;
      break;
    }
  }

  if (hasFailedSubject || percentage < 40) {
    grade = "F";
    status = "Fail";
  } else if (percentage >= 90) {
    grade = "A+";
    status = "Pass";
  } else if (percentage >= 80) {
    grade = "A";
    status = "Pass";
  } else if (percentage >= 70) {
    grade = "B";
    status = "Pass";
  } else if (percentage >= 60) {
    grade = "C";
    status = "Pass";
  } else if (percentage >= 50) {
    grade = "D";
    status = "Pass";
  } else {
    grade = "E";
    status = "Pass";
  }

  // Display results in the result card
  document.getElementById("resName").innerText = name;
  document.getElementById("resTotal").innerText = totalMarks + " / 500";
  document.getElementById("resAvg").innerText = averageMarks.toFixed(2);
  document.getElementById("resPercentage").innerText = percentage.toFixed(2) + "%";
  document.getElementById("resGrade").innerText = grade;

  const resStatus = document.getElementById("resStatus");
  resStatus.innerText = status;

  // Add color based on status
  if (status === "Pass") {
    resStatus.className = "pass";
    resultCard.style.borderTopColor = "#2ecc71";
  } else {
    resStatus.className = "fail";
    resultCard.style.borderTopColor = "#e74c3c";
  }

  // Show the result card
  resultCard.style.display = "block";
}

// Function to display error message
function showError(message) {
  errorBox.innerText = message;
  errorBox.style.display = "block";
  resultCard.style.display = "none";
}

// Reset function
function resetForm() {
  document.getElementById("studentName").value = "";
  document.getElementById("sub1").value = "";
  document.getElementById("sub2").value = "";
  document.getElementById("sub3").value = "";
  document.getElementById("sub4").value = "";
  document.getElementById("sub5").value = "";

  errorBox.style.display = "none";
  errorBox.innerText = "";
  resultCard.style.display = "none";
}

// Event Listeners
calcBtn.addEventListener("click", calculateResult);
resetBtn.addEventListener("click", resetForm);

