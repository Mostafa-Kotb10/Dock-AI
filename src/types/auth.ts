// src/types/auth.ts

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiration: number;
  refreshTokenExpiration: number;
}
