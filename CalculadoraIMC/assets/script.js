const calcular = document.querySelector("input#botaoCalcular")
// calcular.addEventListener('click', calcularImc)

function calcularImc() {
    const nome = document.querySelector("input#nomeUsuario").value
    const altura = document.querySelector("input#alturaUsuario").value
    const peso = document.querySelector("input#pesoUsuario").value
    const resultado = document.querySelector("div#resultado")   
    
    if(nome !== '' && altura !== '' && peso !== '') {
        const imc = peso / (altura ^ 2)
        if(imc < 18.5) {
            resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está abaixo do peso!`
        } else if(imc >= 18.5 && imc < 25) {
            resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está com o peso ideal. Parabéns!`
        } else if(imc >= 25 && imc < 30) {
            resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está acima do peso!`
        } else if(imc >= 30 && imc < 35) {
            resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está com obesidade!`
        } else if(imc >= 35) {
            resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está com obesidade extrema!`
        } else {
            resultado.textContent = '[ERRO]'
        }
    } else {
        resultado.textContent = '[ERRO] Você não preencheu todos os dados!'
    }
}

