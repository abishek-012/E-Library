const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_PATH = path.join(__dirname, 'data', 'users.json');

app.use(cors());
app.use(express.json());

const readUsers = () => JSON.parse(fs.readFileSync(DATA_PATH));
const writeUsers = (data) => fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

app.get('/', (req, res) => {
    res.send('API is running!');
});

app.get('/api/users', (req, res) => {
    try {
        const users = readUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error reading users data.' });
    }
});

app.get('/api/users/:id', (req, res) => {
    const users = readUsers();
    const user = users.find((s) => s.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found.' });
    }
});

app.post('/api/users', (req, res) => {
    const users = readUsers();
    const newUser = { ...req.body, id: Date.now() };
    users.push(newUser);
    writeUsers(users);
    res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
    let users = readUsers();
    const id = parseInt(req.params.id);
    users = users.map((s) => (s.id === id ? { ...s, ...req.body } : s));
    writeUsers(users);
    res.json({ message: 'User details updated successfully.' });
});

app.delete('/api/users/:id', (req, res) => {
    let users = readUsers();
    users = users.filter((s) => s.id !== parseInt(req.params.id));
    writeUsers(users);
    res.json({ message: 'User deleted successfully.' });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
