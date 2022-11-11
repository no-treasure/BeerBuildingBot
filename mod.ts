import { webhookCallback } from "grammy";
import { serve } from "deno:http";

import bot from "./bot.ts";

const ENVIRONMENT = Deno.env.get("ENV");
const BOT_URL = Deno.env.get("BOT_URL");

const start = () => {
  if (ENVIRONMENT === "dev") {
    bot.start();

    return;
  }

  if (!BOT_URL) {
    throw new Error("BOT_URL env not provided");
  }

  bot.api.setWebhook(BOT_URL);

  serve(webhookCallback(bot, "std/http"));
};

start();

console.info(
  `Bot started in ${ENVIRONMENT === "dev" ? "development" : "production"} mode`,
);
