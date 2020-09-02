import axios from 'axios';
import AuthForm from 'src/models/AuthForm';
import notification, { TypeMessage } from 'src/mixins/notification';

export default class AuthService {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async findNewToken() {
    const authForm = new AuthForm(process.env.API_USER, process.env.API_PASSWORD);

    try {
      const resp = await this.client.post('/auth', authForm);
      return resp.data;
    } catch (e) {
      notification('Não foi possível se conectar a API', TypeMessage.error);
      return false;
    }
  }
}
