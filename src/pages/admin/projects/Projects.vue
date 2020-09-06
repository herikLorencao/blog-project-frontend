<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Projetos</h1>
      <div class="table table-project">
        <q-table :data="projects" :columns="columns" row-key="id" selection="single"
                 :selected.sync="selected" dark>
          <template v-slot:top>
            <div class="action-buttons">
              <q-btn class="btn" label="Adicionar" @click="addProject" no-caps/>
              <q-btn class="btn btn-space" label="Editar" v-show="tableIsSelected"
                     @click="editProject" no-caps/>
              <q-btn class="btn btn-space" label="Remover" v-show="tableIsSelected"
                     @click="removeProject" no-caps/>
            </div>
          </template>
          <template v-slot:no-data>
            <q-btn color="dark" icon="report" label="Nenhum item disponível" no-caps />
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import ProjectService from 'src/services/ProjectService';

export default {
  data() {
    return {
      service: new ProjectService(),
      projects: [],
      selected: [],
      columns: [
        {
          field: 'id',
          name: 'id',
          label: 'ID',
          required: true,
          align: 'center',
          headerClasses: 'header-cell-style',
        },
        {
          field: 'title',
          name: 'title',
          label: 'TÍTULO',
          required: true,
          align: 'center',
          headerClasses: 'header-cell-style',
        },
        {
          field: 'description',
          name: 'description',
          label: 'DESCRIÇÃO',
          required: true,
          align: 'center',
          headerClasses: 'header-cell-style',
        },
        {
          field: 'img_url',
          name: 'img_url',
          label: 'URL DA IMAGEM',
          required: true,
          align: 'center',
          headerClasses: 'header-cell-style',
        },
        {
          field: 'url',
          name: 'url',
          label: 'URL',
          required: true,
          align: 'center',
          headerClasses: 'header-cell-style',
        },
      ],
    };
  },
  computed: {
    tableIsSelected() {
      return this.selected.length > 0;
    },
  },
  methods: {
    async loadProjects() {
      this.projects = await this.service.listAll();
    },
    addProject() {
      this.$router.push('/admin/projetos/adicionar');
    },
    editProject() {
      const projectId = this.selected[0].id;
      this.$router.push(`/admin/projetos/${projectId}`);
    },
    async removeProject() {
      const projectId = this.selected[0].id;
      await this.service.remove(projectId);
      await this.loadProjects();
    },
  },
  async created() {
    await this.loadProjects();
  },
};
</script>
