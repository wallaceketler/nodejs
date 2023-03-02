const fs = require("fs")
const util = require("util")


class Reader{

    constructor(){
         this.reader = util.promisify(fs.readFile) //transforma função de callback em função de promise
    }

    async Read(filepath){
        try{
            return await this.reader(filepath, "utf8")
        }catch(err){
            return undefined
        }
        
    }
}

module.exports = Reader