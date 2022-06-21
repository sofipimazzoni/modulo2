const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'curriculo.db';

app.use(express.static("../frontend/"));
 
app.use(express.json());
/* Definição dos endpoints do sistema*/

// CRUD - BANCO DE DADOS REVIRAR


// LUGARES QUE OS ASSISTIDOS JÁ FREQUENTARAM

// Insere um registro (é o C do CRUD - Create)
app.post('/eventosinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Eventos (Nome, Duração, Data, Local) VALUES (  '" + req.body.Nome + "','" + req.body.Duração + "','" + req.body.Data + "','" + req.body.Local + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/eventosdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM Eventos WHERE IDevento = '" + req.body.IDevento + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


// Visualisa um registro (é o R do CRUD - Read)
app.get('/eventosselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM Eventos ORDER BY IDevento COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});

app.listen(process.env.PORT, () => {
  console.log(`BD server running!`);
});
// prof, não coloquei o uptade, pois o nome, a duração, a data e o local de um evento que aconteceu não muda ao longo do tempo

