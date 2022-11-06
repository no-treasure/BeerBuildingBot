import { Context, SessionFlavor } from "grammy";

import { SessionStorage } from "./SessionStorage.ts";

export type AppContext = Context & SessionFlavor<SessionStorage>;
