// const readline = require('readline-sync');

// function criarMenu(titulo, opcoes) {
//     while (true) {
//         console.log(`\n==============================`);
//         console.log(`    ${titulo.toUpperCase()}    `);
//         console.log(`==============================`);

//         opcoes.forEach((opt, index) => {
//             console.log(`${index + 1}. ${opt.texto}`);
//         });
//         console.log(`0. Sair`);
//         console.log(`==============================`);

//         const escolha = readline.question("Escolha uma opcao: ");

//         if (escolha === '0') {
//             console.log("Encerrando sistema...");
//             break;
//         }

//         const indice = parseInt(escolha) - 1;
//         const opcaoSelecionada = opcoes[indice];

//         if (opcaoSelecionada && typeof opcaoSelecionada.acao === 'function') {
//             opcaoSelecionada.acao(readline);
//         } else {
//             console.log("⚠️ Opcao invalida!");
//         }
//     }
// }

// module.exports = { criarMenu };

import readline from 'readline-sync';

// =================================================================
// DESAFIO: TOTEM MEGALODON
// Escreva seu algoritmo de validação e regras de negócio abaixo.
// =================================================================

function iniciarTotem() {
    console.log("=== BEM-VINDO AO TECHPARK ===");
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n");

    // EXEMPLO DE ENTRADA:
    // O readline.question() lê o que o usuário digita como TEXTO (String)
    let nome = readline.question("Digite o nome do cliente: ");

    // 1. FAÇA AQUI A VALIDAÇÃO DO NOME (Se está vazio)

    if (nome == "") {
        console.log("Nome invalido. Reinicie o sistema.");
    } else {
        console.log("Bem-vindo " + nome);
    }

    // =============================================================
    // DICA PARA OS PRÓXIMOS PASSOS:
    // Para ler números inteiros, use: readline.questionInt()
    // Para ler números decimais (altura), use: readline.questionFloat()
    // =============================================================

    // 2. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA IDADE
    let idade = readline.questionInt("Digite a idade do cliente: ");

    if (idade <= 0) {
        console.log("Idade invalida. Reinicie o sistema.");
        return;
    } else {
        console.log("Sua idade é: " + idade + " . Você pode curtir a Montanha!")
    }

    // 3. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA ALTURA
    let altura = readline.questionInt("Digite a altura do cliente: ");

    if (altura <= 0) {
        console.log("altura invalida. Reinicie o sistema.");
        return;
    } else {
        console.log("Sua altura é: " + altura + " . Você pode curtir a Montanha!")
    }

    // 4. DIGITE ABAIXO AS REGRAS DE NEGÓCIO (SE / SENÃO) DELINEADAS NO GUIA


}

// Executa o sistema do totem
iniciarTotem();
