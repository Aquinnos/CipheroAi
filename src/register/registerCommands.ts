import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

/**
 * Rejestracja komend Discord na serwerze.
 */
export async function registerCommands(guildId: string) {
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN || '');

  const commands = [];
  const commandFiles = fs.readdirSync(path.join(__dirname, '../commands')).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    const command = await import(`../commands/${file}`);
    commands.push(command.data.toJSON());
  }

  try {
    console.log('🔄 Rejestracja komend...');
    //console.log('Komendy do rejestracji:', commands);
    await rest.put(
      Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID || '', guildId),
      { body: commands }
    );
    console.log(`✅ Komendy zostały zarejestrowane dla serwera: ${guildId}`);
  } catch (error: any) {
    console.error(`❌ Błąd podczas rejestracji komend dla serwera ${guildId}:`, error);
  }
}