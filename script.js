const display = document.getElementById('display');

function addToDisplay(value) {
    if (display.value === "" && ['+','*','/'].includes(value)) return;
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (display.value === "") return;
        
        let result = eval(display.value);
        
        display.value = Number.isInteger(result) ? result : result.toFixed(2);
    } catch (e) {
        alert("Ralat Matematik! Sila semak input anda.");
        clearDisplay();
    }
}


function bmi() {
    const weight = parseFloat(document.getElementById('w').value);
    const height = parseFloat(document.getElementById('h').value);
    const resElement = document.getElementById('res-b');

    if (weight > 0 && height > 0) {
        // Peringatan: User perlu masukkan tinggi dalam METER (Contoh: 1.65)
        const bmiValue = (weight / (height * height)).toFixed(1);
        
        let status = "";
        if (bmiValue < 18.5) status = " (Kurang Berat)";
        else if (bmiValue < 25) status = " (Normal)";
        else if (bmiValue < 30) status = " (Lebih Berat)";
        else status = " (Obesiti)";

        resElement.innerText = "Hasil: " + bmiValue + status;
    } else {
        alert("Sila masukkan Berat (kg) dan Tinggi dalam Meter (Contoh: 1.65)");
    }
}
