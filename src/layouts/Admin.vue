<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="header-style" elevated>
      <q-toolbar class="row justify-between">
        <div>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </div>

        <div class="menu-user row items-center">
          <q-fab square class="btn" icon="person" :label="adminName" direction="down" flat
                 no-caps>
            <q-fab-action class="btn-logout" @click="logout" text-color="white">
              Sair
            </q-fab-action>
          </q-fab>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="side-menu"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list class="menu-list column justify-between">
        <q-item to="/admin/projetos" clickable>
          <q-item-section>Projetos</q-item-section>
        </q-item>
        <q-item @click="openSubmenu('usuarios')" clickable>
          <q-item-section>Usuários</q-item-section>
        </q-item>
        <q-item to="/admin/administradores" v-show="menuOpen === 'usuarios'" clickable>
          <q-item-section class="submenu">Administradores</q-item-section>
        </q-item>
        <q-item to="/admin/leitores" v-show="menuOpen === 'usuarios'" clickable>
          <q-item-section class="submenu">Leitores</q-item-section>
        </q-item>
        <q-item @click="openSubmenu('posts')" clickable>
          <q-item-section>Posts</q-item-section>
        </q-item>
        <q-item to="/admin/posts"  v-show="menuOpen === 'posts'" clickable>
          <q-item-section class="submenu">Listar Posts</q-item-section>
        </q-item>
        <q-item to="/admin/posts/comentarios" v-show="menuOpen === 'posts'" clickable>
          <q-item-section class="submenu">Comentários</q-item-section>
        </q-item>
        <q-item to="/admin/categorias" clickable>
          <q-item-section>Categorias</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="footer-style row justify-center items-center">
      Desenvolvido por Herik S.Lorenção
    </q-footer>
  </q-layout>
</template>

<script>
import notify, { TypeMessage } from 'src/mixins/notification';

export default {
  data() {
    return {
      leftDrawerOpen: false,
      adminName: 'Herik',
      menuOpen: '',
    };
  },
  methods: {
    openSubmenu(menuName) {
      if (this.menuOpen === menuName) {
        this.menuOpen = '';
      } else {
        this.menuOpen = menuName;
      }
    },
    logout() {
      this.$store.commit('login/defineUserId', null);
      this.$router.push('/admin/login');
      notify('Logout realizado com sucesso', TypeMessage.success);
    },
  },
  async mounted() {
    // const adminService = new AdminService();
    // const userId = this.$store.getters['login/getIdUsuario'];
    //
    // const admin = await adminService.find(userId);
    //
    // if (admin && admin.name) {
    //   this.adminName = admin.name;
    // }
    this.adminName = 'Herik';
  },
};
</script>

<style lang="scss" scoped>
</style>
