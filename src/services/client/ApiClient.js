import axios from 'axios';
import { Store } from 'src/store';
import notify, { TypeMessage } from 'src/mixins/notification';

export default class ApiClient {
  constructor() {
    const token = Store.getters['login/getToken'];

    this.client = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async list(uri) {
    try {
      const resp = await this.client.get(uri);
      return resp.data;
    } catch (e) {
      this.handleErrors(e);
      return [];
    }
  }

  async get(uri, id) {
    try {
      const resp = await this.client.get(`${uri}/${id}`);
      return resp.data;
    } catch (e) {
      this.handleErrors(e);
      return false;
    }
  }

  async post(uri, data) {
    try {
      const resp = await this.client.post(uri, data);
      return resp.data;
    } catch (e) {
      this.handleErrors(e);
      return false;
    }
  }

  async put(uri, id, data) {
    try {
      const resp = await this.client.put(`${uri}/${id}`, data);
      return resp;
    } catch (e) {
      this.handleErrors(e);
      return false;
    }
  }

  async delete(uri, id) {
    try {
      const resp = await this.client.delete(`${uri}/${id}`);
      return resp.data;
    } catch (e) {
      this.handleErrors(e);
      return false;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleErrors(e) {
    if (e.response) {
      const errorObject = e.response.data;
      const keys = Object.keys(errorObject);

      keys.forEach((errorField) => {
        notify(errorObject[errorField], TypeMessage.error);
      });
    } else {
      notify('Ocorreu um erro inesperado na API', TypeMessage.error);
    }
  }
}
