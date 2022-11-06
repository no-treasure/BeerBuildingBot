import { webhookCallback } from "grammy";
import { serve } from "deno:http";

import bot from "./bot.ts";

serve(webhookCallback(bot, "std/http"));
