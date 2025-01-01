import { Client, GatewayIntentBits, Interaction } from 'discord.js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { registerCommands } from './register/registerCommands';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const commands = new Map();

async function loadCommands() {
  const commandFiles = fs.readdirSync(path.join(__dirname, './commands')).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const command = await import(`./commands/${file}`);
    commands.set(command.data.name, command);
  }
}

client.once('ready', async () => {
  console.log(`🤖 CipheroAi is online as ${client.user?.tag}!`);
  const registeredCommands = await client.application?.commands.fetch();
  console.log('Registered commands:', registeredCommands?.map(cmd => cmd.name));

  // Pobieranie listy serwerów i rejestrowanie komend dla każdego z nich
  const guilds = await client.guilds.fetch();
  for (const guild of guilds.values()) {
    console.log(`Registering commands for guild: ${guild.id}`);
    await registerCommands(guild.id);
  }
});

// Obsługa komend
client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.isChatInputCommand()) {
    const command = commands.get(interaction.commandName);
    if (command) {
      console.log(`Interaction received: ${interaction.commandName}`);
      await command.execute(interaction);
    } else {
      console.warn(`Nieznana komenda: ${interaction.commandName}`);
    }
  }
});

// Rejestracja komend i logowanie
(async () => {
  console.log('Registering commands...');
  await loadCommands();
  client.login(process.env.DISCORD_TOKEN);
})();