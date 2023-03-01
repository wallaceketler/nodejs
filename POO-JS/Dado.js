class Dado{

    constructor(faces){
        this.faces = faces
    }

    Rolar(){
        console.log(Math.floor(Math.random() * (this.faces)) + 1)
    }
}

var dado6 = new Dado(6)
dado6.Rolar()

var dado100 = new Dado(100)
dado100.Rolar()