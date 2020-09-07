<template>
  <q-page v-if="postsData" class="flex column justify-start items-center">
    <h1>Posts</h1>
    <div v-if="postsData" class="navigation-menu-posts column items-center">
      <q-input class="search-input" v-model="postSearch" dark
               placeholder="Digite um título para pesquisa" color="white"/>
      <q-select class="category-search" outlined v-model="selectedCategory"
                :options="categories" label="Selecione a categoria" color="white" dark>
      </q-select>
      <q-btn @click="search" class="search-btn" label="Pesquisar" no-caps dark />
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          color="white"
          text-color="gray"
          v-model="currentPage"
          :max="postsData.total"
          :direction-links="true"
          :boundary-links="true"
          icon-first="skip_previous"
          icon-last="skip_next"
          icon-prev="fast_rewind"
          icon-next="fast_forward"
        >
        </q-pagination>
      </div>
      <div class="posts column">
        <CardPost v-for="(post, idx) in postsData.data" :title="post.title"
                  :dateInfo="post.date" :idx="idx" :key="post.id" :id="post.id"/>
      </div>
    </div>
  </q-page>
  <q-page class="column justify-center items-center"  v-else>
    <q-spinner
      color="white"
      :thickness="2"
      size="10em"
    />
  </q-page>
</template>

<script>
import PostService from 'src/services/PostService';
import CategoryService from 'src/services/CategoryService';
import CardPost from 'components/card-post/CardPost.vue';

export default {
  components: {
    CardPost,
  },
  data() {
    return {
      postService: new PostService(),
      categoryContent: null,
      categoryService: new CategoryService(),
      postsData: null,
      categories: [],
      selectedCategory: null,
      postSearch: '',
      currentPage: 1,
    };
  },
  methods: {
    async search() {
      let category = null;

      if (Array.isArray(this.categoryContent) && this.selectedCategory) {
        const categoryInfo = this.categoryContent.find(
          (categoryObject) => categoryObject.name === this.selectedCategory,
        );
        category = categoryInfo.id;
      }

      this.postsData = await this.postService.searchPosts(this.postSearch, category);
    },
  },
  async mounted() {
    const resp = await this.postService.listAllPaginate();

    if (resp) {
      this.postsData = resp;
    }

    this.categoryContent = await this.categoryService.listAll();

    if (Array.isArray(this.categoryContent)) {
      this.categories = this.categoryContent.map((category) => category.name);
    }
  },
};
</script>
