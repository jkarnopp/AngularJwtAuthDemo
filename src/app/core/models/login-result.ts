export interface LoginResult {
    userName: string;
    roles: string[];
    originalUserName: string;
    accessToken: string;
    refreshToken: string;
  }
