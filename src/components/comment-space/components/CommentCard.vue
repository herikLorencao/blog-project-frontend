<template>
  <div :class="cssClasses">
    <div class="comment-body row">
      <div class="id column justify-start items-center">
        #{{ id }}
      </div>
      <div class="content column justify-center">
      <span v-if="responseComment" class="response-comment">
        Resposta para o comentário #{{ responseComment }}</span>
        <span class="username">{{ readerName }} - {{ dateFormat }}</span>
        <span class="message">{{ content }}</span>
      </div>
      <div v-if="ownerComment" class="action-buttons column justify-center items-center">
        <div class="row justify-between">
          <q-btn icon="edit" @click="editComment" />
          <q-btn class="btn-space" icon="delete" @click="removeComment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReaderService from 'src/services/ReaderService';
import CommentService from 'src/services/CommentService';
import notify, { TypeMessage } from 'src/mixins/notification';

export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    responseComment: {
      type: Number,
      required: false,
    },
    readerId: {
      type: Number,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ownerComment() {
      return this.readerId === this.$store.getters['readerLogin/getReaderId'];
    },
    cssClasses() {
      return this.idx % 2 === 0
        ? 'comment-card row justify-center light'
        : 'comment-card row justify-center dark';
    },
    dateFormat() {
      const date = new Date(this.date);
      const formatter = new Intl.DateTimeFormat('pt-br');
      return formatter.format(date);
    },
  },
  data() {
    return {
      readerService: new ReaderService(),
      commentService: new CommentService(),
      readerName: null,
    };
  },
  methods: {
    editComment() {
      this.$router.push(`/comentarios/${this.id}`);
    },
    async removeComment() {
      const resp = await this.commentService.remove(this.id);

      if (resp === '') {
        notify('Comentário removido com sucesso', TypeMessage.success);
        this.$emit('reloadComments');
      }
    },
  },
  async mounted() {
    const readerInfo = await this.readerService.find(this.readerId);
    this.readerName = readerInfo.login;
  },
};
</script>

<style lang="scss" scoped>
.light {
  background-color: $background-gray;
}

.comment-card {
  width: 100%;
  margin-bottom: 10px;

  .comment-body {
    color: $white;
    width: 50%;
    margin-bottom: 30px;

    @media (max-width: $breakpoint-md-min) {
      width: 90%;
    }
  }

  .id {
    font-size: 3em;
    width: 10%;
  }

  .action-buttons {
    width: 20%;

    .btn-space {
      margin-left: 10px;
    }
  }

  .content {
    width: 70%;
    padding-left: 5%;

    .response-comment {
      color: $primary;
    }

    .username {
      color: #14DB71;
      font-size: 1em;
    }

    .message {
      margin-top: 10px;
      font-size: 0.9em;
      overflow-y: auto;
    }
  }

}
</style>
