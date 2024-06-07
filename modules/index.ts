import { Composer } from "grammy";

import { AppContext } from "../domain/index.ts";

import OrderModule from "./order.module.ts";
import TipsModule from "./tips.module.ts";
import CheckModule from "./check.module.ts";
import HelloModule from "./hello.module.ts";

const composer = new Composer<AppContext>();

composer.use(HelloModule);
composer.use(OrderModule);
composer.use(TipsModule);
composer.use(CheckModule);

composer.command("current_state", (ctx) => {
  ctx.reply(`<pre>${JSON.stringify(ctx.session)}</pre>`, {
    parse_mode: "HTML",
  });
});

export default composer;
