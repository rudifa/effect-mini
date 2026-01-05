export class TooEarly {
  readonly _tag = "TooEarly";
}

export class TooLate {
  readonly _tag = "TooLate";
}

export type AppError = TooEarly | TooLate;
