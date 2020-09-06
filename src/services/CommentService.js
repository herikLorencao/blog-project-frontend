import ApiClient from 'src/services/client/ApiClient';

export default class CommentService extends ApiClient {
  async listAll() {
    const resp = await this.list('comments');
    return resp.data;
  }

  async find(id) {
    const resp = this.get('comments', id);
    return resp.data;
  }

  async create(comment) {
    const resp = this.comment('comments', comment);
    return resp.data;
  }

  async edit(comment) {
    const resp = await this.put('comments', comment.id, comment);
    return resp.data;
  }

  async remove(id) {
    const resp = await this.delete('comments', id);
    return resp;
  }
}
