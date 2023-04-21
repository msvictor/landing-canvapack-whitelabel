import { ResponseError } from '~/infra';
import request from '../request';

export const login = async ({
  username,
  password,
}: Credentials): Promise<Token> => {
  try {
    const { data } = await request.post('/login', {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw new ResponseError(error);
  }
};
