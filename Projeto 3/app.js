const Processor = require("./Processor")
const Reader = require("./Reader")
const Table = require("./Table")
const HTMLParser = require("./HTMLParser")
const Writer = require("./Writer")
const PDFWriter = require("./PDFWriter")

var reader = new Reader()
var writer = new Writer()

async function main(){
    var data = await reader.Read("./arquivo.csv")
    var processedData = Processor.Process(data)
    var usuarios = new Table(processedData)
    var html = await HTMLParser.Parse(usuarios)

    //exemplo de composição, usamos classe HTMLParser em outras duas
    writer.Write("htmlgerado.html", html)
    PDFWriter.WritePDF("pdfgerado.pdf", html)
}

main()