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
            classif = " extremamente abaixo do peso. Esta condição é extremamente perigosa para a saúde e requer acompanhamento médico urgente. Caso os dados inseridos estejam incorretos, tente corrigir e calcular o IMC novamente.";
        } else if (valorIMC < 18.5) {
            classif = "abaixo do peso. É necessário ingerir mais algumas calorias para atingir o peso ideal.";
        } else if (valorIMC < 25) {
            classif = "no peso ideal. Muito bem, continue assim!";
        } else if (valorIMC < 30) {
            classif = "levemente acima do peso. Fique atento com sua alimentação e prática física.";
        } else if (valorIMC < 35) {
            classif = "obesidade grau 1. Esta condição pode ser prejudicial, recomenda-se mudanças na alimentação e prática física com acompanhamento nutricional.";
        } else if (valorIMC < 40) {
            classif = "obesidade grau 2. Esta condição pode ser prejudicial, recomenda-se fortemente acompanhamento médico e nutricional para esta condição.";
        } else if (valorIMC < 50){
            classif = "obesidade grau 3. Esta condição pode ser muito prejudicial, recomenda-se fortemente acompanhamento médico e nutricional para esta condição.";
        } else {
            classif = "acima de obesidade grau 3. Esta condição é extremamente perigosa para a saúde e requer acompanhamento médico urgente. Caso os dados inseridos estejam incorretos, tente corrigir e calcular o IMC novamente."
        }

        resultado.textContent = `O IMC é ${valorIMC} e você está ${classif}`

    } else {
        resultado.textContent = 'Preencha todos os campos para calcular seu IMC.'
    }
}

calcular.addEventListener('click', imc);