const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/get-ngrok-url', (req, res) => {
    const ngrokUrl = process.env.CURRENT_NGROK_URL;

    if (ngrokUrl) {
        res.type('text/plain');
        res.send(ngrokUrl);
    } else {
        res.status(500).send('Ngrok URL not configured.');
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Redirector app listening on port ${PORT}`);
});