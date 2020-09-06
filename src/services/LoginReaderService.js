import ApiClient from 'src/services/client/ApiClient';
import notify, { TypeMessage } from 'src/mixins/notification';
import { Store } from 'src/store';

export default class LoginReaderService extends ApiClient {
  async verifyLogin(loginForm) {
    const resp = await this.post('/admin/login', loginForm);
    if (resp.status === 'SUCCESS') {
      Store.commit('login/setUserId', resp.id);
      notify('Login realizado com sucesso', TypeMessage.success);
    } else {
      notify('Login incorreto', TypeMessage.error);
      return false;
    }
    return true;
  }
}
