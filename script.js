// 1. Kalkulator Biasa [cite: 47]
function cal(op) {
    const a = parseFloat(document.getElementById('n1').value);
    const b = parseFloat(document.getElementById('n2').value);
    if(isNaN(a) || isNaN(b)) return alert("Sila masukkan nombor");
    let r = 0;
    if(op === '+') r = a + b;
    else if(op === '-') r = a - b;
    else if(op === '*') r = a * b;
    else if(op === '/') r = a / b;
    document.getElementById('res-c').innerText = "Hasil: " + r;
}

// 2. BMI Checker [cite: 48]
function bmi() {
    const w = parseFloat(document.getElementById('w').value);
    const h = parseFloat(document.getElementById('h').value);
    if(w > 0 && h > 0) {
        let res = (w / (h * h)).toFixed(1);
        let status = (res < 18.5) ? "Kurus" : (res < 25) ? "Normal" : "Lebih Berat";
        document.getElementById('res-b').innerText = "BMI: " + res + " (" + status + ")";
    }
}

// 3. Unit Converter [cite: 50, 51, 52, 53, 54]
function unit(t) {
    const v = parseFloat(document.getElementById('u').value);
    if(isNaN(v)) return;
    let r = (t==='cm-m')? v/100+" m" : (t==='m-cm')? v*100+" cm" : (t==='m-km')? v/1000+" km" : v*1000+" m";
    document.getElementById('res-u').innerText = "Hasil: " + r;
}

// 4. Zakat Calculator [cite: 49]
function zakat() {
    const m = parseFloat(document.getElementById('z').value);
    if(m > 0) {
        document.getElementById('res-z').innerText = "Zakat: RM " + (m * 0.025).toFixed(2);
    }
}
