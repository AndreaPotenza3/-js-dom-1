//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//Al click del bottone, la lampadina dovrà accendersi

const turnOnButton = document.getElementById('turn_on')

const element = document.getElementById('lamp')

turnOnButton.addEventListener('click', function() {
    
    element.classList.toggle('on')
    if (element.classList.contains('on')){
        element.src = "./img/yellow_lamp.png"
        turnOnButton.innerText = 'Spegni'
    } else {
        element.src ="./img/white_lamp.png"
        turnOnButton.innerText = 'Accendi'

    }        
}
)


