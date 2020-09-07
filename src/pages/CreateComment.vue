<template>
  <q-page class="flex column justify-start items-center">
    <h1>Adicionar Comentário</h1>
    <div class="comment-fields">
      <q-input v-model="comment.content" placeholder="Conteúdo" color="white" dark autogrow/>
      <q-select class="comment-response" outlined v-model="selectedComment"
                :options="comments" label="Comentário para resposta (opcional)"
                color="white" dark>
      </q-select>
      <q-btn class="add-comment-btn" label="Adicionar Comentário" @click="addComment"
             no-caps dark/>
    </div>
  </q-page>
</template>

<script>
import CommentService from 'src/services/CommentService';
import notify, { TypeMessage } from 'src/mixins/notification';

export default {
  data() {
    return {
      service: new CommentService(),
      commentaryContent: null,
      comments: [],
      selectedComment: null,
      comment: {
        post_id: this.$store.getters['readerLogin/getPostCommentId'],
        reader_id: this.$store.getters['readerLogin/getReaderId'],
      },
    };
  },
  methods: {
    async addComment() {
      if (this.selectedComment) {
        this.comment.reply_comment = this.selectedComment;
      }

      const resp = await this.service.create(this.comment);

      if (resp) {
        notify('Comentário criado com sucesso', TypeMessage.success);
        this.$router.back();
      }
    },
  },
  async mounted() {
    this.commentaryContent = await this.service.listAll();

    if (Array.isArray(this.commentaryContent)) {
      this.comments = this.commentaryContent.map((comment) => comment.id);
    }
  },
};
</script>
