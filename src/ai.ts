import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GLHF_API_URL = process.env.GLHF_API_URL || '';
const GLHF_API_KEY = process.env.GLHF_API_KEY || '';
const MODEL = process.env.MODEL || 'hf:mistralai/Mistral-7B-Instruct-v0.3';

/**
 * Funkcja wysyłająca zapytanie do API glhf.
 * @param message Treść wiadomości użytkownika.
 * @returns Odpowiedź od modelu AI.
 */

export async function askAI(message: string): Promise<string> {
    try {
        const response = await axios.post(
            `${GLHF_API_URL}/chat/completions`,
            {
                model: MODEL,
                messages: [
                    { role: 'user', content: message }
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${GLHF_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data.choices[0]?.message.content || '🤖 Nie udało się przetworzyć Twojego zapytania.';
    } catch (error) {
        console.error(error);
        return '🤖 Nie udało się przetworzyć Twojego zapytania.';
    }
}