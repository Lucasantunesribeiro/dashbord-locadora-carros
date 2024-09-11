document.getElementById('create-user-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Simulação da resposta do servidor
    const mockResponse = {
        status: 'success', // ou 'error' para simular um erro
        message: 'Usuário criado com sucesso!' // ou mensagem de erro
    };

    // Simula um atraso como se estivesse aguardando a resposta do servidor
    setTimeout(() => {
        console.log('Resposta simulada do servidor:', mockResponse);

        if (mockResponse.status === 'success') {
            alert(mockResponse.message); // Exibir mensagem de sucesso
            window.location.href = '../index.html'; // Redirecionar para a página de login
        } else {
            alert(mockResponse.message); // Exibir mensagem de erro
            if (mockResponse.message === 'Este email já está cadastrado.') {
                window.location.href = '../index.html'; // Redirecionar para login se o email já estiver cadastrado
            }
        }
    }); // 1 segundo de atraso
});
