import { config } from "deno:dotenv";
import { Bot, session } from "grammy";
import { freeStorage } from "grammy/storage";

import { AppContext, Command, SessionStorage } from "./domain/index.ts";
import AppModule from "./modules/index.ts";
import { initialStorage } from "./utils/initial-storage.ts";

const env = await config();

const BOT_TOKEN = Deno.env.get("BOT_TOKEN") || env.BOT_TOKEN;

if (!BOT_TOKEN) throw new Error("Missing BOT_TOKEN");

const bot = new Bot<AppContext>(BOT_TOKEN);

bot.use(
  session({
    initial: initialStorage,
    storage: freeStorage<SessionStorage>(bot.token),
  }),
);

bot.command(Command.HELLO, (ctx) => {
  ctx.reply("Greeting, Beer lovers!");
});

bot.catch((err) => {
  console.error(
    `Error while handling update ${err.ctx.update.update_id}:`,
  );
  console.error(err.error);
});

bot.use(AppModule);

export default bot;
