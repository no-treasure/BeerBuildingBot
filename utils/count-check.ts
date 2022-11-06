import { Check } from "../domain/index.ts";

// 10% => 1.1
const tipsToFraction = (tips: number) => (tips + 100) / 100;

export const countCheck = (check: Check, tips: number) =>
  Math.ceil(
    check.reduce((acc, { price }) => acc + Number(price), 0) *
      tipsToFraction(tips),
  );
