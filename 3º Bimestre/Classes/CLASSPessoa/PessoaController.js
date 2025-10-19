let listaPessoas = [];

let pessoa = new Pessoa(123, "Rebeca", "2010-10-25", 1.65);
listaPessoas.push(pessoa);

pessoa = new Pessoa(124, "Sofia"," 2010-10-25", 1.65);
listaPessoas.push(pessoa);

pessoa = new Pessoa(125, "Lara"," 2010-10-25", 1.65);
listaPessoas.push(pessoa);

function listarPessoas(){
    let listagemPessoas = '';
    for(let i = 0; i<listaPessoas.length; i++){
        let pessoaAtual = listaPessoas[i];
        listagemPessoas += pessoaAtual.nome + '-' + pessoaAtual.cpf + '-' + pessoaAtual.dataNascimento + '<br>';

    }
    document.getElementById('pessoas').innerHTML = listagemPessoas;
 

}