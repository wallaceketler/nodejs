const Processor = require("./Processor")
var Reader = require("./Reader")

var reader = new Reader()

async function main(){
    var data = await reader.Read("./arquivo.csv")
    Processor.Process(data)
    
}

main()