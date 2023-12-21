const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"))

mongoose.connect(process.env.MONGO_URL);

// mongosh "/" --apiVersion 1 --username rahoolitis
const schema={
  name:String
}
const Task=mongoose.model("Task",schema);


var allTasks=[];
let aid;

const getTasks = async function(){
   const res = await Task.find({});
  //  console.log(res)
   allTasks=[...res];
}

const deleteIt = async function(){
   const res = await Task.deleteOne({_id:aid});
   getTasks();
  //  console.log(typeof(aid))
  //  allTasks=[...res];
}



// const getTasks = async function(){
//   const res = await Task.find({});
//   allTasks.push(res.name)
  
// }

let day = date.getDate();


app.get("/", (req, res) => {
  // console.log(day);
  getTasks();
  setTimeout(() => {

    res.render("list", { all: allTasks,day:day });
  }, 50);

});

app.post("/", (req, res) => {
  var item = req.body.task;
  if(item==""){

  }
  else {

    const task= new Task({name:item});
    task.save();
   
  }

  res.redirect("/");
});

app.post("/delete",(req,res)=>{
   aid=req.body.aid;

   deleteIt();

    res.redirect("/");
})

app.get("/:listName",(req,res)=>{
  console.log(req.params.listName)
})

app.listen(3000, function () {
  console.log("server running at http://localhost:3000 ");
});
