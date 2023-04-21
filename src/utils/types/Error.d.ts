declare type ErrorResponse = {
  response: { status: number; data: { msg: string; code: string } };
};
