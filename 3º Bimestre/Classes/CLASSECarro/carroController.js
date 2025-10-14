listaCarros = []

function adicionarCarroNaLista(){
    let listagemCarros = '';
    for(i=0; i < listaCarros.length; i++){
        let carroAtual = listaCarros[i];
        carroAtual += carroAtual.placa + '-' + carroAtual.modelo + '-' + carroAtual.marca + '-' + carroAtual.ano +  '<br>';
    }
    document.getElementById('listadecarros').innerHTML = carroAtual;


}

function mostrarListaDeCarros(){

}