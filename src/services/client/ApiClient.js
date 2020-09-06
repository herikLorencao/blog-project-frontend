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
      notify('Ocorreram problemas na requisição', TypeMessage.error);
      return [];
    }
  }

  async get(uri, id) {
    try {
      const resp = await this.client.get(`${uri}/${id}`);
      return resp.data;
    } catch (e) {
      notify('Ocorreram problemas na requisição', TypeMessage.error);
      return false;
    }
  }

  async post(uri, data) {
    try {
      const resp = await this.client.post(uri, data);
      return resp.data;
    } catch (e) {
      notify('Ocorreram problemas na requisição', TypeMessage.error);
      return false;
    }
  }

  async put(uri, id, data) {
    try {
      const resp = await this.client.put(`${uri}/${id}`, data);
      return resp.data;
    } catch (e) {
      notify('Ocorreram problemas na requisição', TypeMessage.error);
      return false;
    }
  }

  async delete(uri, id) {
    try {
      const resp = await this.client.delete(`${uri}/${id}`);
      return resp.data;
    } catch (e) {
      notify('Ocorreram problemas na requisição', TypeMessage.error);
      return false;
    }
  }
}
