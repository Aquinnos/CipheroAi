import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

/**
 * Konfiguracja komendy `/ping`.
 */
export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Sprawdź, czy bot odpowiada.');

/**
 * Wykonanie komendy `/ping`.
 */
export async function execute(interaction: ChatInputCommandInteraction) {
  const sent = await interaction.reply({ content: '🏓 Pong!', fetchReply: true });
  const latency = sent.createdTimestamp - interaction.createdTimestamp;

  await interaction.editReply(`🏓 Pong! Opóźnienie: **${latency}ms**.`);
}
