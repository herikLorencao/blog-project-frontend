import ApiClient from 'src/services/client/ApiClient';
import { Store } from 'src/store';
import notify, { TypeMessage } from 'src/mixins/notification';

export default class LoginAdminService extends ApiClient {
  async verifyLogin(loginForm) {
    const resp = await this.post('/admin/login', loginForm);
    if (resp.status === 'SUCCESS') {
      Store.commit('login/setUserId', resp.id);
      notify('Login realizado com sucesso', TypeMessage.success);
      return true;
    }

    notify('Login incorreto', TypeMessage.error);
    return false;
  }
}
