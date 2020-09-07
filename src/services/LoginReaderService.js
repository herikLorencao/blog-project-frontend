import ApiClient from 'src/services/client/ApiClient';
import notify, { TypeMessage } from 'src/mixins/notification';
import { Store } from 'src/store';

import ReaderService from 'src/services/ReaderService';

export default class LoginReaderService extends ApiClient {
  async verifyLogin(loginForm) {
    const resp = await this.post('/login', loginForm);
    if (resp.status === 'SUCCESS') {
      const readerService = new ReaderService();
      const readerInfo = await readerService.find(resp.id);

      Store.commit('readerLogin/setReaderId', resp.id);
      Store.commit('readerLogin/setReaderName', readerInfo.login);

      notify('Login realizado com sucesso', TypeMessage.success);
    } else {
      notify('Login incorreto', TypeMessage.error);
      return false;
    }
    return true;
  }
}
