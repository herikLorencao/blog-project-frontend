import ApiClient from 'src/services/client/ApiClient';

export default class CategoryService extends ApiClient {
  async listAll() {
    const resp = await this.list('categories');
    return resp.data;
  }

  async find(id) {
    const resp = await this.get('categories', id);
    return resp;
  }

  async create(category) {
    if (category.sub_category === '') {
      category = {
        name: category.name,
      };
    }

    const resp = await this.post('categories', category);
    return resp;
  }

  async edit(category) {
    if (category.sub_category === '') {
      category = {
        id: category.id,
        name: category.name,
      };
    }

    const resp = await this.put('categories', category.id, category);
    return resp;
  }

  async remove(id) {
    const resp = await this.delete('categories', id);
    return resp;
  }
}
