function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function backspace() {
    let val = document.getElementById('display').value;
    document.getElementById('display').value = val.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        alert("Input tidak sah!");
        clearDisplay();
    }
}

function bmi() {
    const w = parseFloat(document.getElementById('w').value);
    const h = parseFloat(document.getElementById('h').value);
    if (w > 0 && h > 0) {
        const res = (w / (h * h)).toFixed(1);
        document.getElementById('res-b').innerText = "BMI: " + res;
    } else {
        alert("Sila masukkan berat dan tinggi!");
    }
}
