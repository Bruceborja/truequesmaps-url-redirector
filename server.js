const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/get-ngrok-url', (req, res) => {
    let ngrokUrl = process.env.CURRENT_NGROK_URL;
    // Añadir https:// si no está presente
    if (ngrokUrl && !ngrokUrl.startsWith('https://') && !ngrokUrl.startsWith('http://')) {
        ngrokUrl = 'https://' + ngrokUrl;
    }
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
