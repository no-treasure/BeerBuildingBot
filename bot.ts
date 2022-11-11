import "deno:dotenv/load";

import { Bot, session } from "grammy";
import { freeStorage } from "grammy/storage";

import { AppContext, SessionStorage } from "./domain/index.ts";
import AppModule from "./modules/index.ts";
import { initialStorage } from "./utils/initial-storage.ts";

const BOT_TOKEN = Deno.env.get("BOT_TOKEN");

if (!BOT_TOKEN) throw new Error("Missing BOT_TOKEN env");

const bot = new Bot<AppContext>(BOT_TOKEN);

bot.use(
  session({
    initial: initialStorage,
    storage: freeStorage<SessionStorage>(bot.token),
  }),
);

bot.use(AppModule);

bot.catch((err) => console.error(err.error));

export default bot;
