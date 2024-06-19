let estoque1 = 10, estoque2 = 10, estoque3 = 10, estoque4 = 10, estoque5 = 10, estoque6 = 10
function comprar1(){
     let quantidade = 0
     let valor = 0
     quantidade = Number(prompt("Quantas unidades desse item você deseja comprar?"))
     valor = quantidade * 100
         if(estoque1 < quantidade){
             alert("Não há essa quantidade disponível no estoque!")
         }
         if(quantidade <= 0){
             alert("Selecione uma quantidade válida para comprar.")
         }
         if(estoque1 >= quantidade && quantidade > 0){
             estoque1 = estoque1 - quantidade
             document.getElementById("qtdProduto").innerHTML = estoque1
         alert(`Você comprou ${quantidade} unidades desse item por R$ ${valor}!\n Agradecemos pela preferência.`)
         }
}

function comprar2(){
    let quantidade = 0
    let valor = 0
    quantidade = Number(prompt("Quantas unidades desse item você deseja comprar?"))
    valor = quantidade * 100
        if(estoque2 < quantidade){
            alert("Não há essa quantidade disponível no estoque!")
        }
        if(quantidade <= 0){
            alert("Selecione uma quantidade válida para comprar.")
        }
        if(estoque2 >= quantidade && quantidade > 0){
            estoque2 = estoque2 - quantidade
            document.getElementById("qtdProduto2").innerHTML = estoque2
        alert(`Você comprou ${quantidade} unidades desse item por R$ ${valor}!\n Agradecemos pela preferência.`)
        }
}

function comprar3(){
    let quantidade = 0
    let valor = 0
    quantidade = Number(prompt("Quantas unidades desse item você deseja comprar?"))
    valor = quantidade * 100
        if(estoque3 < quantidade){
            alert("Não há essa quantidade disponível no estoque!")
        }
        if(quantidade<= 0){
            alert("Selecione uma quantidade válida para comprar.")                                                 
        }
        if(estoque3 >= quantidade && quantidade > 0){
            estoque3 = estoque3 - quantidade
            document.getElementById("qtdProduto3").innerHTML = estoque3
            alert(`Você comprou ${quantidade} unidades desse item por R$ ${valor}!\n Agradecemos pela preferência.`)
        }
}

function comprar4(){
    let quantidade = 0
    let valor = 0
    quantidade = Number(prompt("Quantas unidades desse item você deseja comprar?"))
    valor = quantidade * 100
        if(estoque4 < quantidade){
            alert("Não há essa quantidade disponível no estoque!")
        }
        if(quantidade <= 0){
            alert("Selecione uma quantidade válida para comprar.")
        }
        if(estoque4 >= quantidade && quantidade > 0){
            estoque4 = estoque4 - quantidade
            document.getElementById("qtdProduto4").innerHTML = estoque4
            alert(`Você comprou ${quantidade} unidades desse item por R$ ${valor}!\n Agradecemos pela preferência.`)
        }
}

function comprar5(){
    let quantidade = 0
    let valor = 0
    quantidade = Number(prompt("Quantas unidades desse item você deseja comprar?"))
    valor = quantidade * 100
        if(estoque5 < quantidade){
            alert("Não há essa quantidade disponível no estoque!")
        }
        if(quantidade <= 0){
            alert("Selecione uma quantidade válida para comprar.")
        }
        if(estoque5 >= quantidade && quantidade > 0){
            estoque5 = estoque5 - quantidade
            document.getElementById("qtdProduto5").innerHTML = estoque5
            alert(`Você comprou ${quantidade} unidades desse item por R$ ${valor}!\n Agradecemos pela preferência.`)
        }
}

function comprar6(){
    let quantidade = 0
    let valor = 0
    quantidade = Number(prompt("Quantas unidades desse item você deseja comprar?"))
    valor = quantidade * 100
        if(estoque5 < quantidade){
            alert("Não há essa quantidade disponível no estoque!")
        }
        if(quantidade <= 0){
            alert("Selecione uma quantidade válida para comprar.")
        }
        if(estoque6 >= quantidade && quantidade > 0){
            estoque6 = estoque6 - quantidade
            document.getElementById("qtdProduto6").innerHTML = estoque6
            alert(`Você comprou ${quantidade} unidades desse item por R$ ${valor}!\n Agradecemos pela preferência.`)
        }
}

function verificarLogin(){
     let usuDigitado = "",senhaDigitada = ""
     usuDigitado = document.getElementById("login").value;
     senhaDigitada = document.getElementById("senha").value;

     if(usuDigitado == "aluno" && senhaDigitada == "senai") {
     if(localStorage.getItem("usuarioLogado")){
         document.getElementById("senha").value = ""
         document.getElementById("login").value = ""

         }else{
         if(usuDigitado == "aluno" && senhaDigitada == "senai"){
            alert(`Login bem sucedido. Bem vindo(a)' ${usuDigitado}!`)
            let nome = usuDigitado
            localStorage.setItem("usuarioLogado", nome)
            window.location = "../projeto/loja.html"
            }
        }
        }else{
            alert(`O usuário: ${usuDigitado} não possui uma conta ainda!`)
        }
}

function sair(){
    localStorage.removeItem("usuarioLogado")
    alert("Você saiu da sua conta.")
    }

function verificaDados(pdt){
    if(localStorage.getItem("usuarioLogado")){
    let nome = localStorage.getItem("usuarioLogado")
    if(nome != ""){
    let produtoEscolhido = pdt
    switch(produtoEscolhido){
        case 1:
            comprar1();
        break;

        case 2:
            comprar2();
        break;

        case 3:
            comprar3();
        break;

        case 4:
            comprar4();
        break;

        case 5:
            comprar5();
        break

        case 6:
            comprar6();
        break;

        default:
            alert("não temos este produto");
        }
    }
    }else{
    window.location.href ="cadastro.html"
    }
}