# Solana Coin Indexing Backend

A fast and scalable backend service for indexing new and updated tokens on the Solana blockchain. Includes a RESTful API with Swagger documentation and Telegram integration for real-time notifications.

## ✨ Features

- ✅ Index new token mints and metadata
- 🔁 Monitor for token updates (price, liquidity, holders, etc.)
- 📬 Send Telegram alerts for new token listings
- 📘 Swagger UI for API documentation
- 🛠️ Written in Node.js / TypeScript
- ⚡ PostgreSQL or Redis for persistent storage

---

[![image](https://github.com/user-attachments/assets/ea441bdd-81ae-4d81-b22d-181a7150bd6d)](https://coin-indexing-app-backend.vercel.app/)


## 📦 Tech Stack

- **Solana Web3.js**
- **Node.js / Express**
- **Redis**
- **Swagge**
- **Telegram Bot API**

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Redis
- A Telegram Bot Token (from [@BotFather](https://t.me/BotFather))
- A Telegram Chat ID (group or user)

### Clone the Repo

```bash
git clone https://github.com/vvizardev/coin-indexing-app-backend.git
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
SOLANA_TRACKER_API_KEY=
PORT=
BOT_TOKEN=
CHANNEL_HANDLE=
BOT_NAME=
API_URL=
```

### Run the Indexer

```bash
npm run start
# or
cargo run
```

---

## 🧠 How It Works

1. Connects to the Solana RPC and scans for new token mints.
2. Fetches metadata using Metaplex or TokenList.
3. Stores tokens in PostgreSQL or Redis.
4. Sends Telegram messages when criteria match.
5. Exposes an API to retrieve token data via REST.

---

## 📘 API Documentation

After running the server, visit:

```
http://localhost:3000
```

Here you’ll find Swagger UI with full documentation.

---

## 🔔 Telegram Notifications

Example message sent to Telegram:

```
🚀 New Token Detected!
Name: Banana Coin 🍌
Mint: F5vA...DxP
Symbol: BANANA
```

> Customize filters in `src/indexer/filter.ts` to reduce spam.

---

## 📡 API Endpoints

### 🔥 Trending

- **Trending SOL Pools**  
  `GET /api/v1/trending`  
  _Get trending SOL pools_

- **Trending Tokens (Tracker)**  
  `GET /api/v1/tracker/trending`  
  _Get trending tokens from tracker_

---

### 📈 Token Lists (Tracker)

- **Tokens by Volume**  
  `GET /api/v1/tracker/tokens/volume`  
  _Get tokens sorted by trading volume_

- **Tokens by Multi**  
  `GET /api/v1/tracker/tokens/multi`  
  _Get tokens by multi-metric logic_

- **Latest Tokens**  
  `GET /api/v1/tracker/tokens/latest`  
  _Get the most recently listed tokens_

- **Graduated Tokens**  
  `GET /api/v1/tracker/tokens/graduated`  
  _Get tokens that have graduated from tracker status_

---

### 🔍 Token Details (Tracker)

- **Get Token Details**  
  `GET /api/v1/tracker/tokens/{tokenAddress}`  
  _Fetch token details by its address_


---

## 🧪 Test

```bash
npm run test
```

---

## 🛡️ Production

Use Docker:

```bash
docker build -t solana-indexer .
docker run --env-file .env -p 3000:3000 solana-indexer
```

---

## 🙌 Contributing

PRs welcome! Please open an issue first to discuss any major changes.

---

## 📄 License

MIT © 2025 @vvizardev

---

## 📬 Contact

- Telegram: [@vvizardev](https://t.me/vvizardev)
- Twitter: [@wizardev_sol](https://x.com/wizardev_sol)
