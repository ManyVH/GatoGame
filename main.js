document.addEventListener('DOMContentLoaded', function () {
    const botn1 = document.getElementById('casilla1');
    botn1.onclick = cambio;
    
    function cambio() {
        
        const imga = this.childNodes;
        document.getElementById(imga[0].id).setAttribute('style','visibility: visible;')
        console.log(imga[0].id)
        this.disabled = true;
    }
})