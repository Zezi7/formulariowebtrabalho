function submitForm() {
}

let generoCor = document.getElementsByName('genero');
for (let i = 0; i < generoCor.length; i++) {
    generoCor[i].addEventListener('change', function() {
        
        let corpo = document.getElementById('corpo');
        if (this.value === 'masculino') {
            corpo.classList.remove('cor-rosa');
            corpo.classList.add('cor-azul');
        } else if (this.value === 'feminino') {
            corpo.classList.remove('cor-azul');
            corpo.classList.add('cor-rosa');
        } else 
        {
            
            corpo.classList.remove('cor-azul', 'cor-rosa');
        }
    });
}


