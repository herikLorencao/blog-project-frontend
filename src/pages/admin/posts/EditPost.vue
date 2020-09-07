<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Editar Post</h1>
      <div v-if="post" class="crud-fields">
        <q-input v-model="post.title" color="green-13" placeholder="Título" dark/>
        <q-editor class="descrition-input" v-model="post.content" min-height="7rem"
                  square dark placeholder="Conteúdo" />
        <div class="admin-buttons row justify-center">
          <q-btn @click="cancel" class="btn-cancelar" no-caps>Cancelar</q-btn>
          <q-btn @click="edit" type="submit" class="btn-salvar" no-caps>Salvar</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PostService from 'src/services/PostService';
import notify, { TypeMessage } from 'src/mixins/notification';

export default {
  data() {
    return {
      service: new PostService(),
      post: null,
    };
  },
  methods: {
    async edit() {
      const resp = await this.service.edit(this.post);

      if (resp) {
        notify('Post editado com sucesso!', TypeMessage.success);
        await this.$router.push('/admin/posts');
      }
    },
    cancel() {
      this.$router.back();
    },
  },
  async mounted() {
    this.post = await this.service.find(this.$route.params.id);
  },
};
</script>
