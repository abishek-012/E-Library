require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/Users');
const Login = require('./models/Login');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {console.log('Connected to MongoDB!');
})  
    .catch((error) => console.error('Error connecting to MongoDB:', error.message));


app.get('/', (req, res) => {
    res.send('API is running!');
});

app.get('/api/users', async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

app.get('/api/users/:id',async(req, res) => {
    const user = await User.findById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found.' });
});

app.get('/api/login/:id',async(req, res) => {
    const login = await Login.findById(req.params.id);
    if (login) res.json(login);
    else res.status(404).json({ message: 'User not found.' });
});

app.post('/api/users', async(req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully.', user : newUser });
});

app.put('/api/users/:id', async(req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'User updated successfully.' });
});

app.delete('/api/users/:id', async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully.' });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
