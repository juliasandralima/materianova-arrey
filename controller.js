function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if (!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "aula2.html";

    }
}
    //FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY 
    var dadoslista = [];
    function salvarUser() {
        let nomeUser = document.getElementById("nomeUser").value;

        if (nomeUser) {
            dadoslista.push(nomeUser);
            criarLista();
            document.getElementById('nomeUser').value = '';
            
        }
    }
    // função para criar lista de usário
    function criarLista(){
        let tabela = document.getElementById('tabela').innerHTML =   "<tr><th>Nome Usuario</th><th>Ações</th></tr>";

        for(let i = 0;i<= (dadoslista.length - 1);i++){
            tabela += "<tr><td>" + dadoslista[i] + "</td><td><button class='btn btn-success' onclick='editar(thais.paranNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick=''>Excluir</button></td></tr>";
            document.getElementById('tabela').innerHTML = tabela; 
        }
    }
    //FUNÇÃO PARA EDITAR NOME
    function editar(i){
        document.getElementById('nomeUser').value = dadoslita[(i - 1)];
        dadoslista.splice(dadoslista[(i -1)],1);
    }
    //FUNÇÃO PARA EXCLUIR NOME 
    function excluir(i){
        dadoslista.splice((i  - 1), 1);
        document.getElementById('tabela').daleterow(i);
    }