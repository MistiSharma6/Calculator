let buttonsc = document.querySelectorAll("#button");

let answer ="";
let actualstr = "";
let displaystr = "";
let displaysc = document.querySelector(".display");

calculate = (actualstr) => {
    try {
        answer = eval(actualstr);
        displaysc.innerText = answer;
        displaystr = answer.toString();
        actualstr = answer.toString();
    }
    catch {
        displaysc.innerText = "SyntaxError";
    }
}

idtfyButton = (value) => {
    if (!isNaN(value) || value == "00" || value === "%" || value === "." || value === "+" || value === "-" || value === "(" || value === ")") {
        console.log("digit = ", value);
        displaystr += value;
        actualstr += value;
        displaysc.innerText = displaystr;
    }
    else if (value === "×") {
        displaystr += "×";
        actualstr += "*";
        displaysc.innerText = displaystr;
    }
    else if (value === "÷") {
        displaystr += "÷";
        actualstr += "/";
        displaysc.innerText = displaystr;
    }
    else if (value === "1/x") {
        displaystr += "1/";
        actualstr += "1/";
        displaysc.innerText = displaystr;
    }
    else if (value === "x^2") {
        displaystr += "^2";
        actualstr += "**2";
        displaysc.innerText = displaystr;
    }
    else if (value === "√x") {
        displaystr += "√(";
        actualstr += "Math.sqrt(";
        displaysc.innerText = displaystr;
    }
    else if (value === "←") {
        displaystr = displaystr.slice(0, -1);
        displaysc.innerText = displaystr;
    }
    else if (value === "AC") {
        displaystr = "";
        actualstr = "";
        displaysc.innerText = "0";
    }
    else if (value === "="){
        calculate(actualstr);
    }
};

buttonsc.forEach(button => {
    button.addEventListener('click', () => {
        console.log("button was clicked");
        const value = button.textContent;
        idtfyButton(value);
    });
});