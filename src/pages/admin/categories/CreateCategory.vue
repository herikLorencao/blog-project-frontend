<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Adicionar Categoria</h1>
      <div class="crud-fields">
        <q-input v-model="category.name" color="green-13" placeholder="Nome" dark/>
        <q-input v-model="category.parent_category" color="green-13" placeholder="Categoria Pai"
                 dark type="number" />
        <div class="admin-buttons row justify-center">
          <q-btn @click="cancel" class="btn-cancelar" no-caps>Cancelar</q-btn>
          <q-btn @click="create" type="submit" class="btn-salvar" no-caps>Salvar</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CategoryService from 'src/services/CategoryService';
import notify, { TypeMessage } from 'src/mixins/notification';

export default {
  data() {
    return {
      service: new CategoryService(),
      category: {},
    };
  },
  methods: {
    async create() {
      const resp = await this.service.create(this.category);

      if (resp) {
        notify('Categoria criada com sucesso!', TypeMessage.success);
        await this.$router.push('/admin/categorias');
      }
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>
