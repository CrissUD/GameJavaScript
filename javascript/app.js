function play(humanOption){
    const result = document.querySelector('.result');
    const humanImg = document.querySelector('.human-img');
    const machineImg = document.querySelector('.machine-img');
    const machineOption = Math.floor(Math.random() * (4 - 1)) + 1;
    humanImg.src = './resources/images/option'+humanOption+'.png';
    machineImg.src = './resources/images/option'+machineOption+'.png';
    machineImg.classList.add('reflex');
    document.querySelector('.cover').classList.add('reset');
    if(
        humanOption === 1 && machineOption === 3 ||
        humanOption === 2 && machineOption === 1 ||
        humanOption === 3 && machineOption === 2
    )
        result.innerHTML = "!Felicidades! Has Ganado";
    else if(humanOption === machineOption)
        result.innerHTML = "!Empate!";
    else
        result.innerHTML = "!Lo siento! La maquina ha ganado";
}

function reset(){
    document.querySelector('.human-img').src = './resources/images/question.png';
    document.querySelector('.machine-img').src = './resources/images/question.png';
    document.querySelector('.machine-img').classList.remove('reflex');
    document.querySelector('.cover').classList.remove('reset');
    document.querySelector('.result').innerHTML = "Resultado";
}