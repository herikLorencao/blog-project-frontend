<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Comentários</h1>
      <div class="table table-comment">
        <q-table :data="posts" :columns="columns" row-key="id" selection="single"
                 :selected.sync="selected" dark>
          <template v-slot:top>
            <div class="action-buttons">
              <q-btn class="btn btn-space" label="Trocar Visibilidade"
                     v-show="tableIsSelected" @click="toggleVisibility" no-caps/>
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
import CommentService from 'src/services/CommentService';

export default {
  data() {
    return {
      service: new CommentService(),
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
          field: 'content',
          name: 'content',
          label: 'CONTEÚDO',
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
        {
          field: 'post_id',
          name: 'post_id',
          label: 'POST (ID)',
          required: true,
          align: 'center',
          headerClasses: 'header-cell-style',
        },
        {
          field: 'reader_id',
          name: 'reader_id',
          label: 'LEITOR (ID)',
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
    async loadComment() {
      this.posts = await this.service.listAll();
    },
    async toggleVisibility() {
      // const commentId = this.selected[0].id;
    },
  },
  async created() {
    await this.loadComment();
  },
};
</script>
