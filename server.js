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
