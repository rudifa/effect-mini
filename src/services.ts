import {Context, Effect} from "effect";

export class Clock extends Context.Tag("Clock")<
  Clock,
  {
    now: Effect.Effect<number>;
  }
>() {}

export class Logger extends Context.Tag("Logger")<
  Logger,
  {
    log: (msg: string) => Effect.Effect<void>;
  }
>() {}

export const LiveClock = Clock.of({
  now: Effect.sync(() => new Date().getHours()),
});

export const LiveLogger = Logger.of({
  log: (msg) =>
    Effect.sync(() => {
      console.log(msg);
    }),
});
