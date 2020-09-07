<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Leitores</h1>
      <div class="table table-reader">
        <q-table :data="readers" :columns="columns" row-key="id" selection="single"
                 :selected.sync="selected" dark>
          <template v-slot:top>
            <div class="action-buttons">
              <q-btn class="btn btn-space" label="Permissões" v-show="tableIsSelected"
                     @click="editReader" no-caps/>
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
import ReaderService from 'src/services/ReaderService';

export default {
  data() {
    return {
      service: new ReaderService(),
      readers: [],
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
          field: 'login',
          name: 'login',
          label: 'LOGIN',
          required: true,
          align: 'center',
          headerClasses: 'header-cell-style',
        },
        {
          field: 'email',
          name: 'email',
          label: 'EMAIL',
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
    async loadReaders() {
      this.readers = await this.service.listAll();
    },
    addReader() {
      this.$router.push('/admin/leitores/adicionar');
    },
    editReader() {
      const readerId = this.selected[0].id;
      this.$router.push(`/admin/projetos/${readerId}`);
    },
  },
  async created() {
    await this.loadReaders();
  },
};
</script>
