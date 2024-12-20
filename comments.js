// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Data
const comments = [
    { id: 1, comment: 'Hello world' },
    { id: 2, comment: 'Hello world 2' },
    { id: 3, comment: 'Hello world 3' }
];

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).send();
});

app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.status(204).send();
});

app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    const index = comments.indexOf(comment);
    comments[index] = req.body;
    res.status(204).send();
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});