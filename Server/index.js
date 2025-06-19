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

app.get("/api/login", async (req, res) => {
  const users = await Login.find();
  res.json(users);
});


app.post('/api/signup', async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    const existingUser = await Login.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new Login({ name, phone, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: 'Server error' });
  }
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
