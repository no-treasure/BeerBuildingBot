import { Check } from "../domain/index.ts";
import { countCheck } from "./count-check.ts";

export const countUserCheck = (userName: string, check: Check, tips: number) =>
  `<b>${userName}: ${countCheck(check, tips)}</b>\n` +
  check.map(({ orderName, price }) => `- ${orderName}: ${price}\n`).join("") +
  "-------------------------\n";
