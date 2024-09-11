document.addEventListener('DOMContentLoaded', function() {
    // Simulação da resposta do servidor
    const mockResponse = [
        {
            id: 1,
            nome: 'João Silva',
            email: 'joao.silva@example.com'
        },
        {
            id: 2,
            nome: 'Maria Oliveira',
            email: 'maria.oliveira@example.com'
        },
        {
            id: 3,
            nome: 'Carlos Pereira',
            email: 'carlos.pereira@example.com'
        }
    ];

    // Simula um atraso como se estivesse aguardando a resposta do servidor
    setTimeout(() => {
        if (Array.isArray(mockResponse)) {
            const tbody = document.getElementById('user-table-body');
            tbody.innerHTML = mockResponse.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.nome}</td>
                    <td>${user.email}</td>
                </tr>
            `).join('');
        } else {
            console.error('Erro ao carregar dados dos usuários.');
        }
    }); // 1 segundo de atraso
});
