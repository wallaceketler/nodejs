function adminAuth(req,res,next){

    if(req.session.user != undefined){
        next() //permite que saia do middleware pra rota de destino
    }else{
        res.redirect("/login")
    }

}

module.exports = adminAuth