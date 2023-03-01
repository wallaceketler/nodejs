//criação de classe
class Filme{

    //parâmetros do construtor são opcionais por natureza em JS
    constructor(titulo, ano, genero, diretor, atores, duracao){

        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.diretor = diretor
        this.atores = atores
        this.duracao = duracao

    }

    Reproduzir(){
        console.log("Reproduzindo")
    }

    Pausar(){
        console.log("Pausando")
    }

    Avancar(){
        console.log("Avançando")
    }

    Fechar(){
        console.log("Fechando")
    }

    Ficha(){
        console.log("Título: " + this.titulo)
        console.log("Ano de lançamento: " + this.ano)
        console.log("Gênero: " + this.genero)
    }

    //métodos estáticos não precisam de instâncias para serem chamados
    static VisualizarFilmes(){}

}

//instanciação de objetos
var vingadores = new Filme()
var hulk = new Filme()
var starWars = new Filme()

//acessando os métodos e atributos
vingadores.Reproduzir()
vingadores.titulo = "Vingadores 2"
vingadores.ano = "2014"
vingadores.genero = "Ação"

//usando parâmetros do construtor
var parasita = new Filme("Parasita", 2020, "---", "---",[], "2h")
console.log(parasita) //print me retorna um json

parasita.Ficha()

Filme.VisualizarFilmes()