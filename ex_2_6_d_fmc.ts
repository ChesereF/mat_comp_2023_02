class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
class Estudante extends Pessoa {
    faculdade: string;
    curso: string;

    constructor(nome: string, idade: number, faculdade: string, curso: string) {
        super(nome, idade);
        this.faculdade = faculdade;
        this.curso = curso;
    }

    saudacao(): string {
        return `${super.saudacao()} Estou estudando na ${this.faculdade} no curso de ${this.curso}.`;
    }
}
const estudante1 = new Estudante("Franciele", 24, "FATEC Jacarei", "DSM");
console.log(estudante1.saudacao());
