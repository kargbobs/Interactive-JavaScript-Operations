const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Mock user data
const users = [
  {
    username: 'user1',
    password: '$2a$10$Z3i5LOwAyQGgOMQjEg5OLeId73RWpZ.lQTmfUu8ejFToKtqgx7dGm', // hashed password 'password123'
  },
];

const expenses = [
  // Mock expenses data
];

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// User Authentication
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
});

// Manage Expenses
app.get('/api/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/api/expenses', (req, res) => {
  const { description, amount } = req.body;
  const newExpense = { id: expenses.length + 1, description, amount };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

app.put('/api/expenses/:id', (req, res) => {
  const { id } = req.params;
  const { description, amount } = req.body;
  const expense = expenses.find(e => e.id === parseInt(id));
  
  if (!expense) return res.status(404).json({ message: 'Expense not found' });
  
  expense.description = description;
  expense.amount = amount;
  res.json(expense);
});

app.delete('/api/expenses/:id', (req, res) => {
  const { id } = req.params;
  const index = expenses.findIndex(e => e.id === parseInt(id));
  
  if (index === -1) return res.status(404).json({ message: 'Expense not found' });
  
  expenses.splice(index, 1);
  res.status(204).end();
});

app.get('/api/expense', (req, res) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  res.json({ total });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  