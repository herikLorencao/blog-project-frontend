<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Escrever Post</h1>
      <div class="crud-fields-editor">
        <q-input v-model="post.title" color="green-13" placeholder="Título" dark/>
        <div class="category-selected column items-center">
          <q-select class="category-search" outlined v-model="selectedCategory"
                    :options="categories" label="Selecione a categoria" color="white" dark>
          </q-select>
        </div>
        <q-editor class="descrition-input" v-model="post.content" min-height="7rem"
                  square dark placeholder="Conteúdo" @paste.native="evt => pasteCapture(evt)"
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
import PostService from 'src/services/PostService';
import notify, { TypeMessage } from 'src/mixins/notification';
import CategoryService from 'src/services/CategoryService';

export default {
  data() {
    return {
      categoryContent: null,
      categoryService: new CategoryService(),
      categories: [],
      selectedCategory: null,
      service: new PostService(),
      post: {
        content: '',
        admin_id: this.$store.getters['login/getUserId'],
      },
    };
  },
  methods: {
    async create() {
      if (this.selectedCategory) {
        const categoryObject = this.categoryContent.find(
          (category) => category.name === this.selectedCategory,
        );
        this.post.category_id = categoryObject.id;
      }

      const resp = await this.service.create(this.post);

      if (resp) {
        notify('Post publicado com sucesso!', TypeMessage.success);
        await this.$router.push('/admin/posts');
      }
    },
    cancel() {
      this.$router.back();
    },
  },
  async mounted() {
    this.categoryContent = await this.categoryService.listAll();

    if (Array.isArray(this.categoryContent)) {
      this.categories = this.categoryContent.map((category) => category.name);
    }
  },
};
</script>
