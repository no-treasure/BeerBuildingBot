import { Composer, session } from "grammy";

import { AppContext, Command } from "../domain/index.ts";

import OrderModule from "./order.module.ts";
import TipsModule from "./tips.module.ts";
import CheckModule from "./check.module.ts";
import HelpModule from "./help.module.ts";

const composer = new Composer<AppContext>();

composer.use(OrderModule);
composer.use(TipsModule);
composer.use(CheckModule);
composer.use(HelpModule);

composer.command(Command.CURRENT_STATE, (ctx) => {
  ctx.reply(`<pre>${JSON.stringify(ctx.session)}</pre>`, {
    parse_mode: "HTML",
  });
});

export default composer;
