document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('carros-form');
    const table = document.getElementById('carros-table').getElementsByTagName('tbody')[0];
    const paginationDiv = document.getElementById('pagination');
    const paginationOptionsDiv = document.getElementById('pagination-options');
    const paginationCheckbox = document.getElementById('use_pagination');

    function fetchCarros() {
        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData).toString();

        // Simulação da resposta do servidor
        const mockResponse = {
            carros: [
                {
                    id: 1,
                    modelo: 'Fusca',
                    marca: 'Volkswagen',
                    ano: '1970',
                    cor: 'Azul',
                    placa: 'ABC-1234',
                    diaria: 100.00,
                    disponibilidade: 'Disponível'
                },
                {
                    id: 2,
                    modelo: 'Civic',
                    marca: 'Honda',
                    ano: '2022',
                    cor: 'Preto',
                    placa: 'XYZ-5678',
                    diaria: 150.00,
                    disponibilidade: 'Indisponível'
                }
            ],
            totalPaginas: 3 // Total de páginas para a paginação
        };

        // Simula um atraso como se estivesse aguardando a resposta do servidor
        setTimeout(() => {
            renderTable(mockResponse.carros);
            renderPagination(mockResponse.totalPaginas);
        }); // 1 segundo de atraso
    }

    function renderTable(carros) {
        table.innerHTML = ''; // Limpa a tabela existente
        carros.forEach(carro => {
            const row = table.insertRow();
            row.innerHTML = `
                <td>${carro.modelo}</td>
                <td>${carro.marca}</td>
                <td>${carro.ano}</td>
                <td>${carro.cor}</td>
                <td>${carro.placa}</td>
                <td>R$ ${parseFloat(carro.diaria).toFixed(2).replace('.', ',')}</td>
                <td>${carro.disponibilidade}</td>
                <td>${carro.id}</td>
            `;
        });
    }

    function renderPagination(totalPaginas) {
        paginationDiv.innerHTML = '';
        const formData = new FormData(form);
        const params = new URLSearchParams(formData);
    
        // Obtém o número da página atual ou define como 1 se não estiver presente
        const currentPage = parseInt(params.get('pagina')) || 1;
    
        // Remove o parâmetro de página atual para evitar duplicações
        params.delete('pagina');
    
        for (let i = 1; i <= totalPaginas; i++) {
            const link = document.createElement('a');
            link.href = `?pagina=${i}&${params.toString()}`; // Monta a URL com a nova página e parâmetros restantes
            link.textContent = i;
            link.className = (i === currentPage) ? 'active' : '';
            paginationDiv.appendChild(link);
        }
    }

    function togglePaginationOptions() {
        paginationOptionsDiv.style.display = paginationCheckbox.checked ? 'block' : 'none';
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        fetchCarros();
    });

    paginationCheckbox.addEventListener('change', function() {
        togglePaginationOptions();
        fetchCarros(); // Recarrega os carros para aplicar as alterações
    });

    togglePaginationOptions(); // Configura a exibição inicial com base no estado do checkbox
    fetchCarros(); // Carrega os carros ao iniciar a página
});
