import axios from "axios";
import { api } from "./api";

class UserService {
  async loginUser(email: string, pwd: string): Promise<any> {
    try {
      const response = await api.post('/users/login', { email, pwd });
      return response;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.response
      }
      return null;
    }
  }
}

export default new UserService();
