import { Composer } from "grammy";
import { AppContext } from "../domain/index.ts";
import { Command, DEFAULT_ERROR_TEXT } from "../utils/index.ts";

const composer = new Composer<AppContext>();

composer.command(Command.ADD).on("message:text", async (ctx) => {
  const message = ctx.update.message.text.replace("/add", "");
  const userName = ctx.update.message.from.first_name;
  const text = message.match(/([^\s]+)/);
  const numbers = message.match(/\d+?\d*/);

  if (text && numbers) {
    const orderName = text[0];
    const price = Number(numbers[0]);

    if (ctx.session.order[userName]?.length) {
      ctx.session.order[userName].push({ orderName, price });
    } else {
      ctx.session.order[userName] = [{ orderName, price }];
    }

    await ctx.reply(`Added to your check: { ${orderName}: ${price} }`);

    return;
  }

  ctx.reply(DEFAULT_ERROR_TEXT);
});

export default composer;
