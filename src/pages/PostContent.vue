<template>
  <q-page v-if="post" class="flex column justify-start items-center">
    <ReaderUserInfo />
    <h1>{{ post.title }}</h1>
    <div class="content" v-html="post.content"></div>
    <CommentSpace />
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
import ReaderUserInfo from 'components/reader-user-info/ReaderUserInfo.vue';
import CommentSpace from 'components/comment-space/CommentSpace.vue';

export default {
  components: {
    ReaderUserInfo,
    CommentSpace,
  },
  data() {
    return {
      service: new PostService(),
      post: null,
    };
  },
  async mounted() {
    this.post = await this.service.find(this.$route.params.id);
  },
};
</script>
