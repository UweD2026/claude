# 📈 Morning Briefing - Claude API Integration

Eine vollständige Lösung für dein Morning Briefing mit Live-Börsendaten via Claude AI und Web Search.

## ✅ Was du brauchst

- **Node.js** (v16+) - [Download](https://nodejs.org/)
- **Claude API Key** - [Hier holen](https://console.anthropic.com/)
- Ein moderner Browser (Chrome, Firefox, Safari, Edge)

## 🚀 Setup in 3 Schritten

### 1. Dependencies installieren
```bash
npm install
```

### 2. Node.js Server starten
```bash
npm start
```

Du solltest sehen:
```
🚀 Server läuft auf http://localhost:3000
📊 Morning Briefing API verfügbar unter: http://localhost:3000/api/briefing
```

### 3. HTML-Datei öffnen
Öffne `morning-briefing-with-server.html` in deinem Browser.

## 🔧 Konfiguration

### In der Browser-UI:
1. Klick "Einstellungen"
2. Gib deinen Claude API-Key ein (sk-ant-...)
3. Passe deine Aktien an (kommagetrennt): ZS, GOOG, CCJ, etc.
4. Server-URL: Standard ist `http://localhost:3000`
5. Klick "Speichern"

Deine Einstellungen werden lokal im Browser gespeichert.

## 📊 Features

✅ Live-Daten via Claude API mit Web Search
✅ NYSE & NASDAQ Indizes
✅ Beliebige Aktien überwachen (Standard: ZS, GOOG, CCJ, FSLR, SEDG, OKLO, HOOD)
✅ Markt-Nachrichten und Analysen
✅ Moderne UI mit Echtzeitdaten
✅ Responsive Design (Desktop, Tablet, Mobile)

## 🔐 Sicherheit

- Dein API-Key wird **nur im Browser** gespeichert (localStorage)
- Der Server agiert als CORS-Proxy
- Keine Daten werden auf Servern gespeichert

## 🐛 Troubleshooting

### "Kann nicht mit Server verbinden"
- Stelle sicher, dass der Node.js Server läuft: `npm start`
- Server sollte auf `http://localhost:3000` laufen
- Keine Firewall-Blockade

### "API-Fehler"
- Überprüfe deinen Claude API-Key (sollte mit `sk-ant-` beginnen)
- Key muss aktiv und nicht abgelaufen sein
- Keine Leerzeichen am Anfang/Ende!

### "Keine Daten zurückgegeben"
- Check die Browser-Konsole (F12) für Details
- Stelle sicher, dass du online bist
- API-Quota nicht überschritten?

## 📁 Dateien

- `briefing-server.js` - Node.js Express Server (CORS-Proxy)
- `morning-briefing-with-server.html` - Browser-UI
- `package.json` - Node.js Dependencies
- `README.md` - Diese Datei

## 🔄 Nächste Schritte

### Option 1: Täglich automatisieren mit n8n
Du kannst einen n8n Workflow erstellen, der:
- Täglich um 08:00 Uhr läuft
- Das Morning Briefing abruft
- Die Daten in SQL Server speichert oder per Email versendet

### Option 2: Docker Container
Falls du den Server produktiv nutzen möchtest, kannst du ihn in Docker containerisieren.

### Option 3: Cloud-Deployment
Möglich auf: Vercel, Heroku, Render, Railway, etc.

## 📝 Tipps

- **Aktien anpassen**: Jederzeit neue Aktien hinzufügen/entfernen
- **Server-URL**: Wenn du den Server woanders hostest, ändere die URL in den Einstellungen
- **Externe API**: Der Server macht interne Requests zur Claude API (nicht vom Browser aus)

## 🎯 Häufig genutzte Kommandos

```bash
# Server starten
npm start

# Dependencies aktualisieren
npm install

# API testen mit curl
curl -X POST http://localhost:3000/api/briefing \
  -H "Content-Type: application/json" \
  -d '{"apiKey":"sk-ant-...","stocks":["GOOG"],"prompt":"Test"}'
```

## 💡 Support

Falls es Probleme gibt:
1. Öffne Browser-Konsole (F12)
2. Check Server-Logs im Terminal
3. Stelle sicher, dass alle Dependencies installiert sind

---

**Viel Erfolg mit deinem Morning Briefing!** 📈
