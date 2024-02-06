const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const sequelize = new Sequelize('database','username','password',{
    host : 'localhost',
    dialect: 'sqlite',
    storage: './Database/SQBooks.sqlite'
});
const Book = sequelize.define('book',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
sequelize.sync();

app.get('/books',(req,res) => {
    Book.findAll().then(books => {
        res.json(books);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/books/:id', (req,res) => {
    if (!book){
        res.status(404).send('Book not found');
    } else{
        res.json(book);
    }
}).catch(err => {
    res.status(500).send(err);
});
const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));