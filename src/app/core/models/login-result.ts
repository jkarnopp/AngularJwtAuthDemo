export interface LoginResult {
    username: string;
    roles: string[];
    originalUserName: string;
    accessToken: string;
    refreshToken: string;
  }
