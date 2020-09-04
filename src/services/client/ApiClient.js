import axios from 'axios';
import { Store } from 'src/store';

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
    const resp = await this.client.get(uri);
    return resp.data;
  }

  async get(uri, id) {
    const resp = await this.client.get(`${uri}/${id}`);
    return resp.data;
  }

  async post(uri, data) {
    const resp = await this.client.post(uri, data);
    return resp.data;
  }

  async put(uri, id, data) {
    const resp = await this.client.put(`${uri}/${id}`, data);
    return resp.data;
  }

  async delete(uri, id) {
    const resp = await this.client.delete(`${uri}/${id}`);
    return resp.data;
  }
}
