function changeInput(type, element) {
    const input = document.getElementById('dynamic-input');
    input.type = type;

    // Alterar o placeholder de acordo com o tipo
    switch(type) {
        case 'tel':
            input.placeholder = 'Digite seu telefone...';
            break;
        case 'text':
            input.placeholder = 'Digite sua mensagem...';
            break;
        case 'email':
            input.placeholder = 'Digite seu email...';
            break;
    }

    // Remover a classe 'active' de todos os links
    const links = document.querySelectorAll('.submenu a');
    links.forEach(link => {
        link.classList.remove('active');
        link.style.color = '#fff'; // Retorna todos os links à cor branca
    });

    // Adicionar a classe 'active' ao link clicado
    element.classList.add('active');
    element.style.color = 'orange'; // Mantém a cor laranja no link ativo
}
