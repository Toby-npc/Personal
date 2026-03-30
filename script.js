function cal(op) {
    const a = parseFloat(document.getElementById('n1').value);
    const b = parseFloat(document.getElementById('n2').value);
    let r = (op === '+') ? a + b : a - b;
    document.getElementById('res-c').innerText = "Hasil: " + r;
}

function bmi() {
    const w = document.getElementById('w').value;
    const h = document.getElementById('h').value;
    const res = (w / (h * h)).toFixed(1);
    document.getElementById('res-b').innerText = "BMI: " + res;
}
