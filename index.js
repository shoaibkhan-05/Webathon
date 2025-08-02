const express =  require("express");
const app = express();
const path = require("path");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));



app.listen(8080,()=>{
  console.log("its is working on port 8080");
});  



app.get("/element1",async(req,res)=>{
  res.render("show.ejs");
});

app.get("/element2",async(req,res)=>{
  res.render("element2.ejs");
  

});

app.get("/element3",async(req,res)=>{
  res.render("element3.ejs");
  

});
app.get("/element4",async(req,res)=>{
  res.render("element4.ejs");
  

});