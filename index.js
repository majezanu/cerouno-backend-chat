import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const env = process.env;
const app = express();

app.use(express.static('dist'));
app.set('views', './src/server/views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req,res)=>{
    res.render('home');
});



app.use((req,res,nex) => {
    res.status(404);
    res.send('404 - Not Found');
})

app.listen(env.PORT, (req, res) => {
    console.log(`Server running on port: ${env.PORT}`);
    console.log('Press Ctrl + C for stop server');
});