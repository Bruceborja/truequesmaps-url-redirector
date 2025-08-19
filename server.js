    1     const express = require('express');
    2     const app = express();
    3     const cors = require('cors');
    4 
    5     app.use(cors({
    6         origin: '*',
    7         methods: ['GET'],
    8         allowedHeaders: ['Content-Type'],
    9     }));
   10 
   11     app.get('/get-ngrok-url', (req, res) => {
   12         const ngrokUrl = process.env.CURRENT_NGROK_URL;
   13 
   14         if (ngrokUrl) {
   15             res.type('text/plain');
   16             res.send(ngrokUrl);
   17         } else {
   18             res.status(500).send('Ngrok URL not configured.');
   19         }
   20     });
   21 
   22     const PORT = process.env.PORT || 10000;
   23     app.listen(PORT, () => {
   24         console.log(`Redirector app listening on port ${PORT}`);
   25     });
