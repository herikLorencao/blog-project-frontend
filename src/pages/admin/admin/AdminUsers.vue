<template>
  <q-page class="flex column justify-center items-center">
    <div class="admin-page column justify-around items-center">
      <h1>Administradores</h1>
      <div class="table table-admin">
        <q-table :data="admins" :columns="columns" row-key="id" selection="single"
                 :selected.sync="selected" dark>
          <template v-slot:top>
            <div class="action-buttons">
              <q-btn class="btn" label="Adicionar" @click="addAdmin" no-caps/>
              <q-btn class="btn btn-space" label="Editar" v-show="tableIsSelected"
                     @click="editAdmin" no-caps/>
              <q-btn class="btn btn-space" label="Remover" v-show="tableIsSelected"
                     @click="removeAdmin" no-caps/>
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
import AdminService from 'src/services/AdminService';

export default {
  data() {
    return {
      service: new AdminService(),
      admins: [],
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
    async loadAdmins() {
      this.admins = await this.service.listAll();
    },
    addAdmin() {
      this.$router.push('/admin/administradores/adicionar');
    },
    editAdmin() {
      const adminId = this.selected[0].id;
      this.$router.push(`/admin/administradores/${adminId}`);
    },
    async removeAdmin() {
      const adminId = this.selected[0].id;
      await this.service.remove(adminId);
      await this.loadAdmins();
    },
  },
  async created() {
    await this.loadAdmins();
  },
};
</script>
