const display = document.getElementById('display');

function addToDisplay(val) {
    if (display.value === "0") display.value = val;
    else display.value += val;
}

function clearDisplay() { display.value = "0"; }

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

function calculateResult() {
    try {
        let res = eval(display.value);
        display.value = Number.isInteger(res) ? res : res.toFixed(2);
    } catch { display.value = "Error"; }
}

function bmi() {
    const w = parseFloat(document.getElementById('w').value);
    const h = parseFloat(document.getElementById('h').value);
    const res = document.getElementById('res-bmi');
    if (w > 0 && h > 0) {
        const val = (w / (h * h)).toFixed(2);
        res.innerHTML = `BMI: <b>${val}</b>`;
    }
}

function zakat() {
    const inc = parseFloat(document.getElementById('income').value);
    const res = document.getElementById('res-zakat');
    if (inc >= 0) {
        const total = (inc * 0.025).toFixed(2);
        res.innerHTML = `Zakat: <b>RM ${total}</b>`;
    }
}

function convert() {
    const km = parseFloat(document.getElementById('km').value);
    const res = document.getElementById('res-unit');
    if (km >= 0) {
        const m = km * 1000;
        res.innerHTML = `Hasil: <b>${m} m</b>`;
    }
}
