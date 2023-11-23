function fib(start, end) {
    const fibonacciArray = [0, 1];

    while (fibonacciArray[fibonacciArray.length - 1] <= end) {
        const nextFibonacci = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
        fibonacciArray.push(nextFibonacci);
    }

    return fibonacciArray.filter(num => num >= start && num <= end);
}

function getFibonacciRange() {
    const startIndex = parseInt(document.getElementById("startIndex").value);
    const endIndex = parseInt(document.getElementById("endIndex").value);

    if (!isNaN(startIndex) && !isNaN(endIndex) && startIndex >= 0 && endIndex >= startIndex) {
        const result = fib(startIndex, endIndex);
        displayResult(result);
    } else {
        alert("Please enter valid integer values. Ensure the end index is greater than or equal to the start index.");
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<strong>Fibonacci Elements:</strong><br>" + result.join(", ");
}
