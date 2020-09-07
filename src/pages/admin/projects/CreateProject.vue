<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Adicionar Projeto</h1>
      <div class="crud-fields-editor">
        <q-input v-model="project.title" color="green-13" placeholder="Nome" dark/>
        <q-input v-model="project.url" color="green-13" placeholder="URL do projeto"
                 dark/>
        <q-input v-model="project.img_url" color="green-13" placeholder="URL da imagem" dark/>
        <q-editor class="descrition-input" v-model="project.description" min-height="5rem"
                  square dark placeholder="Descrição do projeto"
                  @paste.native="evt => pasteCapture(evt)"
                  @drop.native="evt => dropCapture(evt)"/>
        <div class="admin-buttons row justify-center">
          <q-btn @click="cancel" class="btn-cancelar" no-caps>Cancelar</q-btn>
          <q-btn @click="create" type="submit" class="btn-salvar" no-caps>Salvar</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ProjectService from 'src/services/ProjectService';
import notify, { TypeMessage } from 'src/mixins/notification';

export default {
  data() {
    return {
      service: new ProjectService(),
      project: {
        description: '',
        admin_id: this.$store.getters['login/getUserId'],
      },
    };
  },
  methods: {
    async create() {
      const resp = await this.service.create(this.project);

      if (resp) {
        notify('Projeto criado com sucesso!', TypeMessage.success);
        await this.$router.push('/admin/projetos');
      }
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>
