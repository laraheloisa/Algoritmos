let listaCarros = [];

function adicionarCarroNaLista(){
    let placa = document.getElementById("inputPlaca").value;
    let modelo = document.getElementById("inputModelo").value;
    let marca = document.getElementById("inputMarca").value;
    let ano = document.getElementById("inputAno").value;

    const carro = {
        placa: placa,
        modelo: modelo,
        marca: marca,
        ano: ano,
    }

    listaCarros.push(carro);

    alert("Carro adicionado com sucesso!");

}

function mostrarListaDeCarros(){
    let listagemCarros = '';
    for(let i = 0; i < listaCarros.length ; i++){
        let carroAtual = listaCarros[i];
        listagemCarros += carroAtual.placa + '-' + carroAtual.modelo + '-' + carroAtual.marca + '-' + carroAtual.ano +  '<br>';
    }
    document.getElementById('listaDeCarros').innerHTML = listagemCarros;

}