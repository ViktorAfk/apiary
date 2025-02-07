import { User } from '@/types/user';
import { $api, Api } from './repository';

class AuthService {
  private _apiService: Api;

  private readonly BASE_URL: string = process.env.API_URL;

  constructor(apiService: Api) {
    this._apiService = apiService;
  }

  async getSignInUser(params: Pick<User, 'email' | 'password'>) {
    const signInUser = await this._apiService.post<string, typeof params>(
      `${this.BASE_URL}/sign-in`,
      params,
    );

    return signInUser;
  }
}

export const authService = new AuthService($api);
