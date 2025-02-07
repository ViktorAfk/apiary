import { User } from '@/types/user';
import { $api, Api } from './repository';

class UserService {
  private _apiService: Api;

  private readonly BASE_URL: string = process.env.API_URL;

  constructor(apiService: Api) {
    this._apiService = apiService;
  }

  async getAllUsers() {
    try {
      const users = await this._apiService.getAll<User[]>(
        `${this.BASE_URL}/users`,
      );

      return users;
    } catch (error) {}
  }
}

export const userService = new UserService($api);
