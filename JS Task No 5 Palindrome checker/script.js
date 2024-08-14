function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

function checkPalindrome() {
    const inputStr = document.getElementById("inputString").value;
    const resultDiv = document.getElementById("result");
    if (isPalindrome(inputStr)) {
        resultDiv.textContent = "True!";
    } else {
        resultDiv.textContent = "False."; 
    }
}
