<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Editar Administrador</h1>
      <div class="crud-fields">
        <q-input v-model="admin.login" color="green-13" placeholder="Login" dark/>
        <q-input v-model="admin.email" color="green-13" placeholder="Email"
                 dark/>
        <q-input v-model="admin.password" color="green-13" placeholder="Senha" dark
                 type="password"/>
        <div class="admin-buttons row justify-center">
          <q-btn @click="cancel" class="btn-cancelar" no-caps>Cancelar</q-btn>
          <q-btn @click="edit" type="submit" class="btn-salvar" no-caps>Salvar</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import AdminService from 'src/services/AdminService';
import notify, { TypeMessage } from 'src/mixins/notification';

export default {
  data() {
    return {
      service: new AdminService(),
      admin: null,
    };
  },
  methods: {
    async edit() {
      const resp = await this.service.edit(this.admin);

      if (resp) {
        notify('Administrador editado com sucesso!', TypeMessage.success);
        await this.$router.push('/admin/administradores');
      }
    },
    cancel() {
      this.$router.back();
    },
  },
  async mounted() {
    this.admin = await this.service.find(this.$route.params.id);
  },
};
</script>
