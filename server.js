const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function (req, res) {
  return res.render("home", { items: recipes })
})

server.get("/sobre", function (req, res) {
  return res.render("sobre")
})

server.get("/recipes", function(req, res) {
  return res.render("recipes", { items : recipes })
})

server.get("/recipes/:index", function (req, res) {

console.log(recipeData = [...recipes]) // Array de receitas carregadas do data.js
const recipeIndex = req.params.index
console.log(recipe = recipeData[recipeIndex])

return res.render('recipe', { items: recipe } )
})

server.listen(5000, function () {
  console.log("Server is running")
})