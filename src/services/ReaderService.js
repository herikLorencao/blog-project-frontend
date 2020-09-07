import ApiClient from 'src/services/client/ApiClient';

export default class ReaderService extends ApiClient {
  async listAll() {
    const resp = await this.list('readers');
    return resp.data;
  }

  async find(id) {
    const resp = await this.get('readers', id);
    return resp;
  }

  async create(reader) {
    const resp = this.post('readers', reader);
    return resp.data;
  }

  async edit(reader) {
    const resp = await this.put('readers', reader.id, reader);
    return resp.data;
  }

  async remove(id) {
    const resp = await this.delete('readers', id);
    return resp;
  }
}
