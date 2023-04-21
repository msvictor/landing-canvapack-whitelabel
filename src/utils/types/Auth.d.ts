declare type Credentials = {
  username: string;
  password: string;
};

declare type Token = {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
};
