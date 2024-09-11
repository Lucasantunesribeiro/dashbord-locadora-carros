document.getElementById('create-car-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulação da resposta do servidor
    const mockResponse = {
        success: true, // ou false para simular um erro
        message: 'Carro criado com sucesso!'
    };

    // Simula um atraso como se estivesse aguardando a resposta do servidor
    setTimeout(() => {
        console.log('Resposta simulada do servidor:', mockResponse);

        if (mockResponse.success) {
            alert(mockResponse.message);
            window.location.href = 'home.html'; // Redireciona após a criação
        } else {
            alert('Erro: ' + mockResponse.message);
        }
    }); // 1 segundo de atraso
});
