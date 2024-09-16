document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;

    const carro = {
        marca: marca,
        modelo: modelo,
        ano: ano
    };

   
    let carros = JSON.parse(localStorage.getItem('carros')) || [];

   
    carros.push(carro);

    
    localStorage.setItem('carros', JSON.stringify(carros));

   
    console.log('Carros armazenados:', carros);

    exibirCarros(carros);
});

function exibirCarros(carros) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (carros.length === 0) {
        resultadoDiv.innerText = 'Nenhum carro cadastrado.';
        return;
    }

    carros.forEach((carro, index) => {
        resultadoDiv.innerHTML += `Carro ${index + 1}: ${carro.marca} ${carro.modelo}, Ano: ${carro.ano}<br>`;
    });
}

window.onload = function() {
    const carros = JSON.parse(localStorage.getItem('carros')) || [];
    exibirCarros(carros);
};