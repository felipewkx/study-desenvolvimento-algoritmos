import readline from 'readline-sync';

// =================================================================
// DESAFIO: TOTEM MEGALODON
// Escreva seu algoritmo de validação e regras de negócio abaixo.
// =================================================================

function iniciarTotem() {
    console.clear();
    console.log("=== BEM-VINDO AO TECHPARK ===");
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n");

    // EXEMPLO DE ENTRADA:
    // O readline.question() lê o que o usuário digita como TEXTO (String)

    // 1. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DO NOME
    let nome;
    let regexLetras = /^[A-Za-zÀ-ÿ\s]+$/; // Aceita letras, acentos e espaços

    while (true) {
        nome = readline.question("Digite o nome do cliente: ").trim();

        if (!nome || !regexLetras.test(nome)) {
            console.log("Nome inválido! Digite apenas letras. Tente novamente.\n");
        } else {
            console.log("\nBem-vindo " + nome + "!");
            break; // Sai do laço se o nome for válido
        }
    }

    // =============================================================
    // DICA PARA OS PRÓXIMOS PASSOS:
    // Para ler números inteiros, use: readline.questionInt()
    // Para ler números decimais (altura), use: readline.questionFloat()
    // =============================================================

    // 2. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA IDADE
    readline.question("\nPressione ENTER para continuar...");
    console.clear();

    let idade;

    while (true) {
        idade = readline.questionInt("Digite a idade do cliente: ", {
            limitMessage: "Idade invalida! A idade deve ser maior que zero.\n"
        });

        if (idade <= 0) {
            console.log("Idade invalida! A idade deve ser maior que zero.\n");
        } else {
            console.log("\nOk, você tem: " + idade + " anos de idade.");
            break;
        }
    }

    // 3. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA ALTURA
    readline.question("\nPressione ENTER para continuar...");
    console.clear();

    let alturaDigitada = readline.question("Digite a altura do cliente: ");
    let altura = parseFloat(alturaDigitada.replace(',', '.')); // Correção para valores tipo 170

    if (altura >= 100) {
        altura = altura / 100;
    }

    if (altura <= 0) {
        console.log("Altura invalida! Reinicie o sistema.");
        return;
    } else {
        console.log("\nOk, você tem: " + altura + "m de altura.");
    }

    // PROBLEMA CARDÍACO
    readline.question("\nPressione ENTER para continuar...");
    console.clear();

    let cardiaco = readline.question("Voce tem problemas cardiacos? (s/n): ").toLowerCase();
    let temProblema = (cardiaco === 'sim' || cardiaco === 's');

    if (!(cardiaco === "sim" || cardiaco === "s" || cardiaco === "nao" || cardiaco === "n")) {
        console.log("Resposta inválida.");
        return;
    }

    // 4. DIGITE ABAIXO AS REGRAS DE NEGÓCIO (SE / SENÃO) DELINEADAS NO GUIA

    console.clear();

    if (temProblema) {
        console.log("[ACESSO NEGADO] Risco cardíaco. Pela sua segurança, você não pode prosseguir!");
        return;
    }

    if (idade >= 12 && altura >= 1.50) {
        console.log("Olá, " + nome + "!\n[CADASTRO REALIZADO COM SUCESSO]\nVocê se registrou com:\n" + altura + "m de altura,\n" + idade + " anos de idade,\ne Sem Problemas Cardiacos!\nPortanto, seu acesso foi PERMITIDO! Divirta-se na MegaloDon!");
    }

    if (altura >= 1.50 && idade < 12) {
        console.log("[ACESSO NEGADO] - " + nome + ". Você possui a altura necessária, mas não atingiu a idade mínima de 12 anos.");
    }

    if (idade >= 12 && altura < 1.50) {
        console.log("[ACESSO NEGADO] - " + nome + ". Você possui a idade necessária, mas não atingiu a altura mínima de 1.50m.");
    }

    if (idade < 12 && altura < 1.50) {
        console.log("[ACESSO NEGADO] - " + nome + ". O acesso foi recusado porque você não possui a idade mínima (12 anos) e nem a altura mínima (1.50m).");
    }
}

// Executa o sistema do totem
iniciarTotem();
