//Este programa se trata de um estudo pessoal para aplicação de conceitos aprendidos em Javascript, CSS e html. 02/06/2021 (14:36).
const calcular = document.getElementById('calcular');

function imc() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado'); //Não queremos o valor daqui, queremos atribuir um valor na realidade.

    if (peso !== '' && altura !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2) //arredondar o valor para duas casas

        let classif = "";
        if(valorIMC < 6){
            classif = "com dados mau inseridos. Confira o peso e altura declarados e tente novamente.";
        } else if (valorIMC < 18.5) {
            classif = "abaixo do peso.";
        } else if (valorIMC < 25) {
            classif = "no peso ideal.";
        } else if (valorIMC < 30) {
            classif = "levemente acima do peso.";
        } else if (valorIMC < 35) {
            classif = "obesidade grau 1";
        } else if (valorIMC < 40) {
            classif = "obesidade grau 2";
        } else {
            classif = "obesidade grau 3.";
        }

        resultado.textContent = `O IMC é ${valorIMC} e nesta condição está ${classif}`

    } else {
        resultado.textContent = 'Preencha todos os campos para calcular seu IMC.'
    }
}

calcular.addEventListener('click', imc);