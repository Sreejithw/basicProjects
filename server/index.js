const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crudTest");

app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(error))
});

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, req.body)
    .then(users => res.json(users))
    .catch(err => res.json(error))
});

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running');
});