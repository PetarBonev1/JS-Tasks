const temperatures = {
    "01.01.2015": 33.3, "02.01.2015": 20.2, "03.01.2015": 18.3, "04.01.2015": 22.2,
    "05.01.2015": 30.0, "05.02.2015": 10.2, "06.01.2015": 40.2, "07.01.2015": 22.3,
    "08.01.2015": 23.2, "09.01.2015": 24.2, "10.01.2015": 25.2, "11.01.2015": 30.2,
    "12.01.2015": 30.2, "13.01.2015": 31.2, "14.01.2015": 10.2, "14.02.2015": 10.2
};

// Функция за изчисляване на средна температура за даден период
function calculateAverageTemperature(dates, temperatures) {
    let sum = 0;
    let count = 0;

    dates.forEach(date => {
        if (temperatures[date]) {
            sum += temperatures[date];
            count++;
        }
    });

    return count > 0 ? (sum / count).toFixed(2) : 0;
}

// Списък с дните за първата и втората седмица на януари
const firstWeekDates = [
    "01.01.2015", "02.01.2015", "03.01.2015", "04.01.2015", "05.01.2015", "06.01.2015", "07.01.2015"
];
const secondWeekDates = [
    "08.01.2015", "09.01.2015", "10.01.2015", "11.01.2015", "12.01.2015", "13.01.2015", "14.01.2015"
];

// Изчисляване на средните температури за първата и втората седмица на януари
const firstWeekAvg = calculateAverageTemperature(firstWeekDates, temperatures);
const secondWeekAvg = calculateAverageTemperature(secondWeekDates, temperatures);

// Дни на седмицата на български език
const daysOfWeek = ["понеделник", "вторник", "сряда", "четвъртък", "петък", "събота", "неделя"];

// Функция за изчисляване на промяната на температурата спрямо предишния ден
function calculateTemperatureChange(dates, temperatures) {
    let result = "";
    let currentDayIndex = 0; // Започваме от понеделник (01.01.2015 е четвъртък, но да приемем, че 01.01. е понеделник)

    dates.forEach((date, index) => {
        if (index > 0) {
            const previousDate = dates[index - 1];
            const change = (temperatures[date] - temperatures[previousDate]).toFixed(1);
            result += `${daysOfWeek[currentDayIndex]} ${date.slice(0, 2)} януари: ${change > 0 ? '+' : ''}${change}°C<br>`;
        } else {
            result += `${daysOfWeek[currentDayIndex]} ${date.slice(0, 2)} януари: ${temperatures[date]}°C<br>`;
        }
        currentDayIndex = (currentDayIndex + 1) % 7; // Преход към следващия ден от седмицата
    });

    return result;
}

// Списък с дните на януари
const januaryDates = [
    "01.01.2015", "02.01.2015", "03.01.2015", "04.01.2015", "05.01.2015", "06.01.2015", "07.01.2015",
    "08.01.2015", "09.01.2015", "10.01.2015", "11.01.2015", "12.01.2015", "13.01.2015", "14.01.2015"
];

// Показване на резултатите в HTML
document.getElementById('results').innerHTML = `
    През първата седмица на януари средната температура ще бъде: ${firstWeekAvg}°C<br>
    През втората седмица на януари средната температура ще бъде: ${secondWeekAvg}°C<br><br>
    Промяна на температурата за всеки ден:<br>
    ${calculateTemperatureChange(januaryDates, temperatures)}
`;
