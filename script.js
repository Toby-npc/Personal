function addToDisplay(value) {
    const display = document.getElementById('display');
    // Jika skrin paparan bermula dengan '0' atau 'Error', kita reset dulu
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = "0";
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // eval() menukarkan string matematik kepada hasil nombor
        let result = eval(display.value.replace('×', '*').replace('÷', '/'));
        display.value = Number.isInteger(result) ? result : result.toFixed(2);
    } catch (e) {
        display.value = "Error";
    }
}

function bmi() {
    const w = parseFloat(document.getElementById('w').value);
    const h = parseFloat(document.getElementById('h').value);
    const resElement = document.getElementById('res-b');

    if (w > 0 && h > 0) {
        const bmiValue = (w / (h * h)).toFixed(1);
        let status = "";
        let color = "";

        if (bmiValue < 18.5) { status = "Kurang Berat"; color = "#ffcc00"; }
        else if (bmiValue < 25) { status = "Normal"; color = "#00ff88"; }
        else if (bmiValue < 30) { status = "Lebih Berat"; color = "#ff9900"; }
        else { status = "Obesiti"; color = "#ff4d4d"; }

        resElement.innerHTML = `
            <div style="font-size: 2rem; color: ${color}">${bmiValue}</div>
            <div style="color: ${color}; font-weight: bold;">Status: ${status}</div>
        `;
    } else {
        alert("Sila masukkan Berat (kg) dan Tinggi dalam Meter (Contoh: 1.67)");
    }
}
