document.getElementById('cep-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Limpa traços
    const loader = document.getElementById('loader');
    const erro = document.getElementById('erro');
    const resultado = document.getElementById('resultado');

    if (cep.length !== 8) {
        alert("CEP inválido! Use 8 números.");
        return;
    }

    // Reset de tela
    erro.classList.add('hidden');
    resultado.classList.add('hidden');
    loader.classList.remove('hidden');

    // Consumindo a API (Fetch)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            loader.classList.add('hidden');
            if (data.erro) {
                erro.classList.remove('hidden');
            } else {
                // Preenche os campos
                document.getElementById('rua').textContent = data.logradouro;
                document.getElementById('bairro').textContent = data.bairro;
                document.getElementById('cidade').textContent = `${data.localidade}/${data.uf}`;
                document.getElementById('ibge').textContent = data.ibge;
                
                resultado.classList.remove('hidden');
            }
        })
        .catch(() => {
            loader.classList.add('hidden');
            erro.classList.remove('hidden');
        });
});
