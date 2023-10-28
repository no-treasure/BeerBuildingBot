import { SessionStorage } from "../domain/index.ts";

export function initialStorage(): SessionStorage {
  return {
    order: {},
    tips: 10,
  };
}
