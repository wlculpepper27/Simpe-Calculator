let validResults = [];

document.write("<h1 style='color:lightblue; text-align:center;'>Calculator Results</h1>");

document.write("<table>");
document.write("<tr style='background-color:lightblue; color:white;'><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
    let x = prompt("Enter first number (x):");
    if (x === null) break; 
    
    let y = prompt("Enter second number (y):");
    if (y === null) break;
    
    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;
    
    let result;
    let isValid = false; 

    if (isNaN(x) || isNaN(y) || x === "" || y === "") {
        result = "ERROR: Non-numeric input";
    }

    else if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "%") {
        result = "ERROR: Invalid operator";
    }

    else {
        let numX = parseFloat(x);
        let numY = parseFloat(y);
        
        if (operator === "+") {
    result = numX + numY;
    isValid = true;  
}
else if (operator === "-") {
    result = numX - numY;
    isValid = true;  
}
else if (operator === "*") {
    result = numX * numY;
    isValid = true; 
}
else if (operator === "/") {
    if (numY === 0) {
        result = "ERROR: Division by zero";
    } else {
        result = numX / numY;
        isValid = true;  
    }
}
else if (operator === "%") {
    if (numY === 0) {
        result = "ERROR: Modulo by zero";
    } else {
        result = numX % numY;  
        isValid = true;
    }
}
    }

    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + operator + "</td>");
    document.write("<td>" + y + "</td>");
    document.write("<td>" + result + "</td>");
    document.write("</tr>");




    if (isValid && typeof result === 'number' && !isNaN(result)) {
        validResults.push(result);
    }
}

document.write("</table>");

if (validResults.length > 0) {
    let min = validResults[0];
    for (let i = 1; i < validResults.length; i++) {
        if (validResults[i] < min) {
            min = validResults[i];
        }
    }
    

    let max = validResults[0];
    for (let i = 1; i < validResults.length; i++) {
        if (validResults[i] > max) {
            max = validResults[i];
        }
    }
    

    let total = 0;
    for (let i = 0; i < validResults.length; i++) {
        total += validResults[i];
    }
    

    let avg = total / validResults.length;

    document.write("<h2 style='color:magenta; text-align:center; margin-top:30px;'>Summary Statistics</h2>");
    document.write("<table>");
    document.write("<tr style='background-color:lightblue; color:white;'><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr>");
    document.write("<td>" + min.toFixed(2) + "</td>");
    document.write("<td>" + max.toFixed(2) + "</td>");
    document.write("<td>" + avg.toFixed(2) + "</td>");
    document.write("<td>" + total.toFixed(2) + "</td>");
    document.write("</tr>");
    document.write("</table>");
    
    document.write("<p style='text-align:center; color:magenta;'>Based on " + validResults.length + " valid calculation(s)</p>");
    
} else {
    document.write("<h2 style='color:magenta; text-align:center; margin-top:30px;'>Summary Statistics</h2>");
    document.write("<table>");
    document.write("<tr style='background-color:lightblue; color:white;'><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td colspan='4' style='text-align:center; color:red;'>No valid calculations to summarize</td></tr>");
    document.write("</table>");
}


