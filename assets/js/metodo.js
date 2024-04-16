function calcularMetodologia() {
    const notaA = parseFloat(document.getElementById('notaA').value);
    const notaB = parseFloat(document.getElementById('notaB').value);
    const notaC = parseFloat(document.getElementById('notaC').value);

    let formula = '';

    if (notaA > 32) {
        formula += 'A+';
    } else if (notaA >= 29) {
        formula += 'A+/-';
    } else {
        formula += 'A-';
    }

    formula += ' ';

    if (notaB > 32) {
        formula += 'B+';
    } else if (notaB >= 29) {
        formula += 'B+/-';
    } else {
        formula += 'B-';
    }

    formula += ' ';

    if (notaC > 32) {
        formula += 'C+';
    } else if (notaC >= 29) {
        formula += 'C+/-';
    } else {
        formula += 'C-';
    }

    document.getElementById('resultado').innerHTML = '<h3>Fórmula:</h3><p>' + formula + '</p>';
}
