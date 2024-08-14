document.addEventListener('DOMContentLoaded', function() {
    const leftSelect = document.getElementById('left-select');
    const rightSelect = document.getElementById('right-select');
    const textDiv = document.getElementById('text');

    function updateText() {
        let leftText;
        let rightText;

        if (leftSelect.value === 'true') {
            leftText = "Ако ме изберат за премиер";
        } else {
            leftText = "Ако не ме изберат за премиер";
        }

        if (rightSelect.value === 'true') {
            rightText = "ще построя магистрала";
        } else {
            rightText = "няма да построя нова магистрала";
        }

        textDiv.textContent = `${leftText}, ${rightText}`;
    }

    leftSelect.addEventListener('change', updateText);
    rightSelect.addEventListener('change', updateText);
});
