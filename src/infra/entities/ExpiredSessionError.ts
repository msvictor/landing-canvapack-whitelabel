interface ResponseError {
  status: number;
  data: {
    message: string;
    code: string;
  };
}
export default class ExpiredSessionError extends Error {
  response: ResponseError;

  constructor() {
    super();
    this.response = {
      data: {
        message: 'Sessão expirada. Autentique novamente para continuar',
        code: 'JWT00001',
      },
      status: 401,
    };
  }
}
