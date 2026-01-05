import {Effect} from "effect";
import {Clock, Logger, LiveClock, LiveLogger} from "./services.js";
import {TooEarly, TooLate, AppError} from "./errors.js";

const program = Effect.gen(function* () {
  const clock = yield* Clock;
  const logger = yield* Logger;

  const time = yield* clock.now;

  if (time < 9) {
    yield* logger.log("Too early");
    return yield* Effect.fail(new TooEarly());
  }

  if (time > 17) {
    yield* logger.log("Too late");
    return yield* Effect.fail(new TooLate());
  }

  yield* logger.log("Within working hours");
  return "OK";
});

// Effect<Clock | Logger, AppError, string>

const runnable = program.pipe(
  Effect.provideService(Clock, LiveClock),
  Effect.provideService(Logger, LiveLogger)
);

Effect.runPromise(runnable)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((err: AppError) => {
    switch (err._tag) {
      case "TooEarly":
        console.error("Come back later");
        break;
      case "TooLate":
        console.error("Try tomorrow");
        break;
    }
  });
