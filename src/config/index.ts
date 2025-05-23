import TelegramBot from 'node-telegram-bot-api';
import { config } from 'dotenv';
config()

const PORT = process.env.PORT
const BOT_TOKEN = process.env.BOT_TOKEN || process.exit(1);

const CHANNEL_HANDLE = process.env.CHANNEL_HANDLE || ""
const BOT_NAME = process.env.BOT_NAME || ""
const API_URL = process.env.API_URL || ""
const SOLANA_TRACKER_API_KEY = process.env.SOLANA_TRACKER_API_KEY || ""
const SOLANA_TRACKER_BASE_URL = "https://data.solanatracker.io"

let bot = new TelegramBot(BOT_TOKEN, { polling: true });

export {
  PORT,
  CHANNEL_HANDLE,
  BOT_NAME,
  API_URL,
  bot,
  SOLANA_TRACKER_API_KEY,
  SOLANA_TRACKER_BASE_URL
}
