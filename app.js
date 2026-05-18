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

const readline = require('readline-sync');

function iniciarMenu() {
    console.log("=== BEM-VINDO AO SENAC PARK ===");
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n");

    let nome = readline.question("Digite o nome do cliente: ");

    if (nome == "") {
        console.log("Nome invalido. Reinicie o sistema.");
        return;
    }





}