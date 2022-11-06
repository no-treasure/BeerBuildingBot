import { SessionStorage } from "../domain/SessionStorage.ts";

export function initialStorage(): SessionStorage {
  return {
    order: {},
    tips: 10,
  };
}
