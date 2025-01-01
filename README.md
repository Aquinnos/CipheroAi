# CipheroAi Discord Bot

CipheroAi is a Discord bot made **4fun** that allows users to ask AI questions and check the bot's latency. It utilizes the **GLHF API (Beta Version)**, which is currently **free to use**.

## 🚀 Requirements

- **Node.js** v16 or newer
- A Discord account with a created bot
- GLHF API key

---

## 📥 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/CipheroAi.git
   cd CipheroAi
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the project's root directory and add your tokens and API keys:

   ```env
   DISCORD_TOKEN=your_discord_token
   GLHF_API_KEY=your_glhf_api_key
   GLHF_API_URL=https://glhf.chat/api/openai/v1
   MODEL=hf:mistralai/Mistral-7B-Instruct-v0.3
   DISCORD_CLIENT_ID=your_discord_client_id
   ```

4. **Run the bot:**

   ```bash
   npm run dev
   ```

---

## 📚 Usage

The bot supports the following commands:

- `/ask question:` Ask a question to the AI.
- `/ping:` Check if the bot is responsive.

---

## 🗂️ Project Structure

```
CipheroAi/
├── src/
│   ├── index.ts          # Main bot entry point
│   ├── commands/
│   │   ├── ask.ts       # Implementation of /ask command
│   │   ├── ping.ts      # Implementation of /ping command
│   ├── register/
│   │   ├── registerCommands.ts # Command registration
├── .env                 # Environment variables
├── package.json         # Node.js configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🔒 Security

- Never share your bot token publicly.
- Add the `.env` file to `.gitignore`.
- Grant the bot only the permissions it needs to function.
- Monitor bot activity and log all interactions.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 🤝 Contributing

Want to help improve CipheroAi? Feel free to open issues, suggest features, and submit pull requests on GitHub!

**Build a smarter future with CipheroAi! 🤖✨**
