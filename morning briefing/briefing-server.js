const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS Konfiguration
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-api-key']
}));

app.use(express.json());

// Statische Dateien servieren
app.use(express.static(__dirname));

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'morning-briefing-with-server.html'));
});

const PORT = 3000;

app.post('/api/briefing', async (req, res) => {
    const { apiKey, stocks, prompt } = req.body;

    if (!apiKey) {
        return res.status(400).json({ error: 'API-Key erforderlich' });
    }

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-opus-4-1',
                max_tokens: 2000,
                messages: [
                    { role: 'user', content: prompt }
                ],
                tools: [
                    {
                        type: 'web_search_20250305',
                        name: 'web_search'
                    }
                ]
            })
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`API-Fehler: ${response.status} - ${error}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
    console.log(`📊 Morning Briefing API verfügbar unter: http://localhost:${PORT}/api/briefing`);
});
