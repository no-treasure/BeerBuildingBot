import { webhookCallback } from "grammy";
import { serve } from "deno:http";

import bot from "./bot.ts";

if (Deno.env.get("ENV") === "dev") {
  bot.start();
} else {
  serve(webhookCallback(bot, "std/http"));
}
