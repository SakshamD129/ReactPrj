import express from 'express';
const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
    res.send("Hello this is the backend main route or home route");
})
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Express backend!' });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
