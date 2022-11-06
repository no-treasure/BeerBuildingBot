import { countCheck } from "./count-check.ts";
import { SessionStorage } from "../domain/index.ts";

export const countFinalPrice = (ctx: SessionStorage) =>
  Object.values(ctx.order)
    .map((check) => countCheck(check, ctx.tips))
    .reduce((a, b) => a + b);
