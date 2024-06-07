import { BotCommand } from "https://deno.land/x/grammy@v1.12.0/types.deno.ts";
import { Command } from "../domain/index.ts";

interface BeerBotCommand extends BotCommand {
  description: string;
  command: Command;
}

export const COMMAND_DESCRIPTION: Array<BeerBotCommand> = [
  {
    command: Command.ADD,
    description: "Add order to your check",
  },
  {
    command: Command.CHECK,
    description: "Final check includes all persons",
  },
  {
    command: Command.MY_CHECK,
    description: "Check includes only your order",
  },
  {
    command: Command.RESET_CHECK,
    description: "Reset check to default",
  },
  {
    command: Command.TIPS,
    description: "See current tips value",
  },
  {
    command: Command.SET_TIPS,
    description: "Set tips value",
  },
  {
    command: Command.HELLO,
    description: "Greetings with bot",
  },
];
