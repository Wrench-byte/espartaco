function show() {
    let boton1 = document.getElementById("sig");
    let body1 = document.getElementById("body1");
    
    boton1.addEventListener('click', function() {
        let name = document.getElementById("nombre").value.trim();
        
        if (name === "") {
            alert("Не может быть пустое");
        } else {
            // Convertir a minúsculas para comparar más fácil
            let nameLower = name.toLowerCase();
            
            if(nameLower === "vasilisa") {
                // Caso especial para Vasilisa
                const elemento1 = document.getElementById('div1');
                elemento1.classList.add('oculto');
                const circulo = document.getElementById('miCirculo');
                circulo.classList.toggle('zoom');
                localStorage.setItem('nombreUsuario', name);
                
                setTimeout(function() {
                    window.open("pag3.html");
                    window.close("")
                }, 1010);
                
            } else if(nameLower === "adrian") {
                // Caso especial para Adrian
                const elemento1 = document.getElementById('div1');
                elemento1.classList.add('oculto');
                const circulo = document.getElementById('miCirculo');
                circulo.classList.toggle('zoom');
                localStorage.setItem('nombreUsuario', name);
                
                setTimeout(function() {
                    window.open("pag5.html");
                    window.close("")
                }, 1010);
                
            } else {
                // Caso normal para otros nombres
                const elemento1 = document.getElementById('div1');
                elemento1.classList.add('oculto');
                const circulo = document.getElementById('miCirculo');
                circulo.classList.toggle('zoom');
                localStorage.setItem('nombreUsuario', name);
                
                setTimeout(sigui, 1010);
            }
        }
    });
}

function sigui(){
    window.open("pag2.html");
    window.close("")

}
