const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'tenders_user',
  password: 'root',
  database: 'tenders'
});
const users = [];

app.get('/tenders/', (req, res) => {
    connection.connect('SELECT * FROM tenders;', 
    (err, data) => {
      if (!err) return res.status(500);
      res.json(data);
    })
  });
  app.get('/tenders/:id', function (req, res) {
    res.send(JSON.stringify(tenders.find((user) => user.id == req.params.id));
  });
  
connection.execute ("SELECT * FROM tenders", function (err, result){
    console.log(err);
    console.log(result);
});

