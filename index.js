// Function to calculate the date difference (Years, Months, Days)
function calculateDateDifference() {
    // Get the date inputs
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    // Validate if both dates are provided
    if (!startDate || !endDate) {
        return; // Do nothing if one of the dates is missing
    }

    // Convert the input values to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in years, months, and days
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // Adjust for negative values in months or days
    if (days < 0) {
        months--;
        const daysInPreviousMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        days += daysInPreviousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the result on the left side
    const resultElement = document.getElementById("result-left");
    resultElement.textContent = `${years} години, ${months} месеца, ${days} дни`;
}

// Function to calculate and sum the inputted values in the table
function calculateTableSum() {
    let totalYears = 0;
    let totalMonths = 0;
    let totalDays = 0;

    // Get all input values for years, months, and days in the table
    const yearsInputs = document.querySelectorAll('.input[name^="years"]');
    const monthsInputs = document.querySelectorAll('.input[name^="months"]');
    const daysInputs = document.querySelectorAll('.input[name^="days"]');

    // Loop through all rows and sum up the values
    yearsInputs.forEach((yearInput, index) => {
        totalYears += parseInt(yearInput.value) || 0;
        totalMonths += parseInt(monthsInputs[index].value) || 0;
        totalDays += parseInt(daysInputs[index].value) || 0;
    });

    // Normalize months and days (e.g., 15 months becomes 1 year and 3 months)
    totalYears += Math.floor(totalMonths / 12);
    totalMonths = totalMonths % 12;

    // Normalize days (e.g., 35 days becomes 1 month and 4 days)
    totalMonths += Math.floor(totalDays / 30); // Approximation of month days
    totalDays = totalDays % 30;  // Approximate remaining days

    // Normalize months again after adding converted days
    totalYears += Math.floor(totalMonths / 12);  // Convert extra months into years
    totalMonths = totalMonths % 12;  // Keep months under 12

    // Display the summed result in the table
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p><b>${totalYears} години, ${totalMonths} месеца, ${totalDays} дни</b></p>`;
}

// Add event listeners to both buttons for calculations
document.getElementById("start-date").addEventListener("input", calculateDateDifference);
document.getElementById("end-date").addEventListener("input", calculateDateDifference);

document.getElementById("table-calculate-button").addEventListener("click", () => {
    calculateTableSum();
});






