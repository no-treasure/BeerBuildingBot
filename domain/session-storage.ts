import { Order } from "./order-type.ts";

export type SessionStorage = {
  order: Order;
  tips: number;
};
