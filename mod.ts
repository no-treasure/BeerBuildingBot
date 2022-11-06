import { webhookCallback } from "grammy";
import { Application } from "oak";
import bot from "./bot.ts";

const app = new Application();

app.use(webhookCallback(bot, "oak"));
