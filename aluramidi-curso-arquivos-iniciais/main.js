function exibirSomTeclas (idElementAudio) {
 document.querySelector(idElementAudio).play(); //querySelector ira percorrer apenas o primeiro elemento
}

const listaDeTeclas = document.querySelectorAll('.tecla') //querySelectorAll percorrerá todos os elementos


for (let contador = 0;  contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]

    const instrumentos = tecla.classList[1]
    
    const idAudio = `#som_${instrumentos}`


    tecla.onclick = function () {
        exibirSomTeclas(idAudio)
    }

    tecla.onkeydown = function (evento) {
        
        console.log(evento.code) //mostra no console as teclas que estao sendo chamadas ao apertar algum dos botoes
        
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa') //entao nessa condiçao, mostra que se a tecla apertada for o 'space', ativa
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa') 
    }

}

