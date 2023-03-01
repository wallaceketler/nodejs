//Herança, na prática, é pouco usada para reaproveitamento de código
//Composição é muito mais útil para isso

class Animal{
    constructor(nome, idade, preco){
        this.nome = nome
        this.idade = idade
        this.preco = preco
    }

    ChecarEstoque(){
        return 10
    }

    MetodoQualquer(){
        console.log("Método da classe mãe")
    }
}

class Cachorro extends Animal{
    
    //podemos complementar o construtor
    constructor(nome, idade, preco, raca, peso){
        super(nome,idade,preco)
        this.raca = raca
        this.peso = peso
    }
    
    //podemos criar novos métodos que não tem em animal
    Latir(){
        console.log("AU")
    }
    //podemos alterar métodos existentes em animal
    ChecarEstoque(){
        return 20
    }
    //podemos complementar métodos existentes em animal
    MétodoQualquer(){
        super.MetodoQualquer()  //faz o que faria normalmente na classe mãe
        console.log("Extra que tem só na classe Cachorro")
    }

}

var dog = new Cachorro("Dog", 5, 250, "Fila", 30)

console.log(dog.ChecarEstoque())

//herança múltipla é permitida, mas não recomendada

class Labrador extends Cachorro{}