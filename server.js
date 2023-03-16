const express = require('express');
const cors = require('cors');
const knex = require('knex');

const database = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Lacm99',
      database : 'Lester'
    }
});

database.select('*').from('productos').then(data => {
    console.log(data);
});



const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.post('/ingresar', (req, res) => {
    console.log("Yeap");
    const { code,
     } = req.body;
     console.log(code);
    /*database('productos').insert({
        codigo: code,
    })*/
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

