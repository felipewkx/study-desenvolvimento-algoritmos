
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
        console.log("Sua idade é: " + idade + " anos.")
    }

    // 3. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA ALTURA
    let alturaDigitada = readline.question("Digite a altura do cliente: ");
    let altura = parseFloat(alturaDigitada.replace(',', '.'));

    // Correção para valores tipo 170
    if (altura >= 100) {
        altura = altura / 100;
    }

    if (altura <= 0) {
        console.log("altura invalida. Reinicie o sistema.");
        return;
    } else {
        console.log("Sua altura é: " + altura + "m.")
    }


    // PROBLEMA CARDÍACO

    let cardiaco = readline.question("Voce tem problemas cardiacos? (sim/nao): ");
    let temProblema = (cardiaco === 'sim' || cardiaco === 's');

    if (!(cardiaco === "sim" || cardiaco === "s" || cardiaco === "nao" || cardiaco === "n")) {
        console.log("Resposta inválida.");
        return;
    }


    // 4. DIGITE ABAIXO AS REGRAS DE NEGÓCIO (SE / SENÃO) DELINEADAS NO GUIA
    // **Acesso Permitido (Sucesso):**
    //    * *Critério:* Cumpriu a idade mínima e a altura mínima.
    //    * *Mensagem:* `"Olá, [Nome]! Cadastro validado com sucesso. Seu acesso foi PERMITIDO. Divirta-se na MegaloDon!"`
    // 2. **Bloqueio apenas por Idade:**
    //    * *Critério:* Tem a altura necessária (>= 1.50), mas não tem a idade necessária (< 12).
    //    * *Mensagem:* `"[ACESSO NEGADO] - [Nome], você possui a altura necessária, mas não atingiu a idade mínima de 12 anos."`
    // 3. **Bloqueio apenas por Altura:**
    //    * *Critério:* Tem a idade necessária (>= 12), mas não tem a altura necessária (< 1.50).
    //    * *Mensagem:* `"[ACESSO NEGADO] - [Nome], você possui a idade necessária, mas não atingiu a altura mínima de 1.50m."`
    // 4. **Bloqueio por Ambos os Motivos:**
    //    * *Critério:* Não tem nem a idade (< 12) e nem a altura (< 1.50).
    //    * *Mensagem:* `"[ACESSO NEGADO] - [Nome], o acesso foi recusado porque você não possui a idade mínima (12 anos) e nem a altura mínima (1.50m)."`

    // 4. DIGITE ABAIXO AS REGRAS DE NEGÓCIO (SE / SENÃO) DELINEADAS NO GUIA

    if (temProblema) {
        console.log("Acesso negado: Risco cardíaco. Pela sua segurança, você não pode prosseguir!");
        return;
    }

    if (idade >= 12 && altura >= 1.50) {
        console.log("Olá, " + nome + "! Cadastro validado com sucesso! Você se registrou com " + altura + "m de altura\ne com " + idade + " anos de idade, portanto, seu acesso foi PERMITIDO! Divirta-se na MegaloDon!")
    }


    if (altura >= 1.50 && idade < 12) {
        console.log("[ACESSO NEGADO] - " + nome + ", você possui a altura necessária, mas não atingiu a idade mínima de 12 anos.");
    }


    if (idade >= 12 && altura < 1.50) {
        console.log("[ACESSO NEGADO] - " + nome + ", você possui a idade necessária, mas não atingiu a altura mínima de 1.50m.");
    }

    if (idade < 12 && altura < 1.50) {
        console.log("[ACESSO NEGADO] - " + nome + ", o acesso foi recusado porque você não possui a idade mínima (12 anos) e nem a altura mínima (1.50m).");
    }


}

// Executa o sistema do totem
iniciarTotem();
