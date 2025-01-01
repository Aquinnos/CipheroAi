import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { askAI } from '../ai';

export const data = new SlashCommandBuilder()
  .setName('ask')
  .setDescription('Zadaj pytanie AI')
  .addStringOption(option =>
    option.setName('pytanie')
      .setDescription('Twoje pytanie do AI')
      .setRequired(true)
  );

/**
 * Obsługa komendy `/ask`.
 */
export async function execute(interaction: ChatInputCommandInteraction) {
  await interaction.deferReply(); // Odpowiedź asynchroniczna

  const question = interaction.options.getString('pytanie', true);

  try {
    const aiResponse = await askAI(question);
    await interaction.editReply(`🤖 **Odpowiedź AI:**\n${aiResponse}`);
  } catch (error) {
    await interaction.editReply('❌ Wystąpił błąd podczas przetwarzania Twojego zapytania.');
  }
}
