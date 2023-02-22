const express = require("express")
const router = express.Router()
const User = require("./User")
const bcrypt = require("bcryptjs")
const adminAuth = require("../middlewares/adminAuth")//middleware de auth rota privada


router.get("/admin/users", adminAuth, (req,res)=>{

    User.findAll().then((users)=>{
        res.render("admin/users/index",{users:users})
        
    })
})

router.get("/admin/users/create", adminAuth, (req,res)=>{
    res.render("admin/users/create")
})

router.post("/users/create", (req,res)=>{
    var email = req.body.email
    var password = req.body.password

    User.findOne({where:{email:email}}).then((user)=>{
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10) //incremento na hash para ficar mais seguro
            var hash = bcrypt.hashSync(password, salt) //retorna hash
        
            User.create({
                email: email,
                password: hash
            }).then(()=>{
                res.redirect("/")
            }).catch((error)=>{
                res.redirect("/")
            })
        }else{
            res.redirect("/admin/users/create")
        }
    })
})


router.get("/login",(req,res)=>{
    res.render("admin/users/login")
})

router.post("/authenticate",(req,res)=>{

    var email = req.body.email
    var password = req.body.password

    User.findOne({where:{email:email}}).then((user)=>{
        if(user != undefined){

            //transforma senha inserida com hash e compara com a salva no database
            var correct = bcrypt.compareSync(password, user.password)

            if(correct){
                //crio sessão para usuário
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect("/admin/articles")

            }else{
                res.redirect("/login")
            }

        }else{
            res.redirect("/login")
        }
    })

})

router.get("/logout",(req,res)=>{
    req.session.user = undefined
    res.redirect("/")
})

module.exports = router

