class Table{

    constructor(arr){
        this.header = arr[0]
        arr.shift() // método que remove primeiro elemento do array
        this.rows = arr
    }

    //campo virtual
    get RowCount(){ //método do tipo get tem que retornar algo obrigatoriamente
        return this.rows.length
    }

    get ColumnCount(){
        return this.header.length
    }


}


module.exports = Table