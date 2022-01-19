document.addEventListener('DOMContentLoaded', function () {
    const botn1 = document.getElementById('casilla1');
    const botn2 = document.getElementById('casilla2');
    const botn3 = document.getElementById('casilla3');
    const botn4 = document.getElementById('casilla4');
    const botn5 = document.getElementById('casilla5');
    const botn6 = document.getElementById('casilla6');
    const botn7 = document.getElementById('casilla7');
    const botn8 = document.getElementById('casilla8');
    const botn9 = document.getElementById('casilla9');
    let valorPosiciones = [0,0,0,0,0,0,0,0,0]
    const reiniciar = document.getElementById('reinicio')
    const turno = document.getElementById('turno');
    botn1.onclick = cambio;
    botn2.onclick = cambio;
    botn3.onclick = cambio;
    botn4.onclick = cambio;
    botn5.onclick = cambio;
    botn6.onclick = cambio;
    botn7.onclick = cambio;
    botn8.onclick = cambio;
    botn9.onclick = cambio;
    reiniciar.onclick = reiniciarGame;


    function cambio() {
        let juagdor = turno.textContent;
        
        if (juagdor.toString()==='1') {
            const imga = this.childNodes;
            document.getElementById(imga[0].id).setAttribute('style','visibility: visible;');
            document.getElementById(imga[0].id).setAttribute('src','Img/borrar.png');
            
            this.disabled = true;
            turno.textContent = '2';
        } else {
            const imga = this.childNodes;
            document.getElementById(imga[0].id).setAttribute('style','visibility: visible;');
            document.getElementById(imga[0].id).setAttribute('src','Img/o.png');
            
            this.disabled = true;
            turno.textContent = '1';
        }
        
    }
    function reiniciarGame() {
        const datos = document.getElementsByClassName('botongeneral')
        
        for (let index = 0; index < datos.length; index++) {
            const element = datos[index];
            const imga = element.childNodes;
            document.getElementById(imga[0].id).setAttribute('style','visibility: hidden;');
            document.getElementById(imga[0].id).setAttribute('src','');
            element.disabled = false;
        }
    }
});