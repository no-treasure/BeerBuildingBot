import { config } from "dotenv";
import { Bot, webhookCallback } from "grammy";
import { Application } from "oak";

import { AppContext } from "./domain/AppContext.ts";
import { Command } from "./domain/command.ts";
import AppModule from "./modules/index.ts";

const env = await config();

const BOT_TOKEN = Deno.env.get("BOT_TOKEN") || env.BOT_TOKEN;

if (!BOT_TOKEN) throw new Error("Missing BOT_TOKEN");

const app = new Application();
const bot = new Bot<AppContext>(BOT_TOKEN);

app.use(webhookCallback(bot, "oak"));

await bot.init();

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

bot.start();
