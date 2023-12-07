
let jogada = 0;

let estadoCasa1 = 0;
let estadoCasa2 = 0;
let estadoCasa3 = 0;
let estadoCasa4 = 0;
let estadoCasa5 = 0;
let estadoCasa6 = 0;
let estadoCasa7 = 0;
let estadoCasa8 = 0;
let estadoCasa9 = 0;




function ativaJogada(event) {

    if ( jogada % 2 === 0 ) {
        let idElementoClicado = event.target.id;
        console.log("a variavel idElementoClicado é: " + idElementoClicado)
        // Determina qual casa foi clicada e atualiza o estado booleano correspondente
        switch (idElementoClicado) {
            case "casa_1":
                estadoCasa1 = 1; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador1");
                console.log("Estado da Casa 1: " + estadoCasa1);
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_2":
                estadoCasa2 = 1; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador1");
                console.log("Estado da Casa 2: " + estadoCasa2);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_3":
                estadoCasa3 = 1; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador1");
                console.log("Estado da Casa 3: " + estadoCasa3);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_4":
                estadoCasa4 = 1; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador1");
                console.log("Estado da Casa 4: " + estadoCasa4);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_5":
                estadoCasa5 = 1; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador1");
                console.log("Estado da Casa 5: " + estadoCasa5);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_6":
                estadoCasa6 = 1; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador1");
                console.log("Estado da Casa 6: " + estadoCasa6);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_7":
                estadoCasa7 = 1; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador1");
                console.log("Estado da Casa 7: " + estadoCasa7);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_8":
                estadoCasa8 = 1; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador1");
                console.log("Estado da Casa 8: " + estadoCasa8);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_9":
                estadoCasa9 = 1; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador1");
                console.log("Estado da Casa 9: " + estadoCasa9);                
                console.log("o valor de jogada é: " + jogada);
                break;
            default:
                console.log("Elemento desconhecido clicado");
                break;
        }
    } else {
               let idElementoClicado = event.target.id;
        // Determina qual casa foi clicada e atualiza o estado booleano correspondente
        switch (idElementoClicado) {
            case "casa_1":
                estadoCasa1 = 2; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador2");
                console.log("Estado da Casa 1: " + estadoCasa1);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_2":
                estadoCasa2 = 2; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador2");
                console.log("Estado da Casa 2: " + estadoCasa2);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_3":
                estadoCasa3 = 2; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador2");
                console.log("Estado da Casa 3: " + estadoCasa3);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_4":
                estadoCasa4 = 2; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador2");
                console.log("Estado da Casa 4: " + estadoCasa4);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_5":
                estadoCasa5 = 2; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador2");
                console.log("Estado da Casa 5: " + estadoCasa5);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_6":
                estadoCasa6 = 2; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador2");
                console.log("Estado da Casa 6: " + estadoCasa6);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_7":
                estadoCasa7 = 2; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador2");
                console.log("Estado da Casa 7: " + estadoCasa7);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_8":
                estadoCasa8 = 2; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador2");
                console.log("Estado da Casa 8: " + estadoCasa8);                
                console.log("o valor de jogada é: " + jogada);
                break;
            case "casa_9":
                estadoCasa9 = 2; // atribui o valor da casa para p jogador 1
                document.getElementById(idElementoClicado).classList.add("jogador2");
                console.log("Estado da Casa 9: " + estadoCasa9);                
                console.log("o valor de jogada é: " + jogada);
                break;
            default:
                console.log("Elemento desconhecido clicado");
                break;
        }
    }

    if (jogada >= 4) {
       if (
            (estadoCasa1 === 1 && estadoCasa2 === 1 && estadoCasa3 === 1) ||
            (estadoCasa4 === 1 && estadoCasa5 === 1 && estadoCasa6 === 1) ||
            (estadoCasa7 === 1 && estadoCasa8 === 1 && estadoCasa9 === 1) ||
            (estadoCasa1 === 1 && estadoCasa4 === 1 && estadoCasa7 === 1) ||
            (estadoCasa2 === 1 && estadoCasa5 === 1 && estadoCasa8 === 1) ||
            (estadoCasa3 === 1 && estadoCasa6 === 1 && estadoCasa9 === 1) ||
            (estadoCasa1 === 1 && estadoCasa5 === 1 && estadoCasa9 === 1) ||
            (estadoCasa7 === 1 && estadoCasa5 === 1 && estadoCasa3 === 1)
        ) {
            // jogador 1 ganha
            // fim de jogo
           document.getElementById("resultado").innerText = "Jogador 1 ganhou!"
           
        } else if (
            (estadoCasa1 === 2 && estadoCasa2 === 2 && estadoCasa3 === 2) ||
            (estadoCasa4 === 2 && estadoCasa5 === 2 && estadoCasa6 === 2) ||
            (estadoCasa7 === 2 && estadoCasa8 === 2 && estadoCasa9 === 2) ||
            (estadoCasa1 === 2 && estadoCasa4 === 2 && estadoCasa7 === 2) ||
            (estadoCasa2 === 2 && estadoCasa5 === 2 && estadoCasa8 === 2) ||
            (estadoCasa3 === 2 && estadoCasa6 === 2 && estadoCasa9 === 2) ||
            (estadoCasa1 === 2 && estadoCasa5 === 2 && estadoCasa9 === 2) ||
            (estadoCasa7 === 2 && estadoCasa5 === 2 && estadoCasa3 === 2)
        ) {
            // jogador 2 ganha
            // fim de jogo
            document.getElementById("resultado").innerText = "Jogador 2 ganhou!"
        } if ( jogada == 8 ) {
            // empate
            // fim de jogo
            document.getElementById("resultado").innerText = "Deu velha!"
        } else {
            // segue o jogo

            jogada++;
        }

    } else {
        // segue o jogo

            jogada++;
    }

}


document.getElementById("casa_1").addEventListener("click", ativaJogada);
document.getElementById("casa_2").addEventListener("click", ativaJogada);
document.getElementById("casa_3").addEventListener("click", ativaJogada);
document.getElementById("casa_4").addEventListener("click", ativaJogada);
document.getElementById("casa_5").addEventListener("click", ativaJogada);
document.getElementById("casa_6").addEventListener("click", ativaJogada);
document.getElementById("casa_7").addEventListener("click", ativaJogada);
document.getElementById("casa_8").addEventListener("click", ativaJogada);
document.getElementById("casa_9").addEventListener("click", ativaJogada);
