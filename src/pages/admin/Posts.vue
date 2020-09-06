<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Posts</h1>
      <div class="table table-post">
        <q-table :data="posts" :columns="columns" row-key="id" selection="single"
                 :selected.sync="selected" dark>
          <template v-slot:top>
            <div class="action-buttons">
              <q-btn class="btn" label="Adicionar" @click="addPost" no-caps/>
              <q-btn class="btn btn-space" label="Editar" v-show="tableIsSelected"
                     @click="editPost" no-caps/>
              <q-btn class="btn btn-space" label="Remover" v-show="tableIsSelected"
                     @click="removePost" no-caps/>
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
import PostService from 'src/services/PostService';

export default {
  data() {
    return {
      service: new PostService(),
      posts: [],
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
          field: 'date',
          name: 'date',
          label: 'DATA DE CRIAÇÃO',
          format: (value) => {
            const date = new Date(value);
            const dateFormat = Intl.DateTimeFormat('pt-BR');
            return dateFormat.format(date);
          },
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
    async loadPosts() {
      this.posts = await this.service.listAll();
    },
    addPost() {
      this.$router.push('/admin/posts/adicionar');
    },
    editPost() {
      const postId = this.selected[0].id;
      this.$router.push(`/admin/posts/${postId}`);
    },
    async removePost() {
      const postId = this.selected[0].id;
      await this.service.remove(postId);
      await this.loadPosts();
    },
  },
  async created() {
    await this.loadPosts();
  },
};
</script>
