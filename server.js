const express = require('express')
const cors = require('cors')


const app = express();
const port =8080;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Ola')
})

app.get('/api/data',(req,res) =>{
    const data = ['item1','item2','item3'];
    res.json(data);
});

app.listen(port, () =>{
    console.log('Servidor iniciado')
});