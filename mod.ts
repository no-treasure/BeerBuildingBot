import { webhookCallback } from "grammy";
import { serve } from "deno:http";

import { bot } from "./bot.ts";

const BOT_URL = Deno.env.get("BOT_URL");
const IS_PROD = Deno.env.get("MODE") === "production";

if (IS_PROD && BOT_URL) {
  bot.api.setWebhook(BOT_URL);

  serve(webhookCallback(bot, "std/http"));
} else {
  bot.start();
}

console.info(
  `Bot started in ${IS_PROD ? "production" : "development"} mode`,
);
