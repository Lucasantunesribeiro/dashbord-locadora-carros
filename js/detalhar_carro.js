document.addEventListener('DOMContentLoaded', () => {
    const detalharCarroBtn = document.getElementById('detalharCarroBtn');
    const carroIdSelect = document.getElementById('carro_id');

    detalharCarroBtn.addEventListener('click', () => {
        const carroId = carroIdSelect.value;

        // Simulação da resposta do servidor para detalhes do carro
        const mockCarros = [
            {
                id: 1,
                modelo: 'Fusca',
                marca: 'Volkswagen',
                ano: '1970',
                cor: 'Azul',
                placa: 'ABC-1234',
                diaria: 50,
                disponibilidade: 'Disponível',
                aluguéis: [
                    {
                        data_inicio: '2024-01-01',
                        data_fim: '2024-01-05',
                        valor_total: 250
                    },
                    {
                        data_inicio: '2024-02-15',
                        data_fim: '2024-02-20',
                        valor_total: 300
                    }
                ]
            },
            {
                id: 2,
                modelo: 'Gol',
                marca: 'Volkswagen',
                ano: '2019',
                cor: 'Prata',
                placa: 'DEF-5678',
                diaria: 80,
                disponibilidade: 'Disponível',
                aluguéis: []
            },
            {
                id: 3,
                modelo: 'Civic',
                marca: 'Honda',
                ano: '2020',
                cor: 'Preto',
                placa: 'GHI-9012',
                diaria: 120,
                disponibilidade: 'Indisponível',
                aluguéis: []
            }
        ];

        // Encontrar o carro selecionado
        const carroSelecionado = mockCarros.find(carro => carro.id == carroId);

        // Simula um atraso como se estivesse aguardando a resposta do servidor
        setTimeout(() => {
            console.log('Resposta simulada do servidor:', carroSelecionado);

            if (!carroSelecionado) {
                alert('Carro não encontrado.');
            } else {
                exibirDetalhesDoCarro(carroSelecionado);
            }
        }); // 1 segundo de atraso
    });

    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function exibirDetalhesDoCarro(carro) {
        const container = document.getElementById('carroDetalhes');
        container.innerHTML = ''; // Limpar conteúdo anterior

        const detalhesHTML = `
            <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f2f2f2; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
                <h2 style="text-align: center; color: #333;">Informações do Carro</h2>
                <p><strong>Modelo:</strong> ${carro.modelo}</p>
                <p><strong>Marca:</strong> ${carro.marca}</p>
                <p><strong>Ano:</strong> ${carro.ano}</p>
                <p><strong>Cor:</strong> ${carro.cor}</p>
                <p><strong>Placa:</strong> ${carro.placa}</p>
                <p><strong>Diária:</strong> ${formatarMoeda(carro.diaria)}</p>
                <p><strong>Disponibilidade:</strong> ${carro.disponibilidade}</p>
                ${carro.aluguéis.length > 0 ? `
                    <h3>Histórico de Aluguéis</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <thead>
                            <tr>
                                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Data de Início</th>
                                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Data de Fim</th>
                                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Valor Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${carro.aluguéis.map(aluguel => `
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;">${aluguel.data_inicio}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">${aluguel.data_fim}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">${formatarMoeda(aluguel.valor_total)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                ` : '<p style="margin-top: 20px;">Este carro ainda não foi alugado.</p>'}
                <a href="home.html" style="display: block; text-align: center; margin-top: 20px; background-color: #333; color: #fff; padding: 10px; text-decoration: none; border-radius: 5px;">Voltar</a>
            </div>
        `;
        container.innerHTML = detalhesHTML;
    }

    // Preenche o seletor com os carros simulados
    const mockCarros = [
        { id: 1, modelo: 'Fusca', marca: 'Volkswagen' },
        { id: 2, modelo: 'Gol', marca: 'Volkswagen' },
        { id: 3, modelo: 'Civic', marca: 'Honda' }
    ];

    mockCarros.forEach(carro => {
        const option = document.createElement('option');
        option.value = carro.id;
        option.textContent = `${carro.modelo} - ${carro.marca}`;
        carroIdSelect.appendChild(option);
    });
});
