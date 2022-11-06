import { Composer } from "grammy";
import { AppContext, Command } from "../domain/index.ts";
import { DEFAULT_ERROR_TEXT } from "../utils/index.ts";

const composer = new Composer<AppContext>();

composer.command(Command.TIPS, (ctx) => ctx.reply(String(ctx.session.tips)));

composer.command(Command.SET_TIPS).on("message:text", (ctx) => {
  const message = ctx.update.message.text.replace("/set_tips", "");
  const numbers = message.match(/\d+?\d*/);

  if (numbers && Number(numbers[0]) < 100) {
    const newTips = Number(numbers[0]);
    ctx.session.tips = newTips;
    ctx.reply(`New tips value is - ${newTips}`);

    return;
  }

  ctx.reply(DEFAULT_ERROR_TEXT);
});

export default composer;
