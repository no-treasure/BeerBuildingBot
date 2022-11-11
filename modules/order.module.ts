import { Composer } from "grammy";
import { AppContext, Command } from "../domain/index.ts";
import {
  DEFAULT_ERROR_TEXT,
  numberRegExp,
  stringRegExp,
} from "../utils/index.ts";

const composer = new Composer<AppContext>();

composer.command(Command.ADD).on("message:text", async (ctx) => {
  const message = ctx.update.message.text.replace("/add", "");
  const userName = ctx.update.message.from.first_name;
  const text = message.match(stringRegExp);
  const numbers = message.match(numberRegExp);

  if (text && numbers) {
    const orderName = text.join(" ");
    const price = Number(numbers[0]);

    if (ctx.session.order[userName]?.length) {
      ctx.session.order[userName].push({ orderName, price });
    } else {
      ctx.session.order[userName] = [{ orderName, price }];
    }

    await ctx.reply(`Added to your check: \n <b>${orderName}: ${price}</b>`, {
      parse_mode: "HTML",
    });

    return;
  }

  ctx.reply(DEFAULT_ERROR_TEXT);
});

export default composer;
