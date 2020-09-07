import ApiClient from 'src/services/client/ApiClient';

export default class AdminService extends ApiClient {
  async listAll() {
    const resp = await this.list('admins');
    return resp.data;
  }

  async find(id) {
    const resp = await this.get('admins', id);
    return resp;
  }

  async create(admin) {
    const resp = this.post('admins', admin);
    return resp;
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
