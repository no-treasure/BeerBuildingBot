import { webhookCallback } from "grammy";
import { serve } from "deno:http";

import bot from "./bot.ts";

const ENVIRONMENT = Deno.env.get("ENV");

if (ENVIRONMENT === "dev") {
  bot.start();
} else {
  serve(webhookCallback(bot, "std/http"));
}

console.info(
  `Bot started in ${ENVIRONMENT === "dev" ? "development" : "production"} mode`,
);
