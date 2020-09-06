import ApiClient from 'src/services/client/ApiClient';

export default class ProjectService extends ApiClient {
  async listAll() {
    const resp = await this.list('projects');
    return resp.data;
  }

  async find(id) {
    return this.get('projects', id);
  }

  async create(project) {
    return this.post('projects', project);
  }

  async edit(project) {
    const resp = await this.put('projects', project.id, project);
    return resp;
  }

  async remove(id) {
    const resp = await this.delete('projects', id);
    return resp;
  }
}
