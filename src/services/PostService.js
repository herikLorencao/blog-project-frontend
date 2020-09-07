import ApiClient from 'src/services/client/ApiClient';

export default class PostService extends ApiClient {
  async listAll() {
    const resp = await this.list('posts');
    return resp.data;
  }

  async find(id) {
    const resp = await this.get('posts', id);
    return resp;
  }

  async create(post) {
    const resp = await this.post('posts', post);
    return resp;
  }

  async edit(post) {
    const resp = await this.put('posts', post.id, post);
    return resp;
  }

  async remove(id) {
    const resp = await this.delete('posts', id);
    return resp;
  }
}
