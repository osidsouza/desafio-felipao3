// Classe que representa o ataque de um herói
class Ataque {
    constructor(tipo) {
        this.tipo = tipo;
    }

    descricao() {
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                return 'magia';
            case 'guerreiro':
                return 'espada';
            case 'monge':
                return 'artes marciais';
            case 'ninja':
                return 'shuriken';
            default:
                return 'ataque desconhecido';
        }
    }
}

// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = new Ataque(tipo);
    }

    atacar() {
        const ataqueDescricao = this.ataque.descricao();
        console.log(`O ${this.tipo} atacou usando ${ataqueDescricao}.`);
    }
}

// Classe que gerencia as partidas ranqueadas
class Partida {
    constructor() {
        this.vitorias = 0;
        this.derrotas = 0;
    }

    adicionarVitoria() {
        this.vitorias++;
    }

    adicionarDerrota() {
        this.derrotas++;
    }

    calcularSaldo() {
        return this.vitorias - this.derrotas;
    }

    determinarNivel() {
        const vitorias = this.vitorias;
        if (vitorias < 10) return "Ferro";
        if (vitorias >= 11 && vitorias <= 20) return "Bronze";
        if (vitorias >= 21 && vitorias <= 50) return "Prata";
        if (vitorias >= 51 && vitorias <= 80) return "Ouro";
        if (vitorias >= 81 && vitorias <= 90) return "Diamante";
        if (vitorias >= 91 && vitorias <= 100) return "Lendário";
        return "Imortal";
    }
}

// Classe principal que orquestra o programa
class Main {
    constructor() {
        this.partida = new Partida();
        this.heroi = null;
    }

    iniciar() {
        this.criarHeroi();
        this.simularPartidas();
        this.exibirResultado();
    }

    criarHeroi() {
        const nome = 'Gandalf'; // Exemplo de nome
        const idade = 100; // Exemplo de idade
        const tipo = 'mago'; // Exemplo de tipo
        this.heroi = new Heroi(nome, idade, tipo);
    }

    simularPartidas() {
        // Simulando vitórias e derrotas
        this.partida.adicionarVitoria();
        this.partida.adicionarVitoria();
        this.partida.adicionarDerrota();
        this.partida.adicionarVitoria();
    }

    exibirResultado() {
        const saldoVitorias = this.partida.calcularSaldo();
        const nivel = this.partida.determinarNivel();
        console.log(`O Herói ${this.heroi.nome} tem um saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}.`);
        this.heroi.atacar(); // Exibe a mensagem de ataque do herói
    }
}

// Execução do programa
const app = new Main();
app.iniciar();
