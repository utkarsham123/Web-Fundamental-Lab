const form = document.getElementById("gradeForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const m1 = parseFloat(document.getElementById("sub1").value);
    const m2 = parseFloat(document.getElementById("sub2").value);
    const m3 = parseFloat(document.getElementById("sub3").value);
    const m4 = parseFloat(document.getElementById("sub4").value);
    const m5 = parseFloat(document.getElementById("sub5").value);

    if (
        isNaN(m1) || isNaN(m2) || isNaN(m3) ||
        isNaN(m4) || isNaN(m5)
    ) {
        alert("Please enter all marks.");
        return;
    }

    const total = m1 + m2 + m3 + m4 + m5;

    const percentage = (total / 500) * 100;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status;

    if (percentage >= 40) {
        status = "PASS";
    } else {
        status = "FAIL";
    }

    // Show result
    result.style.display = "block";

    result.innerHTML = `
        <h2>📊 Your Result</h2>

        <p><strong>Total Marks:</strong> ${total} / 500</p>

        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>

        <p class="grade"><strong>Grade: ${grade}</strong></p>

        <p><strong>Status:</strong> ${status}</p>
    `;
});