# 🍎 Fruity App

Applicazione web Angular che mostra l'elenco dei frutti e i loro valori nutrizionali, usando l'API pubblica [FruityVice](https://www.fruityvice.com). L'obiettivo è incentivare un'alimentazione più sana e plant based.

**Demo online:** _inserire qui il link Firebase dopo il deploy_

## 🚀 Funzionalità

1. **Elenco dei frutti**: tutti i frutti vengono caricati dall'endpoint FruityVice `/api/fruit/all`.
2. **Barra di ricerca**: scrivendo il nome di un frutto (in inglese, ad esempio `banana`) la lista si filtra in tempo reale.
3. **Valori nutrizionali**: selezionando un frutto si vedono calorie, grassi, zuccheri, carboidrati e proteine (valori per 100 g).
4. **Pagina di dettaglio**: pagina dedicata a ogni frutto, raggiungibile tramite routing Angular.
5. **Gestione degli errori**: viene mostrato un messaggio se l'API non è raggiungibile.
6. **Pagina 404**: pagina personalizzata per i percorsi inesistenti.
7. **Layout responsive**: si adatta a computer e smartphone.

## 🛠️ Tecnologie e librerie utilizzate

| Libreria | Utilizzo |
|---|---|
| Angular | Framework (componenti standalone, signals, router) |
| TypeScript | Linguaggio |
| RxJS | Gestione asincrona delle chiamate HTTP |
| Angular HttpClient | Chiamate all'API FruityVice |
| Angular Router | Navigazione tra le pagine |
| Firebase CLI (`firebase-tools`) | Deploy su Firebase Hosting |

Servizio esterno: [FruityVice API](https://www.fruityvice.com).

## ✅ Prerequisiti

- [Node.js](https://nodejs.org) (versione LTS) e npm
- Angular CLI: `npm install -g @angular/cli`
- Git

## ⚙️ Avviare il progetto in locale

1. Clona il repository:
   ```bash
   git clone https://github.com/raffmilo00-byte/fruity.git
   ```
2. Entra nella cartella del progetto:
   ```bash
   cd fruity
   ```
3. Installa le dipendenze:
   ```bash
   npm install
   ```
4. Avvia il server di sviluppo:
   ```bash
   ng serve
   ```
5. Apri `http://localhost:4200` nel browser.

## 🔄 CORS e proxy (sviluppo)

L'API FruityVice non permette chiamate dirette dal browser (politica CORS). In sviluppo il server di Angular fa da proxy:

- L'app chiama l'URL relativo `/api/fruit/all`.
- `proxy.conf.json` inoltra ogni richiesta che inizia con `/api` a `https://www.fruityvice.com`:

```json
{
  "/api": {
    "target": "https://www.fruityvice.com",
    "secure": true,
    "changeOrigin": true
  }
}
```

- In `angular.json` il proxy è attivato in `architect > serve > options`:

```json
"options": {
  "proxyConfig": "proxy.conf.json"
}
```

**Importante:** il proxy funziona solo con `ng serve`. Se modifichi `proxy.conf.json`, ferma il server (`Ctrl + C`) e riavvialo.

## ☁️ Deploy su Firebase

_Descrivere qui la soluzione scelta (snapshot statico `fruits.json` oppure Cloud Function come proxy) e i comandi:_

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
ng build
firebase deploy
```

## 📂 Struttura del progetto

```
src/app/
├── core/services/fruit.service.ts   # chiamate all'API
├── models/                          # interfacce Fruit e Nutrition
├── pages/
│   ├── home/
│   ├── fruit-list/
│   ├── fruit-detail/
│   └── not-found/
├── shared/
│   ├── navbar/
│   └── fruit-card/
├── app.config.ts
└── app.routes.ts
public/                              # file statici

## 👨‍💻 Autore

Raff · [github.com/raffmilo00-byte](https://github.com/raffmilo00-byte)
