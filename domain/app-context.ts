import { Context, SessionFlavor } from "grammy";

import { SessionStorage } from "./session-storage.ts";

export type AppContext = Context & SessionFlavor<SessionStorage>;
