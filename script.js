
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    
    window.appendToDisplay = function (value) {
        display.value += value;
    };
    
    window.clearDisplay = function () {
        display.value = "";
    };
    
    window.calculateResult = function () {
        try {
            display.value = eval(display.value);
        } catch (e) {
            alert("Error en la expresión");
            display.value = "";
        }
    };
});
