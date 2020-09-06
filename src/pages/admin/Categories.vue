<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Categorias</h1>
      <div class="table table-category">
        <q-table :data="categories" :columns="columns" row-key="id" selection="single"
                 :selected.sync="selected" dark>
          <template v-slot:top>
            <div class="action-buttons">
              <q-btn class="btn" label="Adicionar" @click="addCategory" no-caps/>
              <q-btn class="btn btn-space" label="Editar" v-show="tableIsSelected"
                     @click="editCategory" no-caps/>
              <q-btn class="btn btn-space" label="Remover" v-show="tableIsSelected"
                     @click="removeCategory" no-caps/>
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
import CategoryService from 'src/services/CategoryService';

export default {
  data() {
    return {
      service: new CategoryService(),
      categories: [],
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
          field: 'name',
          name: 'name',
          label: 'NOME',
          required: true,
          align: 'center',
          headerClasses: 'header-cell-style',
        },
        {
          field: 'sub_category',
          name: 'sub_category',
          label: 'CATEGORIA PAI',
          format: (value) => (value || 'Não Existente'),
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
    async loadCategories() {
      this.categories = await this.service.listAll();
    },
    addCategory() {
      this.$router.push('/admin/categorias/adicionar');
    },
    editCategory() {
      const categoryId = this.selected[0].id;
      this.$router.push(`/admin/categorias/${categoryId}`);
    },
    async removeCategory() {
      const categoryId = this.selected[0].id;
      await this.service.remove(categoryId);
      await this.loadCategories();
    },
  },
  async created() {
    await this.loadCategories();
  },
};
</script>
