import ApiClient from 'src/services/client/ApiClient';

export default class CommentService extends ApiClient {
  async searchByPost(postId) {
    return this.list(`comments?postId=${postId}`);
  }

  async listAll() {
    const resp = await this.list('comments');
    return resp.data;
  }

  async find(id) {
    const resp = this.get('comments', id);
    return resp;
  }

  async create(comment) {
    const resp = this.post('comments', comment);
    return resp;
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
