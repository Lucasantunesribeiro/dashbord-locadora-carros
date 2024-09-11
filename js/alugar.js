document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('aluguel-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        // Simulação da resposta do servidor
        const mockResponse = {
            success: true, // ou false para simular um erro
            message: 'Aluguel realizado com sucesso!'
        };

        // Simula um atraso como se estivesse aguardando a resposta do servidor
        setTimeout(() => {
            console.log('Resposta simulada do servidor:', mockResponse);

            if (mockResponse.success) {
                alert(mockResponse.message);
                form.reset();
            } else {
                alert('Erro: ' + mockResponse.message);
            }
        }); // 1 segundo de atraso
    });
});
