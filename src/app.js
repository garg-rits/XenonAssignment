const express = require("express");
const path=require("path");
const app=express();
const hbs=require("hbs")

require("./db/conn");
// const Register=require("./models/registers")

const port = process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname, "../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
const contact_path=path.join(__dirname,"../templates/views")

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// console.log(path.join(__dirname,"../public"));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
hbs.registerPartials(contact_path);


app.get("/index", (req, res) => {
res.render("index")
});
app.get("/contact", (req, res) => {
res.render("contact")
});
app.get("/about", (req, res) => {
res.render("about")
});

// app.post("/index", async(req, res) => {
//     try{
//     //  console.log(req.body.userid);
//     //  alert(res.send(req.body.userid));
// //     const registerEmployee=newRegister({
// //         userid: req.body.userid,
// //         remail: req.body.remail,
// //         epass:  req.body.epass
// //     })
// //    const registered =await registerEmployee.save();
// //    res.status(201).render("index");

// //     }catch(error){
// //         res.status(400).send(error);
// //     }

// });

app.listen(port,() =>{
    console.log(`server is running at port no ${port}`);
});