import { Composer, session } from "grammy";

import { AppContext } from "../domain/index.ts";
import { initialStorage } from "../utils/index.ts";

import OrderModule from "./order.module.ts";
import TipsModule from "./tips.module.ts";
import CheckModule from "./check.module.ts";
import HelpModule from "./help.module.ts";

const composer = new Composer<AppContext>();

composer.use(session({ initial: initialStorage }));

composer.command("current_state", (ctx) => {
  ctx.reply(`<pre>${JSON.stringify(ctx.session)}</pre>`, {
    parse_mode: "HTML",
  });
});

composer.use(OrderModule);
composer.use(TipsModule);
composer.use(CheckModule);
composer.use(HelpModule);

export default composer;
