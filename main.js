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
    let valorPosiciones = [0,0,0,0,0,0,0,0,0];
    let ganador;
    //Agregar función comprobar resultados 
    const reiniciar = document.getElementById('reinicio');
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
            valorPosiciones[parseInt(imga[0].id)-1] = 'x';
            this.disabled = true;
            turno.textContent = '2';
        } else {
            const imga = this.childNodes;
            document.getElementById(imga[0].id).setAttribute('style','visibility: visible;');
            document.getElementById(imga[0].id).setAttribute('src','Img/o.png');
            valorPosiciones[parseInt(imga[0].id)-1] = 'o';
            this.disabled = true;
            turno.textContent = '1';
        }
        compr()
        
    }
    function compr() {
        if (ganoDia()===true || ganoHorizo()===true || ganoLateral()===true) {
            if (ganador==='x') {
                Swal.fire(
                    'Gano el Jugador 1',
                    'Presiona el boton para volver a jugar',
                    'success'
                  )
                reiniciarGame()
            } else {
                Swal.fire(
                    'Gano el Jugador 2',
                    'Presiona el boton para volver a jugar',
                    'success'
                  )
                reiniciarGame()
            }
        }
    }
    function reiniciarGame() {
        const datos = document.getElementsByClassName('botongeneral');
        
        for (let index = 0; index < datos.length; index++) {
            const element = datos[index];
            const imga = element.childNodes;
            document.getElementById(imga[0].id).setAttribute('style','visibility: hidden;');
            document.getElementById(imga[0].id).setAttribute('src','');
            element.disabled = false;
            
            
        }
        valorPosiciones = [0,0,0,0,0,0,0,0,0];
        ganador = null;
        if ((Math.random()*100)>=50) {
            turno.textContent = '1';
            console.log(1);
        } else {
            turno.textContent = '2';
            console.log(2);
        }
    }

    function ganoHorizo() {
        let ganarX=0;
        let ganaro=0;
        let gano = false;
            for (let index = 0; index <9; index++) {
                if (valorPosiciones[index].toString() ==='x') {
                    ganarX +=1;
                    console.log('x');
                }else if(valorPosiciones[index].toString() ==='o'){
                    ganaro +=1;
                    console.log('o');
                }
                if ((index+1)%3 ===0) {
                    if (ganarX===3 || ganaro===3) {
                        gano = true;
                        if (ganarX>=3) {
                            ganador = 'x';
                        }else{
                            ganador = 'o';
                        }
                        
                    }else{
                        ganarX=0;
                        ganaro=0;
                    }
                }

            }
        return gano;
        
    }
    function ganoLateral() {
        if (valorPosiciones[0].toString() ==='o' && valorPosiciones[3].toString() ==='o' &&valorPosiciones[6].toString()==='o') {
            ganador = 'o';
            return true;
        }else if (valorPosiciones[1].toString() ==='o' && valorPosiciones[4].toString() ==='o' &&valorPosiciones[7].toString()==='o') {
            ganador = 'o';
            return true;
        }else if (valorPosiciones[2].toString() ==='o' && valorPosiciones[5].toString() ==='o' &&valorPosiciones[8].toString()==='o') {
            ganador = 'o';
            return true;
        }else if (valorPosiciones[1].toString() ==='x' && valorPosiciones[4].toString() ==='x' &&valorPosiciones[7].toString() ==='x') {
            ganador = 'x';
            return true;
        }else if (valorPosiciones[2].toString() ==='x' && valorPosiciones[5].toString() ==='x' &&valorPosiciones[8].toString() ==='x') {
            ganador = 'x';
            return true;
        }else if (valorPosiciones[0].toString() ==='x' && valorPosiciones[3].toString() ==='x' &&valorPosiciones[6].toString() ==='x') {
            ganador = 'x';
            
            return true;
        }else{
            return false;
        }
    }
    function ganoDia() {
        if (valorPosiciones[0].toString() ==='o' && valorPosiciones[4].toString() ==='o' &&valorPosiciones[8].toString()==='o') {
            ganador = 'o';
            
            return true;
        }else if (valorPosiciones[2].toString() ==='o' && valorPosiciones[4].toString() ==='o' &&valorPosiciones[6].toString()==='o') {
            ganador = 'o';
            
            return true;
        }else if (valorPosiciones[0].toString() ==='x' && valorPosiciones[4].toString() ==='x' &&valorPosiciones[8].toString()==='x') {
            ganador = 'x';
            
            return true;
        }else if (valorPosiciones[2].toString() ==='x' && valorPosiciones[4].toString() ==='x' &&valorPosiciones[6].toString()==='x') {
            ganador = 'x';
            
            return true;
        }else{
            return false;
        }
    }
});