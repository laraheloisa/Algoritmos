let listaAnimais = [];

function adicionarALista(){
    let id = document.getElementById("inputID").value;
    let nome = document.getElementById("inputNOME").value;
    let raca = document.getElementById("inputRACA").value;
    let dataNascimento = document.getElementById("inputDATA").value;
    let tutor = document.getElementById("inputTUTOR").value;

    const animal = {
        id: id,
        nome: nome,
        raca: raca,
        dataNascimento: dataNascimento,
        tutor: tutor,
    }

    listaAnimais.push(animal);
    alert('Animal inserido com sucesso!')
}

function mostrarAnimais(){
    let listagemAnimais = '';
    for(let i = 0; i < listaAnimais.length; i++){
        let animalAtual = listaAnimais[i];
        listagemAnimais += animalAtual.id + '-' + animalAtual.nome + '-' + animalAtual.raca + '-' + animalAtual.dataNascimento + '-' + animalAtual.tutor + '<br>';
    }

    document.getElementById('listaDeAnimais').innerHTML = listagemAnimais;
}

function procurarPorTutor(){
    
}