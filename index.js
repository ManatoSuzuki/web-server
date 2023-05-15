const express = require('express')
const path = require("path")
const app = express()

// bodyを使えるようにする
app.use(express.urlencoded({ extended: false }));
// publicフォルダの静的なコンテンツを参照
app.use(express.static(path.join(__dirname, "public")))

// app.get('/', function (req, res) {
//     console.log(req);
//     res.send('<h1>トップページ！！</h1>')
// })

app.post('/api/v1/quiz', function (req, res) {
    // フォームの情報を受け取る
    const answer = req.body.answer;
    if(answer === "2") {
      // res.send("正解");
      res.redirect("/correct.html")
    } else {
      // res.send("不正解");
      res.redirect("/wrong.html")
    }
  });

app.get('/api/v1/users', function (req, res) {
    res.send({
        name: "Mike",
        age: 30
    });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("I am running!");
})