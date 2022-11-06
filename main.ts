import { config } from "dotenv";
import { Bot } from "grammy";

import { AppContext } from "./domain/AppContext.ts";
import { Command } from "./domain/command.ts";
import AppModule from "./modules/index.ts";

const env = await config();

if (env.BOT_TOKEN === undefined) throw new Error("Missing BOT_TOKEN");

const bot = new Bot<AppContext>(env.BOT_TOKEN);

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
