function calculateDateDifference() {

    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    if (!startDate || !endDate) {
        return;
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
        months--;
        const daysInPreviousMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        days += daysInPreviousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const resultElement = document.getElementById("result-left");
    resultElement.textContent = `${years} години, ${months} месеца, ${days} дни`;
}

function calculateTableSum() {
    let totalYears = 0;
    let totalMonths = 0;
    let totalDays = 0;

    const yearsInputs = document.querySelectorAll('.input[name^="years"]');
    const monthsInputs = document.querySelectorAll('.input[name^="months"]');
    const daysInputs = document.querySelectorAll('.input[name^="days"]');

    yearsInputs.forEach((yearInput, index) => {
        totalYears += parseInt(yearInput.value) || 0;
        totalMonths += parseInt(monthsInputs[index].value) || 0;
        totalDays += parseInt(daysInputs[index].value) || 0;
    });

    totalYears += Math.floor(totalMonths / 12);
    totalMonths = totalMonths % 12;

    totalMonths += Math.floor(totalDays / 30);
    totalDays = totalDays % 30;


    totalYears += Math.floor(totalMonths / 12);
    totalMonths = totalMonths % 12;

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p><b>${totalYears} години, ${totalMonths} месеца, ${totalDays} дни</b></p>`;
}

document.getElementById("start-date").addEventListener("input", calculateDateDifference);
document.getElementById("end-date").addEventListener("input", calculateDateDifference);

document.getElementById("table-calculate-button").addEventListener("click", () => {
    calculateTableSum();
});






