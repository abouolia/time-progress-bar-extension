const init = () => {
    function calculatePercentageOf(startOf, diffIn) {
        const startOfYear = moment().startOf(startOf);
        const endOfYear = moment().endOf(startOf);
        const daysInPeriod = moment(endOfYear).diff(startOfYear, diffIn);

        const currentDay = moment();
        const diffInDays = moment(currentDay).diff(startOfYear, diffIn);
        return (diffInDays / daysInPeriod) * 100;
    }
    const percentageOfYear = calculatePercentageOf('year', 'day');
    const percentageOfMonth = calculatePercentageOf('month', 'day');
    const percentageOfDay = calculatePercentageOf('day', 'minute');

    const dayProgress = document.getElementById("day-time-progress");
    const monthProgress = document.getElementById("month-time-progress");
    const yearProgress = document.getElementById("year-time-progress");

    yearProgress.style.width = percentageOfYear + "%";
    monthProgress.style.width = percentageOfMonth + "%";
    dayProgress.style.width = percentageOfDay + "%";

    const dayText = document.getElementById("day-text-progress");
    const monthText = document.getElementById("month-text-progress");
    const yearText = document.getElementById("year-text-progress");

    dayText.innerHTML = "Day: " + percentageOfDay.toFixed(1) + "% complete.";
    monthText.innerHTML = "Month: " + percentageOfMonth.toFixed(1) + "% complete.";
    yearText.innerHTML = "Year: " + percentageOfYear.toFixed(1) + "% complete.";

    const body = document.querySelector('body');

    body.classList.add('is-loaded');
};

window.onload = init;