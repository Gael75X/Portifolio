const botaoMostraProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

document.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    botaoMostraProjetos.classList.add('remover')
});