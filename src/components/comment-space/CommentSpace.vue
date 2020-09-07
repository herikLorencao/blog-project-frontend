<template>
<div class="comment-space column items-center" v-if="comments">
  <h1>Comentários</h1>
  <CommentCard v-for="(comment, idx) in comments.data" :content="comment.content" :id="comment.id"
    :date="comment.date" :readerId="comment.reader_id" :key="comment.id" :idx="idx"
               :responseComment="comment.reply_comment" @reloadComments="loadComments" />
  <q-btn class="btn-comment" label="Adicionar Comentário" no-caps @click="addComment"/>
</div>
</template>

<script>
import CommentService from 'src/services/CommentService';
import CommentCard from 'components/comment-space/components/CommentCard.vue';

export default {
  components: {
    CommentCard,
  },
  data() {
    return {
      service: new CommentService(),
      comments: null,
    };
  },
  methods: {
    async loadComments() {
      this.comments = await this.service.searchByPost(this.$route.params.id);
    },
    addComment() {
      if (this.$store.getters['readerLogin/getReaderId']) {
        this.$store.commit('readerLogin/setCommentPostId', this.$route.params.id);
        this.$router.push('/comentarios/adicionar');
      } else {
        this.$router.push('/login');
      }
    },
  },
  async mounted() {
    await this.loadComments();
  },
};
</script>

<style lang="scss" scoped>
.comment-space {
  width: 100%;
  margin-top: 100px;
}

h1 {
  margin-bottom: 50px;
}

.btn-comment {
  background-color: $background-gray;
  color: $white;
  font-size: 1.2em;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
