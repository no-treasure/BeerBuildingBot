import { Composer } from "grammy";
import { AppContext, Command } from "../domain/index.ts";
import {
  countFinalPrice,
  countUserCheck,
  initialStorage,
} from "../utils/index.ts";

const composer = new Composer<AppContext>();

composer.command(Command.RESET_CHECK, (ctx) => {
  ctx.session = initialStorage();

  ctx.reply("Check has been reloaded");
});

composer.command(Command.MY_CHECK).on("message:text", (ctx) => {
  const userName = ctx.update.message.from.first_name;

  const userCheck = ctx.session.order[userName];

  if (!userCheck) return ctx.reply("Your check is empty");

  const text = countUserCheck(userName, userCheck, ctx.session.tips);

  ctx.reply(text, { parse_mode: "HTML" });
});

composer.command(Command.CHECK, (ctx) => {
  if (!Object.values(ctx.session.order).length) return ctx.reply("Empty check");

  const markdown = Object.entries(ctx.session.order).map(([user, check]) =>
    countUserCheck(user, check, ctx.session.tips)
  ) + `Final price: ${countFinalPrice(ctx.session)}\n`;

  ctx.reply(markdown, { parse_mode: "HTML" });
});

export default composer;
