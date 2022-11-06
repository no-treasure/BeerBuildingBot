import { Check } from "./Check.ts";

type UserName = string;

export type Order = Record<UserName, Check>;
