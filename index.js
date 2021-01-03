//Gerar numeros inteiros aleatorios entre 1 e 6

function NumeroAleatorio1(max, min) {
    let aleatorio = Math.random() * (max - min) + min;
    return Math.round(aleatorio)
}


let num1 = NumeroAleatorio1(1, 60)
let num2 = NumeroAleatorio1(1, 60)
let num3 = NumeroAleatorio1(1, 60)
let num4 = NumeroAleatorio1(1, 60)
let num5 = NumeroAleatorio1(1, 60)
let num6 = NumeroAleatorio1(1, 60)


if (num1 == num2 || num1 == num3 || num1 == num4 || num1 == num5 == num1 == num6) {
    window.location.reload(1);
}
if (num2 == num1 || num2 == num3 || num2 == num4 || num2 == num5 || num2 == num6) {
    window.location.reload(1);
}
if (num3 == num1 || num3 == num2 || num3 == num4 || num3 == num5 || num3 == num6) {
    window.location.reload(1);
}
if (num4 == num1 || num4 == num2 || num4 == num3 || num4 == num5 || num4 == num6) {
    window.location.reload(1);
}
if (num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4 || num5 == num6) {
    window.location.reload(1);
}
if (num6 == num1 || num6 == num2 || num6 == num3 || num6 == num4 || num6 == num5) {
    window.location.reload(1);
}


var html = ''

html += `<ul>`
html += `<h2>Gerador de numeros Mega Sena</h2>`
html += `<li>${num1}</li>`
html += `<li>${num2}</li>`
html += `<li>${num3}</li>`
html += `<li>${num4}</li>`
html += `<li>${num5}</li>`
html += `<li>${num6}</li>`
html += `<input type='submit' value='Gerar Numeros' onClick="atualizarPagina()">`
html += '</ul>'


document.write(html)

function atualizarPagina() {
    window.location.reload(1);

}




