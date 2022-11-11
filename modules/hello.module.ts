import { Composer } from "grammy";
import { AppContext, Command } from "../domain/index.ts";

const composer = new Composer<AppContext>();

composer.command(Command.HELLO, (ctx) => {
  ctx.reply("Greeting, Beer lovers!");
});

export default composer;
