# CipheroAi Discord Bot

CipheroAi to bot Discord, który umożliwia zadawanie pytań AI oraz sprawdzanie opóźnienia bota.

## 🚀 Wymagania

- **Node.js** v16 lub nowszy
- Konto Discord oraz utworzony bot Discord
- Klucz API GLHF

---

## 📥 Instalacja

1. **Sklonuj repozytorium:**

   ```bash
   git clone https://github.com/yourusername/CipheroAi.git
   cd CipheroAi
   ```

2. **Zainstaluj zależności:**

   ```bash
   npm install
   ```

3. **Skonfiguruj zmienne środowiskowe:**

   Utwórz plik `.env` w katalogu głównym projektu i dodaj swoje tokeny oraz klucze API:

   ```env
   DISCORD_TOKEN=your_discord_token
   GLHF_API_KEY=your_glhf_api_key
   GLHF_API_URL=https://glhf.chat/api/openai/v1
   MODEL=hf:mistralai/Mistral-7B-Instruct-v0.3
   DISCORD_CLIENT_ID=your_discord_client_id
   ```

4. **Uruchom bota:**

   ```bash
   npm run dev
   ```

---

## 📚 Użycie

Bot obsługuje następujące komendy:

- `/ask pytanie:` Zadaj pytanie AI.
- `/ping:` Sprawdź, czy bot odpowiada.

---

## 🗂️ Struktura projektu

```
CipheroAi/
├── src/
│   ├── index.ts          # Główny plik uruchamiający bota
│   ├── commands/
│   │   ├── ask.ts       # Implementacja komendy /ask
│   │   ├── ping.ts      # Implementacja komendy /ping
│   ├── register/
│   │   ├── registerCommands.ts # Rejestracja komend
├── .env                 # Zmienne środowiskowe
├── package.json         # Konfiguracja Node.js
└── tsconfig.json        # Konfiguracja TypeScript
```

---

## 🔒 Bezpieczeństwo

- Nigdy nie udostępniaj tokenu bota publicznie.
- Dodaj plik `.env` do `.gitignore`.
- Przyznaj botowi tylko te uprawnienia, które są niezbędne do jego działania.
- Monitoruj aktywność bota i loguj wszystkie interakcje.

---

## 📜 Licencja

Ten projekt jest licencjonowany na warunkach licencji **MIT**. Zobacz plik [LICENSE](LICENSE) po więcej informacji.

---