// Първи Promise - автоматично преминава в resolve след 5 секунди
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 1 resolved after 5 seconds");
        document.getElementById('status1').textContent = "Promise 1 resolved!";
        resolve('Promise 1 done');
    }, 5000);
});

// Втори Promise - автоматично преминава в resolve след 7 секунди
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 resolved after 7 seconds");
        document.getElementById('status2').textContent = "Promise 2 resolved!";
        resolve('Promise 2 done');
    }, 7000);
});

// Трети Promise - изчаква изпълнението на първите два и преминава в resolve само ако и двата са resolve
const promise3 = Promise.all([promise1, promise2])
    .then((results) => {
        console.log("Both promises resolved");
        document.getElementById('status3').textContent = "All promises resolved!";
        return 'Promise 3 done';
    })
    .catch((error) => {
        console.error("One of the promises failed", error);
    });

// Обработваме резултата и обновяваме текста в HTML
promise3.then((result) => {
    console.log(result);
});
