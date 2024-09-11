document.addEventListener('DOMContentLoaded', () => {
    // Simulação da resposta do servidor para listar carros
    const mockListarCarros = {
        carros: [
            {
                id: 1,
                modelo: 'Fusca',
                marca: 'Volkswagen',
                ano: '1970',
                cor: 'Azul',
                placa: 'ABC-1234'
            },
            {
                id: 2,
                modelo: 'Civic',
                marca: 'Honda',
                ano: '2022',
                cor: 'Preto',
                placa: 'XYZ-5678'
            }
            // Adicione mais carros conforme necessário
        ]
    };

    // Simula um atraso como se estivesse aguardando a resposta do servidor
    setTimeout(() => {
        const tableBody = document.querySelector('#carros-table tbody');
        tableBody.innerHTML = ''; // Limpa o corpo da tabela

        if (mockListarCarros.carros) {
            mockListarCarros.carros.forEach(carro => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${carro.id}</td>
                    <td>${carro.modelo}</td>
                    <td>${carro.marca}</td>
                    <td>${carro.ano}</td>
                    <td>${carro.cor}</td>
                    <td>${carro.placa}</td>
                    <td><button class="btn-excluir" onclick="deletarCarro(${carro.id})">Excluir</button></td>
                `;
                tableBody.appendChild(row);
            });
        } else {
            console.error('Erro ao carregar os carros:', mockListarCarros);
        }
    }); // 1 segundo de atraso
});

function deletarCarro(id) {
    if (confirm('Tem certeza de que deseja excluir este carro?')) {
        // Simulação da resposta do servidor para exclusão de carro
        const mockDeletarCarro = {
            status: 'sucesso', // ou 'erro' para simular um erro
            mensagem: 'Carro deletado com sucesso!' // ou mensagem de erro
        };

        // Simula um atraso como se estivesse aguardando a resposta do servidor
        setTimeout(() => {
            console.log('Resposta simulada do servidor para exclusão:', mockDeletarCarro);

            if (mockDeletarCarro.status === 'sucesso') {
                alert(mockDeletarCarro.mensagem);
                window.location.reload(); // Recarrega a página para atualizar a lista de carros
            } else {
                alert('Erro: ' + mockDeletarCarro.mensagem);
            }
        }); // 1 segundo de atraso
    }
}
