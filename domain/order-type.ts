import { Check } from "./check-type.ts";

type UserName = string;

export type Order = Record<UserName, Check>;
