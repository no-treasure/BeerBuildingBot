import { Command } from "./command.ts";

export const COMMAND_DESCRIPTION: Record<Command, string> = {
  [Command.ADD]: "Add order to your check",
  [Command.CHECK]: "Finnal check includes all persons",
  [Command.MY_CHECK]: "Check includes only your order",
  [Command.RESET_CHECK]: "Reset check to default",
  [Command.TIPS]: "See current tips value",
  [Command.SET_TIPS]: "Set tips value",
  [Command.HELP]: "See command list and description",
};
