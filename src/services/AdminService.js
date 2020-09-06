import ApiClient from 'src/services/client/ApiClient';

export default class AdminService extends ApiClient {
  async listAll() {
    const resp = await this.list('admins');
    return resp.data;
  }

  async find(id) {
    const resp = this.get('admins', id);
    return resp.data;
  }

  async create(admin) {
    const resp = this.post('admins', admin);
    return resp.data;
  }

  async edit(admin) {
    const resp = await this.put('admins', admin.id, admin);
    return resp.data;
  }

  async remove(id) {
    const resp = await this.delete('admins', id);
    return resp;
  }
}
