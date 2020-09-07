import ApiClient from 'src/services/client/ApiClient';

export default class PostService extends ApiClient {
  async listAll() {
    const resp = await this.list('posts');
    return resp.data;
  }

  async searchPosts(keyword, category) {
    let url = 'posts';

    if (keyword && keyword !== '') {
      url += `?name=${keyword}`;
    }

    if (category && category !== '') {
      url += keyword && keyword !== ''
        ? `&category=${category}`
        : `?category=${category}`;
    }

    return this.list(url);
  }

  async listAllPaginate() {
    return this.list('posts');
  }

  async find(id) {
    const resp = await this.get('posts', id);
    return resp;
  }

  async create(post) {
    if (!post.category_id) {
      post = {
        admin_id: post.admin_id,
        content: post.content,
        date: post.date,
        title: post.title,
      };
    }

    const resp = await this.post('posts', post);
    return resp;
  }

  async edit(post) {
    if (!post.category_id) {
      post = {
        id: post.id,
        admin_id: post.admin_id,
        content: post.content,
        date: post.date,
        title: post.title,
      };
    }

    const resp = await this.put('posts', post.id, post);
    return resp;
  }

  async remove(id) {
    const resp = await this.delete('posts', id);
    return resp;
  }
}
