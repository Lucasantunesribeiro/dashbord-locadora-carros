document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const mockResponse = {
        status: 'success',
        message: 'Login bem-sucedido!',
        redirect: '../home.html' 
    };

    setTimeout(() => {
        console.log('Resposta simulada do servidor:', mockResponse); 

        if (mockResponse.status === 'success') {
            window.location.href = mockResponse.redirect || '../home.html';
        } else {
            alert(mockResponse.message); 
            if (mockResponse.redirect) {
                window.location.href = mockResponse.redirect;
            }
        }
    }); 
});
