const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql");
var session = require("express-session");
const { request } = require("http");
const port = 2020;
const cors = require("cors");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodelogin",
});

const app = express();
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//middleware
app.use(express.json());

// ====================== Route ======================
var param = {};

app.post("/register", (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  const password2 = request.body.password2;

  if (password === password2) {
    connection.query(
      "INSERT INTO accounts (username,password) values (?, ?)",
      [username, password],
      function (error, result) {
        console.log(result);
        response.send(result);
      }
    );
  } else {
    param.message = "Password did not match.";
    response.send(param);
  }
});

app.post("/login", (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  if (username && password) {
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = username;
          response.send({
            token: "thisistoken",
          });
        } else {
          param.error = error;
          param.message = "Invalid username or password.";
          response.send(param);
        }
        response.end();
      }
    );
  } else {
    param.error = true;
    param.message = "Please login to view this page";
    response.send(param);
    response.end();
  }
});

app.get("/logout", function (request, response) {
  request.session.loggedin = false;
  request.session.destroy;
  response.redirect("/login");
});

app.listen(port);
