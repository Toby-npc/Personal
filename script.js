const display = document.getElementById('display');

function addToDisplay(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

function calculateResult() {
    try {
        // eval() mengira string matematik
        let result = eval(display.value);
        display.value = Number.isInteger(result) ? result : result.toFixed(2);
    } catch (e) {
        display.value = "Error";
    }
}

function bmi() {
    const w = parseFloat(document.getElementById('w').value);
    const h = parseFloat(document.getElementById('h').value);
    const res = document.getElementById('res-b');

    if (w > 0 && h > 0) {
        const bmiVal = (w / (h * h)).toFixed(1);
        let status = "";
        if (bmiVal < 18.5) status = "Kurang Berat";
        else if (bmiVal < 25) status = "Normal";
        else if (bmiVal < 30) status = "Lebih Berat";
        else status = "Obesiti";

        res.innerHTML = `<b style="color:#00abf0; font-size:1.5rem;">${bmiVal}</b><br>Status: ${status}`;
    } else {
        alert("Sila masukkan berat (kg) dan tinggi dalam meter (cth: 1.65)");
    }
}
