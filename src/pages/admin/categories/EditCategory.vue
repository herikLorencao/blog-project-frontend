<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Editar Categoria</h1>
      <div class="crud-fields">
        <q-input v-model="category.name" color="green-13" placeholder="Nome" dark/>
        <q-input v-model="category.sub_category" color="green-13" placeholder="Categoria Pai"
                 dark type="number" :readonly="true"/>
        <div class="admin-buttons row justify-center">
          <q-btn @click="cancel" class="btn-cancelar" no-caps>Cancelar</q-btn>
          <q-btn @click="edit" type="submit" class="btn-salvar" no-caps>Salvar</q-btn>
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
      category: null,
    };
  },
  methods: {
    async edit() {
      const resp = await this.service.edit(this.category);

      if (resp) {
        notify('Categoria editada com sucesso!', TypeMessage.success);
        await this.$router.push('/admin/categorias');
      }
    },
    cancel() {
      this.$router.back();
    },
  },
  async mounted() {
    this.category = await this.service.find(this.$route.params.id);
  },
};
</script>
