const avanca = document. queryselectorALL('.btn-proximo');

avanca.array.forEach(button = {
    button.addEventlistener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximopasso = 'passo-' + this.getAttribute('data-proximo');
   
    atual.classList.remove('ativo');
    document.getELementbyId(proximoPasso).classList.add('ativo')
    })
})