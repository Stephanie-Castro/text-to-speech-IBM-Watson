import express from "express";
import "./database"; //import "./database/index";
import { routes } from "./routes";
import path from "path";
require('dotenv/config');

const app = express();


app.use(express.urlencoded({
    extended: true
  }));

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/index", (request, response) => {
    return response.render("html/index.html");
})

/*
    GET - buscas
    POST - criação
    PUT - alteração
    DELETE - deletar
    PATCH - alterar uma informação específica
*/

/*
app.get("/", (request, response) => {
    //return response.send("Hello World!");

    return response.json({
        message: "Hello World!"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message_english: "Hello World!",
        message_portuguese: "Olá Mundo!"
    });
});
*/

//app.use(express.static('public/audios'));

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT, () => console.log("Server is running on port " + process.env.PORT));

