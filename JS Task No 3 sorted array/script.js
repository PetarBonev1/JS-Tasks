const arr = [
    { date: '10.01.2017', dayOfWeek: 'Tuesday' },
    { date: '05.11.2016', dayOfWeek: 'Saturday' },
    { date: '21.12.2002', dayOfWeek: 'Monday' }
];


const sortedArr = arr.sort((a, b) => {
    const aDate = a.date.split('.').reverse().join('');
    const bDate = b.date.split('.').reverse().join('');
    return aDate.localeCompare(bDate);
});


const dateList = document.getElementById('date-list');
sortedArr.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `#${index + 1}: Дата: ${item.date}, Ден от седмицата: ${item.dayOfWeek}`;
    dateList.appendChild(listItem);
});
