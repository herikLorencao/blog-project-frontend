import ApiClient from 'src/services/client/ApiClient';

export default class CategoryService extends ApiClient {
  async listAll() {
    const resp = await this.list('categories');
    return resp.data;
  }

  async find(id) {
    const resp = await this.get('categories', id);
    return resp.data;
  }

  async create(category) {
    const resp = await this.category('categories', category);
    return resp.data;
  }

  async edit(category) {
    const resp = await this.put('categories', category.id, category);
    return resp.data;
  }

  async remove(id) {
    const resp = await this.delete('categories', id);
    return resp;
  }
}
