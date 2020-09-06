import ApiClient from 'src/services/client/ApiClient';

export default class ProjectService extends ApiClient {
  async listAll() {
    const resp = await this.list('projects');
    return resp.data;
  }

  async find(id) {
    const resp = this.get('projects', id);
    return resp.data;
  }

  async create(project) {
    const resp = this.post('projects', project);
    return resp.data;
  }

  async edit(project) {
    const resp = await this.put('projects', project.id, project);
    return resp.data;
  }

  async remove(id) {
    const resp = await this.delete('projects', id);
    return resp;
  }
}
